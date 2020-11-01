const express = require('express')
const app = express()

port = process.env.PORT || 4000
app.listen(port,(req, res)=>{
  console.log(`Server is running on PORT: ${port}`)
  
}) 

app.get('/',(req,res) => {
        res.send('Hello Boss Noel')
})