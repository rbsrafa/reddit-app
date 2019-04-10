import { User } from './User';

export interface ILinkEntry {
  id: number;
  title: string;
  url: string;
  commentCount?: number;
  date?: string;
  username?: string;
  userId?: number;
  score?: number;
  onUpvote?: Function;
  onDownvote?: Function;
  user: User;
}