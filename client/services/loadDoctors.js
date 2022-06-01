export async function getDoctors() {
  const requestOptions = {
    method: 'GET',
    headers: { 'auth-token': [window.token] }
  };
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'doctors', requestOptions).then(x=>x.json()).then(j => resolve=j));
  })
}