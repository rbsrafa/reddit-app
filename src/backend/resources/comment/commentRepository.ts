import { getConnection } from 'typeorm';
import { Comment } from './Comment';

/**
 * Returns the comment repository
 */
export function commentRepository(){
  return getConnection().getRepository(Comment);
}