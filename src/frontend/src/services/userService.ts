
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