import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createCategoryService } from '../service/CategoryService';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';
import { CategoryModal } from '../modals/CategoryModal';
import { CATEGORY_CREATED, FAILURE_RESPONSE } from "../AppConstants";

export default class CreateCategory extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: props.show,
      categoryModal: CategoryModal,
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
          <Modal.Header closeButton>Add Category</Modal.Header>
          <Modal.Body>

            <div>
               {this.state.message}
              <form onSubmit={this.createCategory}>
              <label>
                  CategoryCode:
                  <input value={this.state.categoryModal.categoryCode} onChange={this.handleChangeCatCode} />
                </label>
                <label>
                  Name:
                  <input value={this.state.categoryModal.name} onChange={this.handleChangeName} />
                </label>
                <label>
                  Description:
                  <input value={this.state.categoryModal.description} onChange={this.handleChangeDescription} />
                </label>
                <label>
                  ValidFrom:
                  <input value={this.state.categoryModal.validFrom} onChange={this.handleChangeValidFrom} />
                </label>
                <label>
                  ValidTill:
                  <input value={this.state.categoryModal.validTill} onChange={this.handleChangeValidTill} />
                </label>

                <input type="submit" value="Submit" />
                <input type="submit" value="cancel" />
              </form>
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
      categoryModal:{
        ...prevState.categoryModal,
        categoryCode: event.target.value
      }
    }));
  }
  handleChangeName = (event) => {
    this.setState(prevState => ({
      categoryModal:{
        ...prevState.categoryModal,
        name: event.target.value
      }
    }));
  }
  handleChangeDescription = (event) => {
    this.setState(prevState => ({
      categoryModal:{
        ...prevState.categoryModal,
        description: event.target.value
      }
    }));
  }
  handleChangeValidFrom = (event) => {
    this.setState(prevState => ({
      categoryModal:{
        ...prevState.categoryModal,
        validFrom: event.target.value
      }
    }));
  }
  handleChangeValidTill = (event) => {
    this.setState(prevState => ({
      categoryModal:{
        ...prevState.categoryModal,
        validTill: event.target.value
      }
    }));
  }
  


   createCategory = async (event) => {
   
    event.preventDefault();
    console.log("create category .....")
    const response= await createCategoryService(this.state.categoryModal);
    console.log("response ::: ",response)
    this.setState({
      message : response
    })
   
  }

}