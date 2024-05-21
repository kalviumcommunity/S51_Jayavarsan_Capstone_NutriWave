require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
// const cros =require('cros');
const app = express();
const userRoutes = require('./routes/Users');
const authRoutes = require('./routes/auth')
const caloriesRoutes = require('./routes/calories');
const weightRoutes = require('./routes/weight');



app.use(express.json())
// app.use(cros())

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/calories", caloriesRoutes);
app.use("/api/weight", weightRoutes);

const uri = process.env.DDURL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

app.use(express.json());



app.listen(process.env.PORT, () => {
  console.log("Nutriwave server started running on port 3000");
});
