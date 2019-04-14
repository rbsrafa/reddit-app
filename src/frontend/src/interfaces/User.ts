export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  profileImage: {id: number, url: string} | null;
}