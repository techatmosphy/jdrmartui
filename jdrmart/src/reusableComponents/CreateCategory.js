import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createCategoryService } from '../service/CategoryService';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CategoryModal } from '../modals/CategoryModal';


export default class CreateCategory extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: props.show,
      categoryModal: CategoryModal,

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

              <form onSubmit={this.handleSubmit}>
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
  handleChangeName = (event) => {
    this.setState({
      categoryModal: {
        name: event.target.value
      }
    });
  }
  handleChangeDescription = (event) => {
    this.setState({
      categoryModal: {
        description: event.target.value
      }
    });
  }
  handleChangeValidFrom = (event) => {
    this.setState({
      categoryModal: {
        validFrom: event.target.value
      }
    });
  }
  handleChangeValidTill = (event) => {
    this.setState({
      categoryModal: {
        validTill: event.target.value
      }
    });
  }
  


  createCategory = (event) => {
    console.log("In createCategory --- CreateCategory")
    event.preventDefault();
    //const name = event.target.elements.name.value;
    //const description = event.target.elements.description.value;
   // const validFrom = event.target.elements.validFrom.value;
   // const validTill = event.target.elements.validTill.value;
    // creating item json with form values
    const category = {
      //name: this.state.name,
      //description: description,
      //validFrom: validFrom,
      //validTill: validTill
    }
    createCategoryService(category);
  }

}