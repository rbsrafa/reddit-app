import { User } from './User';

export interface Link {
  id: number;
  title: string;
  url: string;
  commentCount?: number;
  date?: Date;
  username?: string;
  userId?: number;
  score?: number;
  onUpvote?: Function;
  onDownvote?: Function;
  user: User;
}