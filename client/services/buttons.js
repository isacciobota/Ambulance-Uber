export async function submitFunc(jsonData,destination) {
                    const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json',
                                        'auth-token': [window.token] },
                            body: JSON.stringify(jsonData)
                        };
                        console.log(jsonData);
        fetch(window.URL+destination,requestOptions).then(res => res.text()).then(res=>console.log(res))
}