import { ProfileImage } from './../image/profileImage/ProfileImage';
import { TYPES } from './../../constants/types';
import { inject } from "inversify";
import { Repository } from 'typeorm';
import { User } from './User';

/**
 * UserService Class
 */
export class UserService {

  /**
   * Create a new UserService instance.
   * @param _userRepository 
   */
  public constructor(
    @inject(TYPES.UserRepository) private _userRepository: Repository<User>
  ) { }

  /**
   * Get all users
   */
  public async getAllUsers() {
    const users = await this._userRepository.find();
    const userCount = users.length;
    return { users, userCount };
  }

  /**
   * Get a user by id. If not found return null
   * @param id 
   */
  public async getUserById(id: number) {
    const user = await this._userRepository.findOne(
      id, { relations: ['comments', 'links', 'votes', 'profileImage'] }
    );
    return user;
  }

  /**
   * Create a new user with given values.
   * @param newUser 
   */
  public async createUser(newUser: User) {
    const user = new User(
      newUser.firstName, newUser.lastName,
      newUser.username, newUser.email,
      newUser.password
    );
    return await this._userRepository.save(user);
  }

  public async assignProfileImage(image: ProfileImage, user: User) {
    user.profileImage = image;
    return await this._userRepository.save(user);
  }

  /**
   * Update a user with given key values.
   * @param userKeys 
   * @param userToUpdate 
   */
  private updateUserKeys(userKeys: User, userToUpdate: User
  ): User {
    const keys = Object.keys(userKeys);
    keys.forEach(key => {
      (userToUpdate as any)[key] = (userKeys as any)[key];
    });
    return userToUpdate;
  }

  /**
   * Update a user with given values.
   * @param keys 
   * @param user 
   */
  public async updateUser(keys: User, user: User) {
    return await this._userRepository.save(
      this.updateUserKeys(keys, user)
    );
  }

  /**
   * Delete an user by given id.
   * @param id 
   */
  public async deleteUser(id: number) {

    const user = await this.getUserById(id);
    if (!user) return null;
    await this._userRepository.remove(user);
    return { message: `User id ${id} deleted` };

  }

}