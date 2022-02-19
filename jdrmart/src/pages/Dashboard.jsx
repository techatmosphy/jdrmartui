import React, { useState, useEffect } from 'react';
import Billing from './Billing';
import Categories from './Cartegories';
import Products from './Products';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
    const [pageToShow, setPageToShow] = useState('')

    const handlePageToShow = (pageName) => {
        setPageToShow(pageName)
    }

    return (
        <div>
            <Container fluid>
                <Row> 
                <Col xs={2} className='dashboard'>
                    <Container fluid>
                        <Row>
                            <span>
                                <Button variant="primary" onClick={() => handlePageToShow('Billing')} className="custom-btn">
                                    Billing
                                </Button>
                            </span>
                        </Row>
                        <Row>
                            <span>
                                <Button variant="primary" onClick={() => handlePageToShow('Categories')} className="custom-btn">
                                    Categories
                                </Button>
                            </span>
                        </Row>
                        <Row>
                            <span>
                                <Button variant="primary" onClick={() => handlePageToShow('Products')} className="custom-btn">
                                    Products
                                </Button>
                            </span>
                        </Row>

                    </Container>
                    </Col>
                <Col className='dashboard'>
                    <div>
                    {
                        pageToShow === 'Billing' 
                        ? <Billing/>
                        : pageToShow === 'Categories'
                        ? <Categories/>
                        : pageToShow === 'Products'
                        ? <Products/>
                        : <Billing/>
                    }
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    )

}