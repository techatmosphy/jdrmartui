import React, { useState, useEffect,useRef } from 'react';
import { getProducts } from '../service/ProductService'
import { ProductModal } from '../modals/ProductModal';
import { Table, Button } from 'react-bootstrap';
import Barcode from "react-barcode";
import ReactToPrint from "react-to-print";


export default function Products() {
    const [products, setProducts] = useState([ProductModal])
    const [productCode, setProductCode] = useState('JDRMart')
    const [showProductsTable, setShowProductsTable] = useState(true)
    const [showProductDetail, setShowProductDetail] = useState(true)
    const [product, setProduct] = useState()

    useEffect(() => {
        async function fetchProducts() {
            await getProducts().then((response) => {
                setProducts(response)
            })
        }
        fetchProducts();
    }, [])

    const columns = Object.keys(ProductModal);
    const componentRef = useRef();

    const handleShowProductDetail = (productParam) => {
        setProduct(productParam)
        setShowProductsTable(false)
        setShowProductDetail(true)
    }




    return (
        <div>
            <div>
                {showProductsTable &&
                    <Table className='tableHover'>
                        <thead>
                            <tr>
                                {columns.map((headerItem, index) => (
                                    <th key={index}> {headerItem}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {products != undefined && products.length > 0 && products.map((p, rowId) => {
                                return <tr key={rowId}
                                    onClick={() => handleShowProductDetail(p)}>
                                    {columns.map(columns => <td>{p[columns]}</td>)}</tr>
                            })
                            }
                        </tbody>
                    </Table>}
            </div>
            <div>
                {showProductDetail && product != undefined &&
                    <div>
                        <div>
                            Product Id : {product.productId}
                        </div>
                        <div>
                            Product name : {product.name}
                        </div>
                        <div style={{ padding: "0.05in" }} ref={componentRef}>
                            Bar Code :
                            <Barcode
                                value={product.productCode}
                                height="40"
                                displayValue={true}
                            />
                        </div>
                        <ReactToPrint
                            trigger={() => <button className="button">Print this out!</button>}
                            content={() => componentRef.current}
                        />
                    </div>
                }

            </div>
        </div>

    )
}

