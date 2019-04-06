import { AuthService } from './authService';
import { 
  controller, httpPost, requestBody, 
  BaseHttpController,
  httpGet, requestHeaders
} from "inversify-express-utils";
import jwt from 'jsonwebtoken';
import { TYPES } from './../constants/types';
import { inject } from "inversify";
import { User } from "../resources/user/User";
import { Repository } from "typeorm";
import { authMiddleware } from '../middlewares/authMiddleware';
import dotenv from 'dotenv';

@controller('/auth')
export class Auth extends BaseHttpController{
  private AUTH_SECRET = process.env.AUTH_SECRET;


  constructor(
    @inject(TYPES.UserRepository) private _userRepository: Repository<User>, 
    @inject(TYPES.AuthService) private _authService: AuthService
  ){
    super();
  }

  @httpPost('/login')
  public async login(
    @requestBody() body: any
  ){
    try{
      const match = await this._userRepository.findOne(body);
      if(!match) return this.json({error: 'Authentication failed'}, 401);
      if(!this.AUTH_SECRET) return this.internalServerError();
      const token = jwt.sign({id: match.id}, this.AUTH_SECRET);
      return this.json({token: token}, 201);
    }catch(error){
      return this.json({error: error}, 500);
    } 
  }

  @httpGet('/user', authMiddleware)
  public async getAuthUser(
    @requestHeaders() headers: any
  ){
    try{
      const token = headers['x-auth-token'];
      if(!token) return this.json({error: 'Token not provided'}, 400)
      return this.json(await this._authService.getAuthUser(token));
    }catch(error){
      return this.json({error: error});
    }
  }

}