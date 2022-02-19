import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/ProductService'
import { ProductModal } from '../modals/ProductModal';
import { Table, Button, Form } from 'react-bootstrap';
import { OrderModal } from '../modals/OrderModal';
import { createOrderService } from '../service/OrderService';
import { BarCodeReader } from './BarCode';

export default function Billing() {
    const [products, setProducts] = useState([ProductModal])
    const [showBilllingTable, setShowBilllingTable] = useState(true)
    const [productsBilled, setProductsBilled] = useState([])
    const [productId, setProductId] = useState()
    const [totalAmount, setTotalAmount] = useState(0)
    const [order, setOrder] = useState(OrderModal)
    const [mobileNumber, setMobileNumber] = useState()
    const [message, setMessage] = useState()

    const columns = Object.keys(ProductModal);

    useEffect(() => {
        async function fetchProducts() {
            await getProducts().then((response) => {
                setProducts(response)
            })
        }
        fetchProducts();
    }, [])

    const handleProductChange = (p) => {
        setProductsBilled(products => [...products, p])
    }

    const handleChange = (e) => {
        let p = products.filter(p => p.productId == e.target.value)[0]
        if (p != undefined) {
            setTotalAmount(totalAmount + p.price)
            setProductsBilled(prev => [...prev, p])
        }

    }

    const submitOrder = (e) => {
        e.preventDefault()
        let ids = []
        productsBilled.forEach(p => ids.push(p.productId))
        const orderReq = {
            mobileNumber: mobileNumber,
            totalAmount: totalAmount,
            productIds: ids
        }
        createOrderService(orderReq).then(
            response => setMessage(response)
        )
    }

    const handleChangeMobileNo = (e) => {
        setMobileNumber(e.target.value)
    }

    const [barCode,setBarCode] = useState('')

    const updateBarCode = (code) => {
        setBarCode(code)
    }

    const handleScan = () => {
        <BarCodeReader updateBarCode={updateBarCode}/>
    }

    return (
        <div>
            <span>
                <Button variant="primary" onClick={handleScan} className="custom-btn">
                    Start Scan
                </Button>
            </span>
            <div><input value={productId} onChange={e => handleChange(e)} /></div>
            <div>
                <label>
                    Customer Mobile Number:
                </label>
                <input value={mobileNumber} onChange={e => handleChangeMobileNo(e)} />

                {showBilllingTable &&
                    <div>
                        <Form onSubmit={e => submitOrder(e)}>
                            <Table className='table-custom'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productsBilled && productsBilled.map((p, id) => {
                                        return (
                                            <tr>
                                                <td>{p.productId}</td>
                                                <td>{p.name}</td>
                                                <td>{p.price}</td>
                                                <td>{p.quantity}</td>
                                            </tr>
                                        )
                                    })

                                    }
                                </tbody>
                            </Table>
                            Total Amount : {totalAmount}
                            <input type="submit" value="Submit" />
                        </Form>
                    </div>
                }
            </div>
        </div>)
}
