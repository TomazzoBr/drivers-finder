const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`🚚 Server delivered at http://localhost:${PORT}`)
  }) 
