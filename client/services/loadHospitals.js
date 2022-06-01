export async function getHospitals() {
  const requestOptions = {
    method: 'GET',
    headers: { 'auth-token': [window.token] }
  };
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'hospitals', requestOptions).then(x=>x.json()).then(j => resolve=j));
  })
}