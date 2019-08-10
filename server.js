const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('hello world') )

// to na heroku poszuka portu gdy bedzie odpalac node PORT=50010 np a jak nie to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));

