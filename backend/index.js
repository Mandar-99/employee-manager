const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let employees = [];

app.get('/api/employees', (req, res) => {
  res.json(employees);
});


app.post('/api/employees', (req, res) => {
  const { name, email, department, joiningDate } = req.body;
  const id = Date.now(); // Simple ID generation
  const employee = { id, name, email, department, joiningDate };
  employees.push(employee);
  res.status(201).json({ message: 'Employee added!' });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
