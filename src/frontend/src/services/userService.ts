
export async function getNumberOfUsers(){
  const res = await fetch(
    `/api/v1/users`,
    {
      method: 'GET',
      headers: {
        "Content-Type":"application/json"
      }
    }
  );
  const users = await res.json();
  return  users.userCount
}

export async function getUserById(id: number){
  const res = await fetch(
    `/api/v1/users/${id}`,
    {
      method: 'GET',
      headers: {
        "Content-Type":"application/json"
      }
    }
  );
  const user = await res.json();
  return user;
}