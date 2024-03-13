const express = require('express')
const app =  express()

app.get('/' ,(req,res)=>{
    res.send("This is nutriWave wait for updates")
})

app.listen(3000 , ()=>{
    console.log("Nutriwave server started running  on port 3000");
})