import { User } from './User';

export interface ILinkView {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  votes: any;
  comments: any;
  user: any;
}