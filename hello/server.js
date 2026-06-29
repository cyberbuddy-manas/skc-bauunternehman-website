const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();

app.use(cors()); // ✅ fix CORS

app.get('/print', (req, res) => {
    console.log('Received print request');
    exec("open http://google.com")
  exec(`echo "TEST PRINT FROM WEB" | lp -d Metapace-p2`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Print failed');
    }
    res.send('Printed');
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));