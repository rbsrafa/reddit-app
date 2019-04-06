import { TYPES } from './../constants/types';
import jwt from 'jsonwebtoken';
import { inject } from 'inversify';
import { User } from '../resources/user/User';
import { Repository } from 'typeorm';

export class AuthService{

  public constructor(
    @inject(TYPES.UserRepository) private _userRepository: Repository<User>
  ){ }

  public getDecodedToken(token: string){
    return jwt.decode(token);
  }

  public async getAuthUser(token: string){
    try{
      const userId = (this.getDecodedToken(token) as any).id;
      const user = await this._userRepository.findOne(userId, {relations: ['profileImage']});
      if(!user) return null;
      return user;
    }catch(error){
      throw error;
    }
  }

    /**
   * Check if an user is the resource owner.
   * @param resource 
   * @param authUser 
   */
  public async isResourceOwner(resource: any, authUser: User){
    if(resource.user.id === authUser.id) return true;
    return false;
  }

}