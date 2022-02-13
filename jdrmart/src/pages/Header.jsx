import React, { useState, useEffect } from 'react';
import { Button, Navbar,Container,Link,Nav  } from 'react-bootstrap';
//import {  Link } from "react-router-dom";

export default function Header() {

    return (<div>
        <Navbar bg="light" expand="lg">
            <Container>
               <Navbar.Brand href="/categories">Categories</Navbar.Brand>
                <Navbar.Brand href="/products">Products</Navbar.Brand>
                <Navbar.Brand href="/billing">Billing</Navbar.Brand>
            </Container>
        </Navbar>
    </div>)

}