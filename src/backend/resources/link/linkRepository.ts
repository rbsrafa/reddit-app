import { getConnection } from 'typeorm';
import { Link } from './Link';

/**
 * Returns the link repository
 */
export function linkRepository(){
  return getConnection().getRepository(Link);
}