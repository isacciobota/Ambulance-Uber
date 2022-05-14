export async function getAdmins() {
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'doctors').then(x=>x.json()).then(j => resolve=j));
  })
}