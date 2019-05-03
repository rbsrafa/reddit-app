import { getAuthToken } from './../components/with_auth/with_auth';

export async function createComment(comment: any) {
  console.log(comment);
  
  return await fetch(
    '/api/v1/comments',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": getAuthToken()!
      },
      body: JSON.stringify(comment)
    }
  );
}