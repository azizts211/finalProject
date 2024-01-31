const express=require("express")
const router=express.Router()
let User=require("../models/user")
const isAuth=require("../middleware/isAuth")

// Require bcrypt
const bcrypt = require('bcrypt');

// Require the json web token
const jwt = require('jsonwebtoken');
// require validators
const {
    validator,
    registerRules,
    loginRules,
  } = require('../middleware/validator');
//register User
router.post('/register', registerRules(), validator, async (req, res) => {
    const { name, lastName, email, password } = req.body;
    try {
      // Simple Validation
      /*  if (!name || !lastName || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields!' });
      } */
  
      // Check for existing user
      let user = await User.findOne({ email });
  
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      // Create new User
      user = new User({ name, lastName, email, password });
  
      // Create Salt & hash
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Replace user password with hashed password
      user.password = hashedPassword;
  
      // Save the user
      await user.save();
  
      // sign user
      const payload = {
        id: user._id,
      };
  
      // Generate token
      const token = await jwt.sign(payload, "hkja", {
        expiresIn: '7 days',
      });
  
      res.status(200).send({ msg: 'User registred with success', user, token });
    } catch (error) {
      res.status(500).send(error);
    }
  });
//@route POST api/auth/login
//@desc Login User
//@access Public
router.post('/login', loginRules(), validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      //simple Validation
      /* if (!email || !password) {
        return res.status(400).send({ msg: 'Please enter all fields' });
      } */
  
      // Check for existing user
      let user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).send({ msg: 'No user with this email address!' });
      }
  
      //Check password
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).send({ msg: 'Bad Credentials! password' });
      }
  
      // sing user
      const payload = {
        id: user._id,
      };
  
      // Generate token
      const token = await jwt.sign(payload, "hkja", {
        expiresIn: '7 days',
      });
  
      res.send({ msg: 'Logged in with success', user, token });
    } catch (error) {
      res.status(500).send({ msg: 'Server Error' });
    }
  });
  

//add new user


router.post("/addUser",async(req,res)=>{
    const {name,email,phone}=req.body

    const user=  new User({
        name,email,phone
    })

    await user.save()
    res.send({msg:"user created",user})


})
// delete user
router.delete("/delete/:_id",async(req,res)=>{
const {_id}=req.params

const user=await User.findOneAndDelete({_id})

res.send({msg:"user Deleted with success !",user})

})


// edit User 
router.put("/edit/:_id",async(req,res)=>{
   const{_id}=req.params

   const user=await User.findOneAndUpdate({_id},req.body,{new:true})
 res.send({msg:"user updated successfuly!",user})
})


//display all userssss

router.get("/getall",async(req,res)=>{

    const userslist=await User.find()

    res.send({msg:"users fetched !",userslist})
})


//@route GET api/auth/user
//@desc Get authentified user
//@access Private
router.get('/user', isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
module.exports=router
