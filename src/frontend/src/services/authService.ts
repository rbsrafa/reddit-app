import { User } from './../interfaces/User';

export async function signUpService(user: User){
  return await fetch(
    `/api/v1/users/`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }
  );
}

export async function signInService(email: string, password: string){
  return await fetch(
    `/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    }
  );
}

export async function getAuthUser(token: string) {
  return await fetch(
    `/api/v1/auth/user`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token
      }
    }
  );
}

export function logoutUser(){
  localStorage.removeItem('rbs-reddit-app-logged-user');
  localStorage.removeItem('rbs-reddit-app-token');
}