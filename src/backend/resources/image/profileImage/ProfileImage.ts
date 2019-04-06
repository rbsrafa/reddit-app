import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Image } from '../Image';
import { User } from '../../user/User';

@Entity('profile_images') 
export class ProfileImage extends Image {

  @PrimaryGeneratedColumn()
  public id!: number;

  @OneToOne(
    type => User, user => user.profileImage,
    {onDelete: 'CASCADE'}
  )
  @JoinColumn()
  public user!: User;

  public constructor(
    url: string
  ){
    super(url);
  }
}