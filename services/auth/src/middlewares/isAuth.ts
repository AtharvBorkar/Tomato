import {Request,Response,NextFunction} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import {IUser} from '../model/User.js'

export interface AuthenticatedRequest extends Request{
    user? : IUser | null;
}