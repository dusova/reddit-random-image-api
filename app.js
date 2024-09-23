const express = require('express');
const ejs = require('ejs');
const app = express();
const snekfetch = require('node-fetch');
// EJS
app.set('view engine', 'ejs');
/*app.get('/', (req, res) => res.render('index'));
*/

 
app.get('/',   async(req, res) => {
    var facts = ["burdurland", "TurkeyJerky", "KGBTR", "bgy", "duznamemes", "kucukinsanlaryoutube", "lanetliyorumlar", "ShitpostTC", "tamamahbapengelli", "Turkey"];
var  fact  =  Math.floor(Math.random() * (facts.length - 0 + 1 ) + 0 )
var facts1 = ["hot", "new", "top"];
var  fact1  =  Math.floor(Math.random() * (facts.length - 0 + 1 ) + 0 )
var facts2 = ["hour", "day", "week", "month", "year", "all"];
var  fact2  =  Math.floor(Math.random() * (facts.length - 0 + 1 ) + 0 )
        const body = await snekfetch(`https://www.reddit.com/r/${facts[fact]}.json?sort=${facts1[fact1]}&t=${facts2[fact2]}`)
       .then(response => response.json());
       const allowed =  body.data.children
       const randomnumber = Math.floor(Math.random() * allowed.length)
       console.log(allowed[randomnumber].data.url)
        res.render('index', {
        Resim: `${allowed[randomnumber].data.url}`,
        boy: `${allowed[randomnumber].height}`,
        wile: `${allowed[randomnumber].width}`
        });
});

app.get('/:sub', async(req, res) => {
    var subs = req.params.sub
    var facts1 = ["hot", "new", "top"];
    var  fact1  =  Math.floor(Math.random() * (facts1.length - 0 + 1 ) + 0 )
    var facts2 = ["hour", "day", "week", "month", "year", "all"];
    var  fact2  =  Math.floor(Math.random() * (facts2.length - 0 + 1 ) + 0 )
            const body = await snekfetch(`https://www.reddit.com/r/${subs}.json?sort=${facts1[fact1]}&t=${facts2[fact2]}`)
           .then(response => response.json());
           const allowed =  body.data.children
           const randomnumber = Math.floor(Math.random() * allowed.length)
            res.render('index', {
            Resim: `${allowed[randomnumber].data.url}`,
            boy: `${allowed[randomnumber].height}`,
            wile: `${allowed[randomnumber].width}`
            });
});

//width=<%- wile ? wile :`1000`%> height=<%- boy ? boy :`600`%>

const port = 3000;

app.listen(port, () => console.log(`Port: ${port}`));
