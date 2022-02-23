import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Row, Col, Container,Nav } from 'react-bootstrap';


ReactDOM.render(

  <div>
    <div>  <Container fluid>
            <Row height='100%'>

                <Col xs={2} className='Nav-items'>
                        <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 bd-highlight" className='App-logo'>
                          Logo 
                        </div>
                        <div class="p-2 bd-highlight">
                        <Nav.Link href="/billing" >Billing</Nav.Link>
                        </div>
                        <div class="p-2 bd-highlight"> 
                        <Nav.Link href="/categories" >Categories</Nav.Link>
                        </div>
                        <div class="p-2 bd-highlight"> 
                        <Nav.Link href="/products">Products</Nav.Link>
                        </div>
                    </div>
                </Col>


                <Col xs={10}>
                    <Row height='80px'>
                        <Header />
                    </Row>
                    <Row>
                    <App/>
                    </Row>

                </Col>
            </Row>
        </Container></div>
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
