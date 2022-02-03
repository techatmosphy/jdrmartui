import { baseURL } from "../AppConstants";
import { CATEGORY_CREATED, FAILURE_RESPONSE } from "../AppConstants";

export async  function getCategories() {
    let categories = []
    await  fetch(baseURL+'/category')
    .then((res) => res.json())
    .then((categoriesRes) => {
     //   console.log("categoriesRes ::",categoriesRes)

        categories.push(categoriesRes)
        console.log("categories ::: ",categories[0])
    })
       .catch(error => {
            console.error("error : ", error);

        })
      //  console.log("categories ::: ",categories)
    return categories[0];
}

export async function createCategoryService(Category) {
    console.log("createCategoryService :: ",Category)
   await fetch(baseURL+'/category', {
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
            if(response.ok){
                return CATEGORY_CREATED;
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