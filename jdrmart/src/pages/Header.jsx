import React, { useState, useEffect } from 'react';
import { Button, Navbar,Container,Link,Nav,Row,Col  } from 'react-bootstrap';
//import {  Link } from "react-router-dom";


export default function Header() {

    return (<div>
         <div height='80px'>
            <Container fluid>
                <Row> 
                <Col xs={2}>
                <img 
                src={`${process.env.PUBLIC_URL}/jdr.JPG`} 
                alt="logo"
                className='jdr-logo'
                /> 
                </Col>
                <Col xs={8}>
                <div className='header-logo'>
                    JDR Market
                </div>
                </Col>
                <Col xs={2}>
                <img 
                src={`${process.env.PUBLIC_URL}/userjdr.JPG`} 
                alt="logo" className='jdr-user-img'/>  
                </Col>
                </Row>
                </Container>
</div>
    </div>)

}