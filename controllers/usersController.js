const {  validationResult } = require('express-validator');
const Users = require('../models/User');
const creatError=require("http-errors")
exports.getUsers = async (req, res, next) => {
  // Schreib hier code um alle Kunden aus der users-Collection zu holen
  var users = await Users.find()
  res.status(200).send(users);
};
exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu holen
  var user = await Users.findById(id)
  res.status(200).send(user);
};
exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu löschen
  var user = await Users.findByIdAndDelete(id)
  res.status(200).send(newuser);
};
exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  // Schreib hier code um den User mit der id aus params in der users-Collection mit den Daten aus req.body zu aktualisieren
  var user = await Users.findByIdAndUpdate(id, dt, {new: true})
  res.status(200).send(user);
};
exports.addUser =  async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const user = req.body;
  // Schreib hier code um die Daten des neuen Kunden aus req.body in der users-Collection zu speichern
  var newUser = new Users(user)
  await newUser.save()
  res.status(200).send(newUser);
};
exports.loginUser = async (req,res)=>{
  const {email,password}=req.body
  try {
  const user = await user.findOne({email})
  const valid = user.password ===password
  if(!valid) throw new creatError.NotFound()
  res.status(200).send(user)
  }catch (error){
    next(error)
  }
}