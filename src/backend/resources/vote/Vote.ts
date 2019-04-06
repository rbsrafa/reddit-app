import { Link } from './../link/Link';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn, JoinColumn, Unique } from "typeorm";
import { EntityAudit } from "../../audit/entityAudit";
import { User } from "../user/User";

@Entity('votes')
@Unique(['user', 'link'])
export class Vote extends EntityAudit{
  
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({nullable: false})
  public flag!: boolean;

  @ManyToOne(type => User, user => user.votes, {onDelete: 'CASCADE'})
  public user!: User;

  @ManyToOne(type => Link, link => link.votes, {onDelete: 'CASCADE'})
  public link!: Link;

  public constructor(
    flag: boolean,
    user: User,
    link: Link
  ){
    super();    
    this.flag = flag;
    this.user = user;
    this.link = link;
  }

}