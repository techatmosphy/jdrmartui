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
            productToEditOrGenerateBarCodeOrDelete : ProductModal,
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
                {this.state.showEditProduct && <ProductModalPage show={true} Product={this.state.productToEditOrGenerateBarCodeOrDelete}/>}
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

    handleEditOrGenerateBarcodeOrDelete = (Product,rowId) => { 
        this.setState({
            productToEditOrGenerateBarCodeOrDelete : Product,
            highLightSelectedRow : rowId
        })
    }

    handleEdit = () => { 
        if(this.state.productToEditOrGenerateBarCodeOrDelete.id == 0){
            alert("please select a Product to edit")
        }
        else{
        this.setState({
            showEditProduct : true
        })
    }
    }

    handleDelete = () => { 
        console.log("this.state.productToEditOrGenerateBarCodeOrDelete ::",this.state.productToEditOrGenerateBarCodeOrDelete)
        if(this.state.productToEditOrGenerateBarCodeOrDelete.id == 0){
            alert("please select a Product to delete")
        }
        else{
         deleteProductService(this.state.productToEditOrGenerateBarCodeOrDelete.productId);
    }
    }

    handleGenerateBarCode = () => {
        console.log("this.state.productToEditOrGenerateBarCodeOrDelete ::",this.state.productToEditOrGenerateBarCodeOrDelete)
        if(this.state.productToEditOrGenerateBarCodeOrDelete.id == 0){
            alert("please select a Product to generate barcode")
        } else{
           const value = 'jdrMart'+this.state.productToEditOrGenerateBarCodeOrDelete.productId;
           withMyHook();
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
                <Button variant="primary" onClick={this.handleGenerateBarCode} className='custom-btn'>
                    Generate BarCode
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
                                this.handleEditOrGenerateBarcodeOrDelete(product,rowId)} className={this.state.highLightSelectedRow === rowId ? "tableSelected" : ""}>
                                    {cols.map(col => <td>{product[col]}</td>)}</tr>
                        })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }

   
}
 const withHook = (Component, useHook, hookName = 'hookvalue') => {
        return function WrappedComponent(props) {
          const hookValue = useHook();
          return <Component {...props} {...{[hookName]: hookValue}} />;
        };
      };
    
      class MyComponent extends React.Component {
        render(){
          const myUseHookValue = this.props.myUseHookValue;
          return <div>{myUseHookValue}</div>;
        }
      }
