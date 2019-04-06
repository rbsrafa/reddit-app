import { TYPES } from './../../../constants/types';
import { Link } from '../../link/Link';
import { CoverImage } from './CoverImage';
import { coverImageRepository } from "./coverImageRepository";
import { inject } from 'inversify';
import { Repository } from 'typeorm';

export class CoverImageService {

  public constructor(
    @inject(TYPES.ProfileImageRepository) private _coverImageRepository: Repository<CoverImage>
  ){ }

  public create(image: CoverImage, link: Link) {
    image.link = link;
    return coverImageRepository().save(image);
  }

}