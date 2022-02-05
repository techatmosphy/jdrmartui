import { baseURL } from "../AppConstants";
import { RECORD_CREATED,RECORD_UPDATED, FAILURE_RESPONSE } from "../AppConstants";

const path = '/categories';
export async  function getCategories() {
    let categories = []
    await  fetch(baseURL+path)
    .then((res) => res.json())
    .then((categoriesRes) => {
        categories.push(categoriesRes.data)
    })
       .catch(error => {
            console.error("error : ", error);

        })
    return categories[0];
}

export async function createCategoryService(Category) {
    console.log("createCategoryService :: ",Category)
   await fetch(baseURL+path, {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(Category)
    })
    .then(
        response =>{
            if(response.created){
                return RECORD_CREATED;
            }
            else{
                return FAILURE_RESPONSE
            }
        }
    )
}
export async function updateCategoryService(Category) {
   let message = ""
   await fetch(baseURL+path, {
        method: 'put',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(Category)
    })
    .then(
        response =>{
            console.log("updateCategoryService response :::",response.status)
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
export async  function deleteCategoryService(categoryId) {
    
    await  fetch(baseURL+path+'/'+categoryId,{
        method : 'delete'
    })
    .then((res) => res.json())
    .then((categoriesRes) => {
        console.log('categoriesRes ',categoriesRes)
    })
       .catch(error => {
            console.error("error : ", error);

        })
   
}