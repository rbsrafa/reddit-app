import { User } from './User';
import * as joi from 'joi';

export function validateUser(user: User){
  const schema = joi.object({
    firstName: joi.string().max(30),
    lastName: joi.string().max(50),
    username: joi.string().max(30),
    email: joi.string().email(),
    password: joi.string().min(6)
  }).options({stripUnknown: true});

  return joi.validate(user, schema);
}