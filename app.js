const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.urlencoded());
app.engine('html',require('ejs').renderFile);
app.get('/',(req,res)=>{

    res.render('homepage.html')
})

app.post('/results/',(req,res)=>{
    console.log(req.body);
    res.render('results.html', {data: req.body});
})

app.listen(port,()=> console.log(`listening on ${port}`))