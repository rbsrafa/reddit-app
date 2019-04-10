import { CoverImage } from './../image/coverImage/CoverImage';
import { EntityAudit } from "../../audit/entityAudit";
import { User } from "../user/User";
import { PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, Entity, OneToMany } from "typeorm";
import { Vote } from "../vote/Vote";
import { Comment } from '../comment/Comment';

@Entity('links')
export class Link extends EntityAudit{

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({unique: true, nullable: false})
  public url!: string;

  @Column({nullable: false})
  public title!: string;

  @ManyToOne(type => User, user => user.links, {onDelete: 'CASCADE'})
  public user!: User;

  @OneToMany(type => Vote, vote => vote.link)
  public votes!: Vote[];

  @OneToMany(type => Comment, comment => comment.link)
  public comments!: Comment[];

  @OneToOne(type => CoverImage, coverImage => coverImage.link)
  public coverImage!: CoverImage;

  /**
   * Creates a new link entity
   * @param url 
   * @param title 
   * @param user 
   */
  public constructor(
    url: string, 
    title: string, 
    user: User
  ){
    super();
    this.url = url;
    this.title = title;
    this.user = user;
  }

}