import * as joi from 'joi';
import { Comment } from './Comment';

export function validateComment(comment: Comment){
  const schema = joi.object({
    content: joi.string()
  }).options({stripUnknown: true});

  return joi.validate(comment, schema);
}