import { getConnection } from 'typeorm';
import { ProfileImage } from './ProfileImage';

export function profileImageRepository() {
  return getConnection().getRepository(ProfileImage);
}