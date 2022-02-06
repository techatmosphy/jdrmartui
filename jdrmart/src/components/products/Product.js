import React from 'react';
import { ProductModal } from '../../modals/ProductModal';
import { getProducts,deleteProductService } from '../../service/ProductService';
import { getCategories } from '../../service/CategoryService';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ProductModalPage from '../../reusableComponents/ProductModalPage';

export default class Prodcut extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: ProductModal,
            categories: [],
            products : [],
            showCreateProduct: false,
            showTable: true,
            showEditProduct: false,
            productToEditOrDelete : ProductModal,
            highLightSelectedRow : -1

        }
       }

    async componentDidMount() {
        await getCategories().then(categories =>{
            this.setState({
                categories: categories
            })
        });
        await getProducts().then(products =>{
            this.setState({
                products: products
            })
        });
    }


    handleShowCreateProduct = () => {
        this.setState({ showCreateProduct: !this.state.showCreateProduct })
    }
    render() {
        const columns = Object.keys(ProductModal);
        return (<div>

            <div>
                {this.state.showTable && <this.ProductTable cols={columns} data={this.state.products} />}
            </div>
            <div>
                {this.state.showCreateProduct && <ProductModalPage show={true} />}
            </div>
            <div>
                {this.state.showEditProduct && <ProductModalPage show={true} Product={this.state.productToEditOrDelete}/>}
            </div>
        </div>)
    }

    handleChangeName = (event) => {
        this.setState({
            ProductModal: {
                name: event.target.value
            }
        });
    }

    handleEditOrDelete = (Product,rowId) => { 
        this.setState({
            productToEditOrDelete : Product,
            highLightSelectedRow : rowId
        })
    }

    handleEdit = () => { 
        if(this.state.productToEditOrDelete.id == 0){
            alert("please select a Product to edit")
        }
        else{
        this.setState({
            showEditProduct : true
        })
    }
    }

    handleDelete = () => { 
        console.log("this.state.productToEditOrDelete ::",this.state.productToEditOrDelete)
        if(this.state.productToEditOrDelete.id == 0){
            alert("please select a Product to delete")
        }
        else{
         deleteProductService(this.state.productToEditOrDelete.productId);
    }
    }



    ProductTable = ({ cols, data }) => {
        return (
            <div >
                <div>  
                <span>
                <Button variant="primary" onClick={this.handleShowCreateProduct} className='custom-btn'>
                    Create
                </Button>
                </span>
                    <span>
                <Button variant="primary" onClick={this.handleEdit} className='custom-btn'>
                    Edit
                </Button>
                </span>
                <span>
                <Button variant="primary" onClick={this.handleDelete} className='custom-btn'>
                    Delete
                </Button>
                </span>
                </div>
                <Table className='tableHover'>
                    <thead>
                        <tr>
                            {cols.map((headerItem, index) => (
                                <th key={index}> {headerItem}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data != undefined && data.length > 0 && data.map((product,rowId) => {
                            return <tr key={rowId} onClick={() =>
                                this.handleEditOrDelete(product,rowId)} className={this.state.highLightSelectedRow === rowId ? "tableSelected" : ""}>
                                    {cols.map(col => <td>{product[col]}</td>)}</tr>
                        })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
