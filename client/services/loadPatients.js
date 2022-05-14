export async function getPatients() {
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'patients').then(x=>x.json()).then(j => resolve=j));
  })
}