const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send('Fields cannot be empty');
  }

  if (!email.includes('@')) {
    return res.send('Invalid email format');
  }

  if (password.length < 8) {
    return res.send('Password must be at least 8 characters');
  }

  return res.send(`Login successful for ${email}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
