const path = require('path')
const express = require('express')

const app = express()

const htmlDirectory = path.join(__dirname, '..') 

app.use(express.static(htmlDirectory))


app.listen(3000,()=>{
    console.log('server is up on port 3000')
})