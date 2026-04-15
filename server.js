const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// List boards endpoint
app.get('/boards', (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`TeamBoard running on http://localhost:${PORT}`);
});
