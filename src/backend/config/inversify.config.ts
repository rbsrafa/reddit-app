import { VoteService } from './../resources/vote/voteService';
import { LinkService } from './../resources/link/linkService';
import { CommentService } from './../resources/comment/commentService';
import { AuthService } from './../auth/authService';
import { User } from '../resources/user/User';
import { Link } from '../resources/link/Link';
import { AsyncContainerModule } from "inversify";
import { TYPES } from '../constants/types';
import { getDbConnection } from "./db.config";
import { Repository } from 'typeorm';
import { userRepository } from '../resources/user/userRepository';
import { linkRepository } from '../resources/link/linkRepository';
import { voteRepository } from '../resources/vote/voteRepository';
import { Vote } from '../resources/vote/Vote';
import { Comment } from '../resources/comment/Comment';
import { commentRepository } from '../resources/comment/commentRepository';
import { UserService } from '../resources/user/userService';
import { ProfileImageService } from '../resources/image/profileImage/profileImageService';
import { profileImageRepository } from '../resources/image/profileImage/profileImageRepository';

/**
 * Create and returns the bindings for Inversify container
 */
export const bindings = new AsyncContainerModule(async (bind) => {
  // Create database connection
  try{
    await getDbConnection();
  }catch(error){
    console.log(error);
  }
  
  
  // import controllers
  await require('../resources/user/userController');
  await require('../resources/link/linkController');
  await require('../resources/comment/commentController');
  await require('../auth/authController');
  await require('../resources/vote/voteController');

  // Bind Entities to Repositories
  bind<Repository<User>>(TYPES.UserRepository).toDynamicValue(() => {
    return userRepository();
  }).inRequestScope();

  bind<Repository<Link>>(TYPES.LinkRepository).toDynamicValue(() => {
    return linkRepository();
  }).inRequestScope();

  bind<Repository<Vote>>(TYPES.VoteRepository).toDynamicValue(() => {
    return voteRepository();
  }).inRequestScope();

  bind<Repository<Comment>>(TYPES.CommentRepository).toDynamicValue(() => {
    return commentRepository();
  }).inRequestScope();

  // Bind Repositories to Services
  bind<AuthService>(TYPES.AuthService).toDynamicValue(() => {
    return new AuthService(userRepository());
  }).inRequestScope();

  bind<UserService>(TYPES.UserService).toDynamicValue(() => {
    return new UserService(userRepository());
  }).inRequestScope();

  bind<CommentService>(TYPES.CommentService).toDynamicValue(() => {
    return new CommentService(commentRepository());
  }).inRequestScope();

  bind<LinkService>(TYPES.LinkService).toDynamicValue(() => {
    return new LinkService(linkRepository());
  }).inRequestScope();

  bind<VoteService>(TYPES.VoteService).toDynamicValue(() => {
    return new VoteService(voteRepository());
  }).inRequestScope();

  bind<ProfileImageService>(TYPES.ProfileImageService).toDynamicValue(() => {
    return new ProfileImageService(profileImageRepository());
  }).inRequestScope();

});