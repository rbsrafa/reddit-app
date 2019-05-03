import { getAuthToken } from './../components/with_auth/with_auth';

export async function getLinkById(id: number){
  return await fetch(
    `/api/v1/links/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export async function getLinks() {
  return await fetch(
    '/api/v1/links',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export async function getLinkForViewPage(id: number){
  return await fetch(
    `/api/v1/links/${id}/viewPage`,
    {
      method: 'GET',
      headers: {
        "Content-Type":"application/json"
      }
    }
  );
}

export async function createLink(link: any) {
  return await fetch(
    '/api/v1/links',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": getAuthToken()!
      },
      body: JSON.stringify(link)
    }
  );
}

export async function updateLink(options: any) {

}

export async function deleteLink(id: any) {

}