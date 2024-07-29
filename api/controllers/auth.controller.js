import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'; 
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next) => {
    // console.log(req.body);
    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password , 10);
    const newUser = new User({username , email , password : hashedPassword});
    try{
        await newUser.save();
        res.status(201).json("User created successfully !");
    }catch(error){
        // next(errorHandler(550 , 'Error from the Database'));
        next(error);
        // res.status(500).json(error.message);
    }
}

export const signin = async (req,res,next) =>{
    const {email , password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser){
           return next(errorHandler(404,'User not found !'));
        }
        const validPassword = bcryptjs.compareSync(password , validUser.password);
        if(!validPassword){
            return next(errorHandler(401 , 'Invalid Password'));
        }
        const token = jwt.sign({id : validUser._id} , process.env.JWT_SECRET);
        const {password : pass , ...userInfo} = validUser._doc;
        res.cookie('access_token' , token , {httpOnly : true , expires : new Date(Date.now() + 24*60*60)})
           .status(200).json(userInfo);
    }catch(error){
        next(error);
    }
}

export const google = async (req,res,next) => {
    try{
        const user = await User.findOne({email : req.body.email});
        if(user){
            const token = jwt.sign({id : user._id} , process.env.JWT_SECRET);
            const {password : pass , ...userInfo} = user._doc;
            res.cookie('access_token' , token , {httpOnly : true , expires : new Date(Date.now() + 24*60*60)})
            .status(200).json(userInfo);
        }else{
            // Generate a 16 digit random password for user -->>
            const generatedPassword = Math.random().toString().slice(-8) + Math.random().toString().slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword , 10);
            const newUser = new User({
                username : req.body.name.split(" ").join("").toLowerCase() + Math.random().toString().slice(-4),
                email : req.body.email,
                password : hashedPassword,
                avatar : req.body.photo
            })
            await newUser.save();
            const token = jwt.sign({id : newUserUser._id} , process.env.JWT_SECRET);
            const {password : pass , ...userInfo} = newUser._doc;
            res.cookie('access_token' , token , {httpOnly : true , expires : new Date(Date.now() + 24*60*60)})
            .status(200).json(userInfo);
        }
    }catch(error){
        next(error);
    }
}