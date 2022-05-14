export async function getParamedics() {
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'paramedics').then(x=>x.json()).then(j => resolve=j));
  })
}