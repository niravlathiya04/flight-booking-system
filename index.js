const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Flight Booking System API');
});

// Placeholder routes for microservices
app.use('/user', (req, res) => res.send('User Service'));
app.use('/booking', (req, res) => res.send('Booking Service'));
app.use('/notification', (req, res) => res.send('Notification Service'));
app.use('/mailer', (req, res) => res.send('Mailer Service'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 