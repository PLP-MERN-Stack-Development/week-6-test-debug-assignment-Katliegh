const express = require('express');
const morgan = require('morgan');
const app = express();
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use('/api', itemRoutes);
app.use(morgan('dev'));

module.exports = app;

// This goes AFTER all routes
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.stack);
  res.status(500).json({ message: 'Something went wrong.' });
});
