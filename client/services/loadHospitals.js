export async function getHospitals() {
  return new Promise((resolve) => {
        resolve(fetch(window.URL+'hospitals').then(x=>x.json()).then(j => resolve=j));
  })
}