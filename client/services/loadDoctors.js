export async function getDoctors() {
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'doctors').then(x=>x.json()).then(j => resolve=j));
  })
}