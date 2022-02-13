import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/ProductService'
import { ProductModal } from '../modals/ProductModal';
import { Table,Button } from 'react-bootstrap';
import BarCode from './BarCode';



export default function Products() {
    const [products, setProducts] = useState([ProductModal])
    const [productCode, setProductCode] = useState('JDRMart')
    const [showProductsTable,setShowProductsTable] = useState(true)
    const [showProductDetail,setShowProductDetail] = useState(true)
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
              <div>
              Product barCode : <BarCode productCode={product.productCode}/>
              </div>
              </div>
              }
              
      </div>
      </div>

    )
}

