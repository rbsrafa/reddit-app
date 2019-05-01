import { CoverImage } from './../resources/image/coverImage/CoverImage';
import { ProfileImage } from './../resources/image/profileImage/ProfileImage';
import { Vote } from '../resources/vote/Vote';
import { Link } from '../resources/link/Link';
import { User } from '../resources/user/User';
import { Comment } from '../resources/comment/Comment';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

/**
 * Creates and return a database connection
 */
export async function getDbConnection(){
  // Set and create a database connection
  await createConnection({
    type: "postgres",
    port: 5432,
    host: process.env.DATABASE_HOST || "localhost",
    username: process.env.DATABASE_USER || "admin",
    password: process.env.DATABASE_PASSWORD || "pass",
    database: process.env.DATABASE_DB || "reddit",
    entities: [ 
      User,
      Link,
      Vote, 
      Comment,
      ProfileImage,
      CoverImage
    ],
    extra: {
      ssl: true
    },
    synchronize: true
  });

}
