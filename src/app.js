const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const htmlDirectory = path.join(__dirname, '..') 

app.use(express.static(htmlDirectory))


app.listen(port,()=>{
    console.log('server is up on port ' )
})