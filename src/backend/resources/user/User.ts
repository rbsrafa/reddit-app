import { ProfileImage } from './../image/profileImage/ProfileImage';
import { 
  Entity, PrimaryGeneratedColumn, Column, 
  OneToMany, 
  OneToOne
} from "typeorm";
import { EntityAudit } from "../../audit/entityAudit";
import { Link } from "../link/Link";
import { Vote } from '../vote/Vote';
import { Comment } from '../comment/Comment';

@Entity('users')
export class User extends EntityAudit{

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({length: 30, nullable: false})
  public firstName!: string;

  @Column({length: 50, nullable: false})
  public lastName!: string;

  @Column({length: 30, nullable: false, unique: true})
  public username!: string;

  @Column({nullable: false, unique: true})
  public email!: string;

  @Column({nullable: false, select: false})
  public password!: string;

  @OneToMany(type => Link, link => link.user)
  public links!: Link[];

  @OneToMany(type => Vote, vote => vote.user)
  public votes!: Vote[];

  @OneToMany(type => Comment, comment => comment.user)
  public comments!: Comment[];

  @OneToOne(type => ProfileImage, profileImage => profileImage.user)
  public profileImage!: ProfileImage;

  /**
   * Creates a new user entity
   * @param firstName 
   * @param lastName 
   * @param username 
   * @param email 
   * @param password 
   */
  public constructor(
    firstName: string, 
    lastName: string,
    username: string,
    email: string,
    password: string
  ){
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email,
    this.password = password
  }

}