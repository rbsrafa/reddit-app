import { getConnection } from 'typeorm';
import { User } from './User';

/**
 * Returns the user repository
 */
export function userRepository(){
  return getConnection().getRepository(User);
}