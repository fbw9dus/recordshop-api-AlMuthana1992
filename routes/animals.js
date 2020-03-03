var {DataStore} = require('notarealdb');
const express = require('express');
const router = express.Router();
var store = new DataStore('./data')
var animals = store.collection('animals')
router.get('/',(req,res)=>{
    res.json(animals.list())
})
router.post('/',(req,res) =>{
    var data =req.body
    animals.create(data)
    res.json(animals.list())
})
module.exports = router