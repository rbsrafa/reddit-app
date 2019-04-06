import { getConnection } from 'typeorm';
import { CoverImage } from './CoverImage';

export function coverImageRepository() {
  return getConnection().getRepository(CoverImage);
}