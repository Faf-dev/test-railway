import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Permet les appels cross-origin
app.use(express.json());

// Base de données fictive en mémoire
let users = [
  { id: 1, username: 'john', email: 'john@example.com' },
  { id: 2, username: 'jane', email: 'jane@example.com' }
];

// Routes API
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend API is running!', timestamp: new Date() });
});

app.get('/api/users', (req, res) => {
  res.json({ users });
});

app.post('/api/users', (req, res) => {
  const { username, email } = req.body;
  
  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
  }

  const newUser = {
    id: users.length + 1,
    username,
    email
  };
  
  users.push(newUser);
  res.status(201).json({ user: newUser, message: 'User created successfully' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend API running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});
