import { baseURL } from "../AppConstants";
import { RECORD_CREATED,RECORD_UPDATED, FAILURE_RESPONSE } from "../AppConstants";

const path="/products"

export async  function getProducts() {
    let products;
    await  fetch(baseURL+path)
    .then((res) => res.json())
    .then((productsRes) => {
        products = productsRes.data;
     })
       .catch(error => {
            console.error("error : ", error);

        })
        return products;
}

export async function createProductService(product) {
    console.log("createProductService :: ",product)
    let message="";
    await fetch(baseURL+path, {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(product)
    })
    .then(
        response =>{
            if(response.status == 201){
                message = RECORD_CREATED;
            }
            else{
                message = FAILURE_RESPONSE
            }
        }
    )
    return message;
}

export async function updateProductService(product) {
    let message = ""
    await fetch(baseURL+path, {
         method: 'put',
         headers: {
             Accept: "application/json",
             "Content-Type": "application/json"
             //'Access-Control-Allow-Origin': '*'
         },
         body: JSON.stringify(product)
     })
     .then(
         response =>{
             if(response.status == 200){ 
                 message = RECORD_UPDATED;
             }
             else{
                 message = FAILURE_RESPONSE
             }
         }
     )
     return message;
 }
 export async  function deleteProductService(productId) {
     let message = "";
     await  fetch(baseURL+path+'/'+productId,{
         method : 'delete'
     })
     .then((res) => res.json())
     .then(
        response =>{
            if(response.status == 200){ 
                message = RECORD_UPDATED;
            }
            else{
                message = FAILURE_RESPONSE
            }
        }
    )
    return message;
    
 }