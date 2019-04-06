import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Image } from '../Image';
import { Link } from '../../link/Link';

@Entity('cover_images') 
export class CoverImage extends Image {

  @PrimaryGeneratedColumn()
  public id!: number;

  @OneToOne(
    type => Link, link => link.coverImage,
    {onDelete: 'CASCADE'}
  )
  @JoinColumn()
  public link!: Link;

  public constructor(
    url: string
  ){
    super(url);
  }
}