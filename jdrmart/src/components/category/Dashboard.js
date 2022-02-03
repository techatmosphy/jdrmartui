import React from 'react';
import Category from './Category';
import Product from '../products/Product';
import { Button } from 'react-bootstrap';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'this is Dashboard page...',
            showCategory: false,
            showProduct: false

        }

    }

    render() {
        return (<div>

            <div>
            <span> 
                <Button variant="primary" onClick={this.handleShowCategory}>
                    Categories
                </Button>
                </span>
                <span>  <Button variant="primary" onClick={this.handleShowProduct}>
                    Products
                </Button></span>
            </div>
            {this.state.showCategory && <Category />}
            {this.state.showProduct && <Product />}
        </div>)
    }

    handleShowCategory = () => {
        this.setState({
            showCategory: true,
            showProduct: false
        })
    }
    handleShowProduct = () => {
        this.setState({
            showCategory: false,
            showProduct: true
        })

    }
}