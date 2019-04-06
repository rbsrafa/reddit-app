import { Link } from './../link/Link';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { EntityAudit } from "../../audit/entityAudit";
import { User } from "../user/User";

@Entity('comments')
export class Comment extends EntityAudit{

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({nullable: false, type: 'text'})
  public content!: string;

  @ManyToOne(type => User, user => user.comments, {onDelete: 'CASCADE'})
  public user!: User;

  @ManyToOne(type => Link, link => link.comments, {onDelete: 'CASCADE'})
  public link!: Link;

  public constructor(
    content: string, 
    user: User, 
    link: Link
  ){
    super();
    this.content = content;
    this.user = user;
    this.link = link;
  }

}
