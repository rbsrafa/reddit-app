
export async function getLinkById(id: number){

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

export async function createLink(link: any) {

}

export async function updateLink(options: any) {

}

export async function deleteLink(id: any) {

}