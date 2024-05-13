const express = require('express')

const app = express()

// page
app.get('',(req,res)=>{
    res.sendFile(__dirname + "/page/homePage.html")
})


app.get('/service',(req,res)=>{
    res.sendFile(__dirname + "/page/service.html")
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/page/contactUs.html")
})

//middelware 
const availabilty = require("./middelware/availablity")
app.use(availabilty)


//port 
const port = 2004 
app.listen(port, err=>{
    err? console.log(err):console.log(`server is runing on port${port}`)
}) 