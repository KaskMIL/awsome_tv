 export const getData =(url)=>fetch(url).then(response=>{
    return  response.json();
 })