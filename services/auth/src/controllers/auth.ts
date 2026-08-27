// import { Request, Response} from "express";
import User from "../model/User.js";
import jwt from 'jsonwebtoken';
import TryCatch from "../middlewares/trycatch.js";

export const loginUser = TryCatch(async(req,res)=>{
    const {email, name, picture} = req.body;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({
                name,
                email,
                image: picture,
            });
        }

        const token = jwt.sign({user}, process.env.JWT_SEC as string,{
            expiresIn: "15d",
        });

        res.status(200).json({
            message: "Logged Sucess",
            token,
            user,
        });
})

const allowedRoles = ["customer", "rider", "seller"] as const;
type Role = (typeof allowedRoles)[number];

export const addUserRole = TryCatch(async(req, res)=>{
    
})