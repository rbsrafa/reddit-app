import { ProfileImage } from './../image/profileImage/ProfileImage';
import { ProfileImageService } from './../image/profileImage/profileImageService';
import {
  controller, httpGet, httpPost,
  requestParam, requestBody, httpPatch,
  httpDelete,
  BaseHttpController,
  requestHeaders, request
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { TYPES } from '../../constants/types';
import { User } from './User';
import { resourceNotFoundError } from '../../errors/errors';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { UserService } from './userService';
import { AuthService } from './../../auth/authService';
import { validateUser } from './userValidation';
import { uploader } from '../../middlewares/fileUploader';
import { dataUrlConverter } from '../../middlewares/dataUrlConverter';

@controller('/users')
export class UserController extends BaseHttpController {

  /**
   * Creates a new user controller
   * @param _userRepository 
   */
  public constructor(
    @inject(TYPES.UserService) private _userService: UserService,
    @inject(TYPES.AuthService) private _authService: AuthService,
    @inject(TYPES.ProfileImageService) private _profileImageService: ProfileImageService
  ) {
    super();
  }

  /**
   * Fetches all users from database.
   * Metadata: user count.
   * @param res 
   */
  @httpGet('/')
  public async getAllUsers() {
    try {
      const users = await this._userService.getAllUsers();
      return this.json(users, 200);
    } catch (error) {
      return this.json({ error: error }, 500);
    }
  }

  /**
   * Fetchs an user with given id from database 
   * @param id 
   */
  @httpGet('/:id')
  public async getUserById(
    @requestParam('id') id: number
  ) {
    try {
      const user = await this._userService.getUserById(id);
      if (!user) return this.json(
        resourceNotFoundError('User', id), 404
      );
      return this.json(user, 200);
    } catch (error) {
      return this.json({ error: error }, 500);
    }
  }

  /**
   * Creates a new user on the database using the given values
   * and returs the new user if created or 500 response 
   * @param newUser 
   */
  @httpPost('/', uploader.single('profileImage'))
  public async createUser(
    @requestBody() newUser: User,
    @request() req: any
  ) {
    try {
      // Validate user input
      const validation = validateUser(newUser);
      if (validation.error) return this.json(
        { error: validation.error.details }, 400
      );

      // Create new user with given inputs
      const user = await this._userService.createUser(newUser);

      if (req.file) {
        const image = new ProfileImage(
          `http://localhost:3000/${req.file.path}`
        );

        await this._profileImageService.create(image, user);
      }

      const updatedUser = await this._userService.getUserById(user.id);

      return this.json(updatedUser, 201);
      // Handle error  
    } catch (error) {
      console.log(error);
      return this.json({ error: error }, 500);
    }
  }

  @httpPost('/:id/profileImage', authMiddleware, uploader.single('profileImage'))
  public async addProfileImage(
    @requestParam('id') id: number,
    @requestHeaders() headers: any,
    @request() req: any
  ){
    try{
      const token = headers['x-auth-token'];
      let user = await this._userService.getUserById(id);
      if (!user) return this.json(
        resourceNotFoundError('User', id), 404
      );

      const authUser = await this._authService.getAuthUser(token);
      if (!authUser) return this.json({ error: 'Not allowed' }, 401);

      if (user.id !== authUser.id) return this.json({ error: 'Not allowed' }, 403);
      
      if(req.file){        
        const dataUrl = dataUrlConverter(req.file);
        const image = new ProfileImage(dataUrl);
        const profileImage = await this._profileImageService.create(image, user);
        return this.json(profileImage, 201);
      }

    }catch(error){
      console.log(error);
      return this.json({ error: error }, 500);
    }
  }

  /**
   * Updates an user by id from database
   * @param keys 
   * @param id 
   */
  @httpPatch('/:id', authMiddleware)
  public async updateUser(
    @requestBody() keys: User,
    @requestParam('id') id: number,
    @requestHeaders() headers: any
  ) {
    try {
      const token = headers['x-auth-token'];

      // Validate user input
      const validation = validateUser(keys);
      if (validation.error) return this.json(
        { error: validation.error.details }, 400
      );

      let user = await this._userService.getUserById(id);
      if (!user) return this.json(
        resourceNotFoundError('User', id), 404
      );
      const authUser = await this._authService.getAuthUser(token);
      if (!authUser) return this.json({ error: 'Not allowed' }, 401);

      if (user.id !== authUser.id) return this.json({ error: 'Not allowed' }, 403);

      return this.json(
        await this._userService.updateUser(keys, user),
        200
      );
    } catch (error) {
      return this.json({ error: error }, 500);
    }
  }

  /**
   * Deletes an user by id from database
   * @param id 
   */
  @httpDelete('/:id', authMiddleware)
  public async deleteUser(
    @requestParam('id') id: number,
    @requestHeaders() headers: any
  ) {
    try {
      // Get token from auth middleware
      const token = headers['x-auth-token'];
      // Get auth user from token
      const authUser = await this._authService.getAuthUser(token);
      if (!authUser) return this.json({ error: 'Not allowed' }, 401);
      // Get user to be deleted
      const user = await this._userService.getUserById(id);
      if (!user) return this.json(resourceNotFoundError('User', id), 404);
      // Check if auth user and user are the same
      if (authUser.id !== user.id) return this.json(
        { error: 'Not allowed' }, 403
      );
      // Delete user
      const deleted = await this._userService.deleteUser(id);
      // Return ok message
      return this.json(deleted, 200);

    } catch (error) {
      return this.json({ error: error }, 500);
    }
  }

}
