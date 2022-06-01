export async function getParamedics() {
  const requestOptions = {
    method: 'GET',
    headers: { 'auth-token': [window.token] }
  };
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'paramedics', requestOptions).then(x=>x.json()).then(j => resolve=j));
  })
}