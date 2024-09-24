// const fs = require('fs')

// fs.readFile('.txt', 'utf8', (err,data) => {
//     if(err){
//         console.error("Gabim gjate leximit te file", err);
//         return;
//     }

//     console.log("Permbajtja r qati file eshte");
//     console.log(data);
// })



const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req,res) => {
    res.send("Hello nga Jcoders")
});

app.get('/about', (req,res) => {
    res.send("Kjo eshte nje faqe rreth nesh")
});

app.listen(port, () => {
    console.log(`Serveri eshte i gatshem dhe po degjon ne portin${3000}`)
})