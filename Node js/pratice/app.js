const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("Server is running successfully on port 3000");
});

app.use((req,res,next)=>{
    console.log("jello world")
    next()
})
app.use((req,res,next)=>{
    console.log("hello middlware")
   next()
})

app.get('/', (req, res) => {
  res.send('<p>home page</p>');
});
app.get('/about', (req, res) => {
  res.send('<p>about page</p>');
});


