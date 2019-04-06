import * as express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export function authMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
){
  const AUTH_SECRET = process.env.AUTH_SECRET;
  if(!AUTH_SECRET) return res.status(500).json({error: 'Internal server error'});
  
  const token = req.headers['x-auth-token'];
  if(!token || typeof token !== 'string') return res.status(401).json({error: 'Authorization token not provided'})
  try{
    const verified = jwt.verify(token, AUTH_SECRET);
    next();
  }catch(error){
    res.status(401).json({error: error});
  }
}