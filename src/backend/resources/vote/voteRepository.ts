import { Vote } from './Vote';
import { getConnection } from "typeorm";

export function voteRepository(){
  return getConnection().getRepository(Vote);
} 