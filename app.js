const express = require('express');
const app = express();
const port = 4000;
const fetch = require('node-fetch');

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.urlencoded());
app.engine('html',require('ejs').renderFile);

//doing an async function to get the results of an api call
async function get_api_data(request, res){
    let search_term = request.search;
    let baseUrl = 'https://www.googleapis.com/customsearch/v1?';
    let apiKey = 'AIzaSyA6x_JcA13MIKHvGEGxYZWI8v3dCaLx7QI';
    let cx = '001653267071644860909:phly35j0jfq';

    let url = `${baseUrl}key=${apiKey}&cx=${cx}&q=${search_term}`;

    const raw_response = await fetch(url);
    const response = await raw_response.json();
    // console.log(response.items[0]);
    // console.log(response.items[0].title)
    // console.log(response.items[0].link)
    // console.log({data:response.items})

    res.render('results.ejs', {data: response.items});

}


app.get('/',(req,res)=>{

    res.render('homepage.html')
})

app.post('/results/',(req,res)=>{
    // console.log(req.body);
    get_api_data(req.body, res);
    // if(req.body.hasOwnProperty('btn_search'))
    // {
    //     res.render('results.ejs', {data: req.body});
    //     // console.log("Search");
    // }
    // else if (req.body.hasOwnProperty('btn_lucky'))
    // {
    //     // console.log("Feeling Lucky");
    // }
    
})

app.listen(port,()=> console.log(`listening on ${port}`))