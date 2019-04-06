import { TYPES } from './../../constants/types';
import { inject } from "inversify";
import { Vote } from "./Vote";
import { Repository } from "typeorm";

/**
 * VoteService Class
 */
export class VoteService{

  /**
   * Creates a new VoteService instance
   * @param _voteRepository 
   */
  public constructor(
    @inject(TYPES.VoteRepository) private _voteRepository: Repository<Vote>
  ){}

  /**
   * Get all votes
   */
  public async getAllVotes(){
    try{
      const votes = await this._voteRepository.find();
      const voteCounts = votes.length;
      return {votes, voteCounts};
    }catch(error){
      throw error;
    }
  }

  /**
   * Get a vote by id. If not found returns null.
   * @param id 
   */
  public async getVoteById(id: number){
    try{
      const vote = await this._voteRepository.findOne(
        id, {relations: ['user', 'link']}
      );
      if(!vote) return null;
      return vote;
    }catch(error){
      throw error;
    }
  }

  public async createVote(vote: Vote){
    try{
      return await this._voteRepository.save(vote);
    }catch(error){
      throw error;
    }
  }

  public async updateVoteWhere(options: Object, keyValue: Object){
    const vote = await this._voteRepository.update(options, keyValue);
    return vote;
  }

  /**
   * Get votes with given options. If not found returns null
   * @param options 
   */
  public async getVoteWhere(options: Object){
    try{
      const conditions = {where: options};
      const votes = await this._voteRepository.find(conditions);
      return votes;
    }catch(error){
      throw error;
    }
  }

}