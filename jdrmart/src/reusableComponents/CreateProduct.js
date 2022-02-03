import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { createProductService } from '../service/ProductService';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';
import { ProductModal } from '../modals/ProductModal';
import { PRODUCT_CREATED, FAILURE_RESPONSE } from "../AppConstants";

export default class CreateProduct extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: props.show,
      productModal: ProductModal,
      message: ""

    }
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>Add Product</Modal.Header>
          <Modal.Body>

            <div>
              {this.state.message}
              <Form onSubmit={this.createProduct}>
                <label>
                  ProductId:
                  <input value={this.state.productModal.productId} onChange={this.handleChangeProductId} />
                </label>
                <label>
                  Name:
                  <input value={this.state.productModal.name} onChange={this.handleChangeName} />
                </label>
                <label>
                  Description:
                  <input value={this.state.productModal.description} onChange={this.handleChangeDescription} />
                </label>
                <label>
                  Price:
                  <input value={this.state.productModal.price} onChange={this.handleChangePrice} />
                </label>
                <label>
                  Quantity:
                  <input value={this.state.productModal.quantity} onChange={this.handleChangeQuantity} />
                </label>
                <label>
                  Gtin:
                  <input value={this.state.productModal.gtin} onChange={this.handleChangeGtin} />
                </label>
                <label>
                  OfferId:
                  <input value={this.state.productModal.offerId} onChange={this.handleChangeOfferId} />
                </label>
                <label>
                  Brand:
                  <input value={this.state.productModal.brand} onChange={this.handleChangeBrand} />
                </label>
                <label>
                  Category:
                  <input value={this.state.productModal.category} onChange={this.handleChangeCategory} />
                </label>
                <label>
                  ValidFrom:
                  <input value={this.state.productModal.validFrom} onChange={this.handleChangeValidFrom} />
                </label>

                <label>
                  ValidTill:
                  <input value={this.state.productModal.validTill} onChange={this.handleChangeValidTill} />
                </label>

                <input type="submit" value="Submit" />
                <input type="submit" value="cancel" />
              </Form>
            </div>
          </Modal.Body>

          <Modal.Footer>

          </Modal.Footer>
        </Modal>

      </div>
    )
  }
  handleChangeProductId = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        productId: event.target.value
      }
    }));
  }
  handleChangeName = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        name: event.target.value
      }
    }));
  }
  handleChangeDescription = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        description: event.target.value
      }
    }));
  }
  handleChangePrice = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        price: event.target.value
      }
    }));
  }
  handleChangeQuantity = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        quantity: event.target.value
      }
    }));
  }
  handleChangeGtin = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        gtin: event.target.value
      }
    }));
  }
  handleChangeOfferId = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        offerId: event.target.value
      }
    }));
  }
  handleChangeBrand = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        brand: event.target.value
      }
    }));
  }
  handleChangeCategory = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        category: event.target.value
      }
    }));
  }
  handleChangeValidFrom = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        validFrom: event.target.value
      }
    }));
  }
  handleChangeValidTill = (event) => {
    this.setState(prevState => ({
      productModal: {
        ...prevState.productModal,
        validTill: event.target.value
      }
    }));
  }




  createProduct = async (event) => {

    event.preventDefault();
    console.log("create product .....")
    const response = await createProductService(this.state.productModal);
    console.log("response ::: ", response)
    this.setState({
      message: response
    })

  }

}