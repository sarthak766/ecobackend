//mongodb+srv://sarthakbadola97:@Sarthak09@cluster0.clndvfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/contact'); // Assuming the model file is in a "models" folder

const app = express();
const port = 3000; // Or any port you prefer
const cors = require('cors');
// Connect to MongoDB
mongoose.connect('mongodb+srv://sarthakbadola97:Sarthak09@cluster0.clndvfh.mongodb.net/')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/submit', async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, phone } = req.body;

    // Create new contact document
    const newContact = new Contact({
      name,
      email,
      phone
    });

    // Save the contact to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//mongodb+srv://sarthakbadola97:Sarthak09@cluster0.clndvfh.mongodb.net/