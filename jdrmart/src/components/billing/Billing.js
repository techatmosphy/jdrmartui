import React from "react";
import { getProducts } from '../../service/ProductService';


export default class Billing extends React.Component {

    constructor(props){
        super(props);
       this.state = {
         message: "billing page",
         products : []
        }
    }

    async componentDidMount() {
        await getProducts().then(products =>{
            this.setState({
                products: products
            })
        });
    }

    render(){
        const products = this.state.products;
        return(
            <div>
                this is billing page
            </div>
        )
    }
}
