const express = require('express');

const app = express();

app.get('/api/events', (req, res) => {
  const events = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(events);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);