import { TYPES } from './../../../constants/types';
import { User } from '../../user/User';
import { ProfileImage } from './ProfileImage';
import { profileImageRepository } from "./profileImageRepository";
import { inject } from 'inversify';
import { Repository } from 'typeorm';

export class ProfileImageService {

  public constructor(
    @inject(TYPES.ProfileImageRepository) private _profileImageRepository: Repository<ProfileImage>
  ){ }

  public create(image: ProfileImage, user: User) {
    image.user = user;
    return profileImageRepository().save(image);
  }

}