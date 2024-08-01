const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const Question = require('./models/Question');

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.post('/ask', async (req, res) => {
  try {
    const { name, question, isAnonymous } = req.body;
    const newQuestion = new Question({
      name: isAnonymous ? 'Anonymous' : name,
      question
    });
    await newQuestion.save();
    res.status(201).send('Question submitted successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/questions', async (req, res) => {
  try {
    // uncomment during production
    // const questions = await Question.find({ answer: {$ne: null}});
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route to answer a question
app.post('/answer', async (req, res) => {
  try {
    const { questionId, answer } = req.body;
    await Question.findByIdAndUpdate(questionId, { answer });
    res.status(200).send('Question answered successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
