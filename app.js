const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.urlencoded());
app.engine('html',require('ejs').renderFile);

const getApiData = formData =>
{

    return "nothing";
}

app.get('/',(req,res)=>{

    res.render('homepage.html')
})

app.post('/results/',(req,res)=>{
    console.log(req.body);
    let apiData = getApiData(req.body);
    console.log(apiData);
    if(req.body.hasOwnProperty('btn_search'))
    {
        res.render('results.ejs', {data: req.body});
        // console.log("Search");
    }
    else if (req.body.hasOwnProperty('btn_lucky'))
    {
        // console.log("Feeling Lucky");
    }
    
})

app.listen(port,()=> console.log(`listening on ${port}`))