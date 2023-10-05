const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const dbUsername = 'aditya123';
const dbPassword = 'aditya123';
const dbName = 'Employee';

// Replace the connection URL with your MongoDB Atlas connection string
const dbURL = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.jqvh9ci.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// MongoDB Connection (you should replace 'mongodb://localhost/employeeDB' with your actual MongoDB connection string)
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const Employee = mongoose.model('Employee', {
  name: String,
  role: String,
  salary: Number,
});

// Create a new employee
app.post('/employees', async (req, res) => {
  try {
    const { name, role, salary } = req.body;
    const employee = new Employee({ name, role, salary });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
