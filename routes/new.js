

app.get('/api/records', (req, resp)=>{
    resp.send('Das ist die Liste')
})
app.post('/api/records', (req, resp)=>{
    resp.send('Das ist eine andere Liste.')
})

module.exports =app;


// const express = require('express');

// const router = express.Router()

// const store = new DataStore('')

// router.get('/',(req,res)=>{
//     res.send ('Hallo in The Api!')
// })

// routes.post('/api/records',(req, res) => {
//     var data = req.body
  
//     api.create(data)
   
//     res.json(api.list())
// })
