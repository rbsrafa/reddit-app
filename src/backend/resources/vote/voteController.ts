import { VoteService } from './voteService';
import { 
  controller, BaseHttpController, httpGet, requestParam, httpPost 
} from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from './../../constants/types';
import { resourceNotFoundError } from "../../errors/errors";


@controller('/votes')
export class VoteController extends BaseHttpController{

  public constructor(
    @inject(TYPES.VoteService) private _voteService: VoteService
  ){
    super();
  }

  @httpGet('/')
  public async getAllVotes(){
    try{
      const votes = await this._voteService.getAllVotes();
      return this.json(votes, 200);

    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpGet('/:id')
  public async getVoteById(@requestParam('id') id: number){
    try{
      const vote = await this._voteService.getVoteById(id);
      if(!vote) return this.json(resourceNotFoundError('Vote', id), 404);
      return this.json(vote, 200);
      
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

}