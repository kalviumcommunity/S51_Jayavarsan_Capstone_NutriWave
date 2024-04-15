require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
// const cros =require('cros');
const app = express();

app.use(express.json())
// app.use(cros())



const uri = process.env.DDURL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send("This is nutriWave. Wait for updates.");
// });

app.listen(process.env.PORT, () => {
  console.log("Nutriwave server started running on port 3000");
});
