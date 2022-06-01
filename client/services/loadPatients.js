export async function getPatients() {
  const requestOptions = {
    method: 'GET',
    headers: { 'auth-token': [window.token] }
  };
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'patients', requestOptions).then(x=>x.json()).then(j => resolve=j));
  })
}