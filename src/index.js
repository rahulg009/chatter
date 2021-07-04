const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const pulicDirectoryPath= path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.listen(port,()=>{
    console.log('Chatter Is Up!!')
})