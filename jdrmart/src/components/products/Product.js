import React from "react";
import { ProductModal } from '../../modals/ProductModal';
import { getProducts } from '../../service/ProductService';
import { Table1 } from '../../reusableComponents/Table';
import { Button } from 'react-bootstrap';
import CreateProduct from '../../reusableComponents/CreateProduct';

export default class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productModal: ProductModal,
            products: [ProductModal],
            showCreateProduct: false,
            showTable: true
        }
    }

    async componentDidMount() {
        let products = await getProducts();
        this.setState({
            products: products
        })
        console.log("state :: ", this.state.products)
    }

    handleShowCreateProduct = () => {
        this.setState({ showCreateProduct: !this.state.showCreateProduct })
    }
    render() {
        const columns = Object.keys(this.state.products[0]);
        console.log("columns ::", columns)
        return (<div>

            <div>
                {this.state.showTable && <Table1 cols={columns} data={this.state.products} />}
            </div>
            <div>
                {this.state.showCreateProduct && <CreateProduct show={true} />}
            </div>

            <div>
                <Button variant="primary" onClick={this.handleShowCreateProduct}>
                    Add Product
                </Button>
            </div>

            <div
                style={{ position: "fixed", left: 0, bottom: 0, right: 0, backgroundColor: "red" }}
            >
                footer
            </div>

        </div>)
    }

    handleChangeName = (event) => {
        this.setState({
            productModal: {
                name: event.target.value
            }
        });
    }
}