import { 
  controller, httpGet, httpPatch, 
  httpPost, httpDelete, requestBody, 
  requestParam, BaseHttpController, requestHeaders,
} from "inversify-express-utils";
import { TYPES } from './../../constants/types';
import { inject } from "inversify";
import { resourceNotFoundError } from '../../errors/errors';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { AuthService } from './../../auth/authService';
import { CommentService } from './commentService';
import { Comment } from './Comment';
import { LinkService } from "../link/linkService";
import { validateComment } from "./commentValidation";

@controller('/comments')
export class CommentController extends BaseHttpController{

  public constructor(
    @inject(TYPES.CommentService) private _commentService: CommentService,
    @inject(TYPES.AuthService) private _authService: AuthService,
    @inject(TYPES.LinkService) private _linkService: LinkService
  ){
    super();
  }

  @httpGet('/')
  public async getAllComments(){
    try{
      // Get all comments
      const comments = await this._commentService.getAllComments();
      // Return all comments with ok status
      return this.json(comments, 200);
    // Handle error
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpGet('/:id')
  public async getCommentById(
    @requestParam('id') id: number
  ){
    try{
      // Get comment by given id
      const comment = await this._commentService.getCommentById(id);
      // If not found return a message with 404 status
      if(!comment) return this.json(resourceNotFoundError('Comment', id), 404);
      // Return comment with ok status
      return this.json(comment, 200);

    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpPost('/', authMiddleware)
  public async createComment(
    @requestBody() body: any,
    @requestHeaders() headers: any
  ){
    try{
      //Get the token from auth middleware
      const token = headers['x-auth-token'];
      // Get the auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if(!authUser) return this.json({error: 'Unauthorized'}, 401);
      // Get link from body
      const link = await this._linkService.getLinkById(body.linkId);
      if(!link) return this.json(resourceNotFoundError('Link', body.linkId), 404);
      // Create a new comment
      const comment = new Comment(body.content, authUser, link);
      // Validate comment
      const validation = validateComment(comment);
      if(validation.error) return this.json({error: validation.error.details}, 400);
      // Save comment in database
      const created = await this._commentService.createComment(comment);
      // Return the comment with a 201 status
      return this.json(created, 201);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpPatch('/:id', authMiddleware)
  public async updateComment(
    @requestParam('id') id: number,
    @requestBody() body: any,
    @requestHeaders() headers: any
  ){
    try{
      //Get the token from auth middleware
      const token = headers['x-auth-token'];
      // Get the auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if(!authUser) return this.json({error: 'Not allowed'}, 401);
      // Get the comment from given id
      let comment = await this._commentService.getCommentById(id);
      if(!comment) return this.json(resourceNotFoundError('Comment', id));
      // Check if auth user is the resource owner
      const isOwner = await this._authService.isResourceOwner(comment, authUser);
      if(!isOwner) return this.json({error: 'Not allowed'}, 403);
      // Validate comment
      const validation = validateComment(body);
      if(validation.error) return this.json({error: validation.error.details}, 400);
      // Update the comment with given keys
      const updated =  await this._commentService.updateComment(body, comment);
      // Return the updated comment with a ok status
      return this.json(updated, 200);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

  @httpDelete('/:id', authMiddleware)
  public async deleteComment(
    @requestParam('id') id: number,
    @requestHeaders() headers: any
  ){
    try{
      // Get token from auth middleware
      const token = headers['x-auth-token'];
      // Get the auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if(!authUser) return this.json({error: 'Not allowed'}, 401);
      // Get the comment from given id
      const comment = await this._commentService.getCommentById(id);
      if(!comment) return this.json(resourceNotFoundError('Comment', id), 404);
      // Check if auth user is the resource owner
      const isOwner = await this._authService.isResourceOwner(comment, authUser);
      if(!isOwner) return this.json({error: 'Not allowed'}, 403);
      // Delete comment
      const deleted =  await this._commentService.deleteComment(id);
      // Return a message with ok status
      return this.json(deleted, 200);
    // Handle error  
    }catch(error){
      return this.json({error: error}, 500);
    }
  }

}