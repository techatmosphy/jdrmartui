import React from 'react';
import { CategoryModal } from '../../modals/CategoryModal';
import { getCategories } from '../../service/CategoryService';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CategoryModalPage from '../../reusableComponents/CategoryModalPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { deleteCategoryService } from '../../service/CategoryService';
export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryModal: CategoryModal,
            categories: [],
            showCreateCategory: false,
            showTable: true,
            showEditCategory: false,
            categoryToEditOrDelete : CategoryModal,
            highLightSelectedRow : -1

        }
       

    }

    async componentDidMount() {
        await getCategories().then(categories =>{
            this.setState({
                categories: categories
            })
        });
    }


    handleShowCreateCategory = () => {
        this.setState({ showCreateCategory: !this.state.showCreateCategory })
    }
    render() {
        const columns = Object.keys(CategoryModal);
        return (<div>

            <div>
                {this.state.showTable && <this.CategoryTable cols={columns} data={this.state.categories} />}
            </div>
            <div>
                {this.state.showCreateCategory && <CategoryModalPage show={true} />}
            </div>
            <div>
                {this.state.showEditCategory && <CategoryModalPage show={true} category={this.state.categoryToEditOrDelete}/>}
            </div>
        </div>)
    }

    handleChangeName = (event) => {
        this.setState({
            categoryModal: {
                name: event.target.value
            }
        });
    }

    handleEditOrDelete = (category,rowId) => { 
        this.setState({
            categoryToEditOrDelete : category,
            highLightSelectedRow : rowId
        })
    }

    handleEdit = () => { 
        if(this.state.categoryToEditOrDelete.id == 0){
            alert("please select a category to edit")
        }
        else{
        this.setState({
            showEditCategory : true
        })
    }
    }

    handleDelete = () => { 
        console.log("this.state.categoryToEditOrDelete ::",this.state.categoryToEditOrDelete)
        if(this.state.categoryToEditOrDelete.id == 0){
            alert("please select a category to delete")
        }
        else{
         deleteCategoryService(this.state.categoryToEditOrDelete.category_id);
    }
    }



    CategoryTable = ({ cols, data }) => {
        return (
            <div >
                <div>  
                <span>
                <Button variant="primary" onClick={this.handleShowCreateCategory} className='custom-btn'>
                    Create
                </Button>
                </span>
                    <span>
                <Button variant="primary" onClick={this.handleEdit} className='custom-btn'>
                    Edit
                </Button>
                </span>
                <span>
                <Button variant="primary" onClick={this.handleDelete} className='custom-btn'>
                    Delete
                </Button>
                </span>
                </div>
                <Table className='tableHover'>
                    <thead>
                        <tr>
                            {cols.map((headerItem, index) => (
                                <th key={index}> {headerItem}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data != undefined && data.length > 0 && data.map((category,rowId) => {
                            return <tr key={rowId} onClick={() =>
                                this.handleEditOrDelete(category,rowId)}
                                 className={this.state.highLightSelectedRow === rowId ? "tableSelected" : ""}>
                                    {cols.map(col => <td>{category[col]}</td>)}</tr>
                        })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
