import { baseURL } from "../AppConstants";
import { PRODUCT_CREATED, FAILURE_RESPONSE } from "../AppConstants";

export async  function getProducts() {
    let products = []
    await  fetch(baseURL+'/product')
    .then((res) => res.json())
    .then((productsRes) => {
     //  console.log("categories ::: ",categories)

     products.push(productsRes)
        console.log("products ::: ",products[0])
    })
       .catch(error => {
            console.error("error : ", error);

        })
      //  console.log("categories ::: ",categories)
    return products[0];
}

export async function createProductService(Product) {
    console.log("createProductService :: ",Product)
   await fetch(baseURL+'/product', {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(Product)
    })
    .then(
        response =>{
            if(response.ok){
                return PRODUCT_CREATED;
            }
            else{
                return FAILURE_RESPONSE
            }
        }
    )
      //  .then(response => response.json())
        //.then(message =>
          //  console.log("Message :: ",message)
            //)

}