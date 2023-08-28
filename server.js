const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.get('/files', (req, res) => {
  const directoryPath = path.join('C:\\');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    res.json(files);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
