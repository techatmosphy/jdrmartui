import { baseURL } from "../AppConstants";
import { RECORD_CREATED,RECORD_UPDATED, FAILURE_RESPONSE } from "../AppConstants";

const path="/orders"

export async function createOrderService(order) {
    let message="";
    await fetch(baseURL+path, {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(order)
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

