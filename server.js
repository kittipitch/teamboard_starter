const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// TODO: Add routes here during workshop

app.listen(PORT, () => {
  console.log(`TeamBoard running on http://localhost:${PORT}`);
});
