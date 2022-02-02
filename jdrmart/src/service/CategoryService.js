import { baseURL } from "../AppConstants";
import { CategoryModal } from "../modals/CategoryModal";

export function getCategories() {
    let categories = [CategoryModal];
    fetch(baseURL)
        .then(response => {response.json()})
        .then(categoriesRes => {
            console.log("categorieREs ::",categoriesRes)
            categoriesRes = categories})
        .catch(error => {
            console.error("error : ", error);

        })
        console.log("categories ::: ",categories)
    return categories;
}

export function createCategoryService(Category) {
    console.log("createCategoryService :: ",Category)
    fetch(baseURL+'categories', {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(Category)
    })
        .then(response => response)
        .then(message => this.setState({ message: message,
            showAddCategory: !this.state.showAddCategory
        }))

}