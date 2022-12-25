// Import Express Module

import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello World..");
})

app.get('/api',(req,res)=>{
    res.send(JSON.stringify({name:"Aaditya",age:21}));
})

app.all(/[a-z]+/, function(req, res) {
    res.send("Page Not Found!");
})


app.listen(port,()=>{
    console.log(`Server Listening At http://localhost:${port}`);
})