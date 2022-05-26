const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');
const bodyParser = require("body-parser");
const express = require("express");

const urlencodedParser = bodyParser.urlencoded({extended: false});



router.post('/register', urlencodedParser, async (req, res) =>{
    //VALIDATE
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //CHECKING EXISTING
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist){
        return res.status(400).send('Email already exists');
    }

    //HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //CREATE A NEW USER
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        // res.send({ user: user._id });
        await res.redirect('/index');
    }catch (err) {
        res.status(400).send(err);
    }
});

//LOGIN
router.post('/login', urlencodedParser, async (req, res) =>{
    //VALIDATE
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //CHECKING EXISTING
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Email is not found');
    }
    //PASSWORD CORRECTION
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password ');

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

    await res.redirect('/index');
    document.querySelector('btn.solid').style.display="none";
});

module.exports = router;