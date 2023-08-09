const express = require('express')
const app = express()

app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())

const PORT = 9000


// ..............................ROUTES
app.get('/greeting', ( req, res ) => {
    res.send(`<h1>Hello, stranger</h1>`)
})

app.get(`/greeting/:name`, ( req, res ) => {
    res.send(`<h1> Hi  ${req.params.name}! Nice to meet you </h1>`)
})

app.get(`/tip/:total/:tipPercentage`, (req,res)=>{
    res.send(`<h1> Expected Tip is: ${(req.params.total * (req.params.tipPercentage / 100))}</h1>`)
})



 const magicResponses = require('./models/magicResponses')
 function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    
 }
app.get('/magic/:question', ( req, res ) => {
    res.send(`
    <h1> QUESTION:${req.params.question} </h1>
    <p style="text-align: center"> ${magicResponses[getRandom(0, magicResponses.length)]} <p>
    `)

})




app.listen(PORT, ( req, res ) => {
    console.log(`Now listening on ${PORT} radio`)
} ) 











// ...................stays at bottom
app.listen(PORT,(req,res)=>{
    console.log(`Listening on port ${PORT}`)
})