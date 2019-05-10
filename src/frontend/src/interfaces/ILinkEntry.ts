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
  votes: any;
  onUpvote?: Function;
  onDownvote?: Function;
  onUpdate: Function;
  user: User;
}