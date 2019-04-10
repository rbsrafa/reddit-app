import { Link } from './Link';
import { 
  controller, httpGet, httpPost, 
  requestBody, requestParam, httpPatch, 
  httpDelete, BaseHttpController, requestHeaders,
  request 
} from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from '../../constants/types';
import { resourceNotFoundError, multipleVotesError } from '../../errors/errors';
import { Vote } from "../vote/Vote";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { VoteService } from './../vote/voteService';
import { LinkService } from './linkService';
import { AuthService } from './../../auth/authService';
import { validateLink } from './linkValidation';

@controller('/links')
export class LinkController extends BaseHttpController{

  public constructor(
    @inject(TYPES.LinkService) private _linkService: LinkService,
    @inject(TYPES.AuthService) private _authService: AuthService,
    @inject(TYPES.VoteService) private _voteService: VoteService,
  ){
    super();
  }

  @httpGet('/')
  public async getAllLinks(){
    try{
      // Get all links
      const links = await this._linkService.getAllLinks();
      // Return links with an ok status
      return this.json(links, 200);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpGet('/:id')
  public async getLinkById(
    @requestParam('id') id: number
  ){
    try{
      // Get link by id
      const link = await this._linkService.getLinkById(id);
      if(!link) return this.json(resourceNotFoundError('Link', id), 404);
      // Return link with a ok status
      return this.json(link, 200);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpGet('/:id/viewPage')
  public async getLinkForView(
    @requestParam('id') id: number
  ){
    try{
      const link = await this._linkService.getLinkForLinkViewPage(id);
      return this.json(link, 200);      
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpPost('/', authMiddleware)
  public async createLink(
    @requestBody() body: any,
    @requestHeaders() headers: any,
    @request() req: any
  ){
    try{
      // Get token from auth middleware
      const token = headers['x-auth-token'];
      // Get auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if(!authUser) return this.json({error: 'Not allowed'}, 401);
      // Create a new link
      const link = new Link(body.url, body.title, authUser); 
      // Validate link
      const validation = validateLink(link);
      if(validation.error) return this.json({error: validation.error.details}, 400);
      
      // Add cover image to link
      if(req.file){
        
      }
      
      // Save link in database
      const created = await this._linkService.createLink(link);
      // Return the new link with a created status
      return this.json(created, 201);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpPatch('/:id', authMiddleware)
  public async updateLink(
    @requestParam('id') id: number,
    @requestBody() body: any,
    @requestHeaders() headers: any
  ){
    try{
      // Get token from auth middleware
      const token = headers['x-auth-token'];
      // Get auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if(!authUser) return this.json({error: 'Not allowed'}, 403);
      // Get link to update
      const link = await this._linkService.getLinkById(id);
      if(!link) return this.json(resourceNotFoundError('Link', id), 404);
      // Check if auth user is the resource owner
      const isOwner = await this._authService.isResourceOwner(link, authUser);
      if(!isOwner) return this.json({error: 'Not allowed'}, 403);
      const validation = validateLink(body);
      if(validation.error) return this.json({error: validation.error.details}, 400);
      // Update link
      const updated = await this._linkService.updateLink(body, link);
      // Return the updated link with an ok response
      return this.json(updated, 200);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpDelete('/:id', authMiddleware)
  public async deleteLink(
    @requestParam('id') id: number, 
    @requestHeaders() headers: any
  ){
    try{
      // Get token from authMiddleware
      const token = headers['x-auth-token'];
      // Get auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if(!authUser) return this.json({error: 'Not allowed'}, 403);
      // Get link to be deleted
      const link = await this._linkService.getLinkById(id);
      if(!link) return this.json(resourceNotFoundError('Link', id));
      // Check if auth user is the link owner
      const isOwner = await this._authService.isResourceOwner(link, authUser);
      if(!isOwner) return this.json({error: 'Not allowed'}, 403);
      // Delete link
      const deleted = await this._linkService.deleteLink(id);
      // Return message with ok status
      return this.json(deleted, 200);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpPost('/:id/upvote', authMiddleware)
  public async upvoteLink(
    @requestParam('id') id: number, 
    @requestHeaders() headers: any
  ){
    return this.voteLink(id, true, headers);
  }

  @httpPost('/:id/downvote', authMiddleware)
  public async downvoteLink(
    @requestParam('id') id: number,
    @requestHeaders() headers: any
  ){
    return this.voteLink(id, false, headers);
  }

  private async voteLink(id: number, type: boolean, headers: any){
    let message = type === true ? 'up' : 'down';
    
    try{
      // Get token from auth middleware
      const token = headers['x-auth-token'];
      // Get auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if(!authUser) return this.json({error: 'Not allowed'}, 401);
      // Get link to upvote
      let link = await this._linkService.getLinkById(id);
      if(!link) return this.json(resourceNotFoundError('Link', id));
      // Check if auth user has already voted on the link
      let vote = await this._voteService.getVoteWhere({user: authUser.id, link: link.id});
      // If user has not voted, create a new vote
      if(vote.length < 1) {
        await this._voteService.createVote(new Vote(type, authUser, link));        
      // If user has already voted, send multiple votes error
      }else if(vote[0].flag === type) return this.json(multipleVotesError(message), 401);
      // Update vote
      await this._voteService.updateVoteWhere({user: authUser, link: link},{flag: type});
      // Return message with an created status
      return this.json({message: `Link id ${id} ${message}voted`}, 201);
    // Handle error
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

}
