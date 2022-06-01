export async function getAdmins() {
  const requestOptions = {
    method: 'GET',
    headers: { 'auth-token': [window.token] }
  };
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'admins', requestOptions).then(x=>x.json()).then(j => resolve=j));
  })
}