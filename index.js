const express = require('express')
const app = express()

app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())




// ROUTES -----------------------------------------------
app.get('/greeting', ( req, res ) => {
    res.send(`<h1>Hello, stranger</h1>`)
})

app.get(`/greeting/:name`, ( req, res ) => {
    res.send(`<h1> What's up ${req.params.name}! Its so great to see you </h1>`)
})






app.get('/magic/:question', ( req, res ) => {
    res.send(`
    <h1> QUESTION:${req.params.question} </h1>
    <p style="text-align: center"> ${magicResponses[getRandomInt(0, magicResponses.length)]} <p>
    `)

})




app.listen(PORT, ( req, res ) => {
    console.log(`Now listening on ${PORT} radio`)
} ) 






















const PORT = 4000
app.listen(PORT,(req,res)=>{
    console.log(`Listening on port ${PORT}`)
})