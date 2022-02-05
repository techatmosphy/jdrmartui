import React from 'react';
import Category from './Category';
import Product from '../products/Product';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Billing from '../billing/Billing';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'this is Dashboard page...',
            showCategory: false,
            showProduct: false,
            showBilling: false

        }

    }

    render() {
        return (<div>

            <div>
                <Container fluid>
                    <Row>
                        <Col xs={2}><div id="leftmenu">
                            <Container fluid>
                                <Row>
                                    <span>
                                        <Button variant="primary" onClick={this.handleShowCategory} className="custom-btn">
                                            Categories
                                        </Button>
                                    </span>
                                </Row>
                                <Row>
                                    <span>  <Button variant="primary" onClick={this.handleShowProduct} className="custom-btn">
                                        Products
                                    </Button></span>
                                </Row>
                                <Row>
                                    <span>  <Button variant="primary" onClick={this.handleShowBilling} className="custom-btn">
                                        Billing
                                    </Button></span>
                                </Row>
                            </Container>
                        </div>
                        </Col>
                        <Col > {this.state.showCategory && <Category />}
                            {this.state.showProduct && <Product />}
                            {this.state.showBilling && <Billing />}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>)
    }

    handleShowCategory = () => {
        this.setState({
            showCategory: true,
            showProduct: false,
            showBilling: false
        })
    }
    handleShowProduct = () => {
        this.setState({
            showCategory: false,
            showProduct: true,
            showBilling : false
        })

    }
    handleShowBilling = () => {
        this.setState({
            showCategory: false,
            showProduct: false,
            showBilling: true
        })

    }
}