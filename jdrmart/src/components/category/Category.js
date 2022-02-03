import React from 'react';
import { CategoryModal } from '../../modals/CategoryModal';
import { getCategories } from '../../service/CategoryService';
import { Table1 } from '../../reusableComponents/Table';
import { Button } from 'react-bootstrap';
import CreateCategory from '../../reusableComponents/CreateCategory';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryModal: CategoryModal,
            categories: [CategoryModal],
            showCreateCategory: false,
            showTable : true

        }
        //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async   componentDidMount() {
        let categories = await getCategories();
      this.setState({
          categories :categories
      })
      console.log("state :: ",this.state.categories)
    }

    handleShowCreateCategory = () => {
        this.setState({ showCreateCategory: !this.state.showCreateCategory })
    }
    render() {
        const columns = Object.keys(this.state.categories[0]);
        console.log("columns ::",columns)
        return (<div>
       
       <div>
                {this.state.showTable && <Table1 cols={columns} data={this.state.categories} />}
            </div>
            <div>
                {this.state.showCreateCategory && <CreateCategory show={true} />}
            </div>

            <div>
                <Button variant="primary" onClick={this.handleShowCreateCategory}>
                    Add Category
                </Button>
            </div>
            <Container className='container' >
                <Row >
                    <Col>catergories list</Col>
                </Row>
                <Row> <Col>category to be shown</Col>
                </Row>

            </Container>
          

        </div>)
    }

    handleChangeName = (event) => {
        this.setState({
            categoryModal: {
                name: event.target.value
            }
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.categoryModal.name);
        event.preventDefault();
    }
}