import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { createCategoryService, updateCategoryService } from '../service/CategoryService';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { CategoryModal } from '../modals/CategoryModal';
import { CATEGORY_CREATED, FAILURE_RESPONSE, RECORD_CREATED, RECORD_UPDATED } from "../AppConstants";
import { ACTION_CREATE, ACTION_UPDATE } from '../AppConstants';

export default class CategoryModalPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: props.show,
      categoryModal: CategoryModal,
      message: "",
      action: "",
      modalHeader: "Add Category"
    }
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }

  componentDidMount() {
    if (this.props.category != undefined) {
      this.setState({
        categoryModal: this.props.category,
        action: ACTION_UPDATE,
        modalHeader: "Edit Category"
      })
    } else {
      this.setState({
        action: ACTION_CREATE
      })
    }
  }
  render() {
    const message = this.state.message;
    return (
      <div>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>{this.state.modalHeader}</Modal.Header>
          <Modal.Body>

            <div>
              <div id="message" className={message == ""? "" :(message === RECORD_CREATED ||
               message === RECORD_UPDATED)
                ? 'display-success' : 'display-error'}>
                {this.state.message}
              </div>

              <Form onSubmit={this.handleSubmit}>
                <label className='formElement'>
                  CategoryCode:
                  <input value={this.state.categoryModal.categoryCode} onChange={this.handleChangeCatCode} className='formElement' />
                </label>
                <label className='formElement'>
                  Name:
                  <input value={this.state.categoryModal.name} onChange={this.handleChangeName} className='formElement' />
                </label>
                <label className='formElement'>
                  Description:
                  <input value={this.state.categoryModal.description} onChange={this.handleChangeDescription} className='formElement' />
                </label>
                <label className='formElement'>
                  ValidFrom:
                  <input value={this.state.categoryModal.validFrom} onChange={this.handleChangeValidFrom} className='formElement' />
                </label>
                <label className='formElement'>
                  ValidTill:
                  <input value={this.state.categoryModal.validTill} onChange={this.handleChangeValidTill} className='formElement' />
                </label>

                <input type="submit" value="Submit" className='custom-btn' className='formElement' />

                <input type="submit" value="cancel" className='formElement' />
              </Form>
            </div>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
  handleChangeCatCode = (event) => {
    this.setState(prevState => ({
      categoryModal: {
        ...prevState.categoryModal,
        categoryCode: event.target.value
      }
    }));
  }
  handleChangeName = (event) => {
    this.setState(prevState => ({
      categoryModal: {
        ...prevState.categoryModal,
        name: event.target.value
      }
    }));
  }
  handleChangeDescription = (event) => {
    this.setState(prevState => ({
      categoryModal: {
        ...prevState.categoryModal,
        description: event.target.value
      }
    }));
  }
  handleChangeValidFrom = (event) => {
    this.setState(prevState => ({
      categoryModal: {
        ...prevState.categoryModal,
        validFrom: event.target.value
      }
    }));
  }
  handleChangeValidTill = (event) => {
    this.setState(prevState => ({
      categoryModal: {
        ...prevState.categoryModal,
        validTill: event.target.value
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.action === ACTION_CREATE) {
      this.createCategory();
    } else if (this.state.action === ACTION_UPDATE) {
      this.updateCategory();
    }
  }


  createCategory = async () => {
    console.log("create category .....")
    const response = await createCategoryService(this.state.categoryModal);
    console.log("response ::: ", response)
    this.setState({
      message: response
    })

  }

  updateCategory = async () => {
    console.log("update category .....")
    await updateCategoryService(this.state.categoryModal)
      .then(message => {
        console.log("message :: ", message)
        this.setState({
          message: message
        })
      });

  }


}