const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

app.get('/api/quiz', cors(), (req, res) => {
  const quiz = [
    { id: 100, question: 'Are you a cat or a ant?', answer1: 'cat 🐈', answer2: 'ant 🐜' },
    { id: 101, question: 'Swar Wars are stupid', answer1: 'Im furious 👹', answer2: 'hell yes! 👍' },
    { id: 102, question: 'Swar Trek is for nerds', answer1: 'oh no 🙊', answer2: 'haha 🤪' },
  ]

  res.json(quiz);
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
