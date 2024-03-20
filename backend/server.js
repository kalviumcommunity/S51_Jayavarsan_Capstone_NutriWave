const express = require('express');
const mongoose = require('mongoose');

const app = express();


const uri = "mongodb+srv://geekygure:Ugen0bdtJ2rJJ32p@nutriwave.bwjcxkj.mongodb.net/?retryWrites=true&w=majority&appName=nutriwave";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("This is nutriWave. Wait for updates.");
});

app.listen(3000, () => {
  console.log("Nutriwave server started running on port 3000");
});
