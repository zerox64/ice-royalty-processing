const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const songs = require('./songs.json'); 
app.use(cors());

app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});