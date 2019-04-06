import * as joi from 'joi';
import { Link } from './Link';

export function validateLink(link: Link){
  const schema = joi.object({
    url: joi.string().uri(),
    title: joi.string()
  }).options({stripUnknown: true});

  return joi.validate(link, schema);
}