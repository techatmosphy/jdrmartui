import { baseURL } from "../AppConstants";
import { RECORD_CREATED, RECORD_UPDATED, RECORD_DELETED, FAILURE_RESPONSE } from "../AppConstants";

const path = '/categories';
export async function getCategories() {
    let categories;
    await fetch(baseURL + path)
        .then((res) => res.json())
        .then((categoriesRes) => {
            categories = categoriesRes.data;
        })
        .catch(error => {
            console.error("error : ", error);

        })
    return categories;
}

export async function createCategoryService(Category) {
    let message = ""
    await fetch(baseURL + path, {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(Category)
    })
        .then(
            response => {
                if (response.ok) {
                    message = RECORD_CREATED;
                }
                else {
                    response.error != null
                        ? message = response.error
                        : message = FAILURE_RESPONSE
                }
            }
        ).catch(error => {
            message = FAILURE_RESPONSE
        })
    return message;
}
export async function updateCategoryService(Category) {
    let message = ""
    await fetch(baseURL + path, {
        method: 'put',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(Category)
    })
        .then(
            response => {
                if (response.ok) {
                    message = RECORD_UPDATED;
                }
                else {
                    response.error != null
                        ? message = response.error
                        : message = FAILURE_RESPONSE
                }
            }
        ).catch(error => {
            message = FAILURE_RESPONSE
        })
    return message;
}
export async function deleteCategoryService(categoryId) {
    let message = ""
    await fetch(baseURL + path + '/' + categoryId, {
        method: 'delete'
    })
        .then((res) => res.json())
        .then(
            response => {
                if (response.message != null) {
                    message = RECORD_DELETED;
                }
                else {
                    response.error != null
                        ? message = response.error
                        : message = FAILURE_RESPONSE
                }
            }
        ).catch(error => {
            message = FAILURE_RESPONSE
        })
    return message;
}