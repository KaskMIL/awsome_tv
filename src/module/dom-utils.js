
 import { API_URL ,tvWrapper} from "./constant.js";
import { getData } from "./api-util.js";

const displayAllData =(data)=>{
    //reset  loaded elements
    //  tvWrapper.innerHTML=''
    console.log(tvWrapper)
    console.log(data[0].name)
     const filtered = data.slice(0,8);
  
     filtered.forEach(element => {
         tvWrapper.innerHTML += `
         <div class="card"> 
           <img src=${element.image.medium} alt ="best"/>
            <p> ${element.name}</p>
         </div>
         `
     });
}


export const  retriveAllData =()=> new Promise((resolve)=>{
 getData(API_URL).then((res)=>{
displayAllData(res)
   resolve();
 })
})





