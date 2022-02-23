import React, { useState, useEffect } from 'react';
import { getCategories } from '../service/CategoryService'
import { CategoryModal } from '../modals/CategoryModal';
import { Table, Button } from 'react-bootstrap';
import { deleteCategoryService } from '../service/CategoryService';
import CategoryModalPage1 from './CategoryModalPage';
import { RECORD_CREATED, RECORD_UPDATED, RECORD_DELETED, FAILURE_RESPONSE } from "../AppConstants";
import { Row, Col, Container,Nav } from 'react-bootstrap';

export default function Categories() {
    const [categories, setcategories] = useState([CategoryModal])
    const [showcategoriesTable, setShowcategoriesTable] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState(CategoryModal)
    const [modalHeader, setModalHeader] = useState()
    const [highLightSelectedRow, setHighLightSelectedRow] = useState(-1)
    const [message, setMessage] = useState('')
    const [cssClassName, setCssClassName] = useState('')

    useEffect(() => {
        async function fetchcategories() {
            await getCategories().then((response) => {
                setcategories(response)
            })
        }
        fetchcategories();
    }, [])

    const columns = Object.keys(CategoryModal);

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const handleCreate = (e) => {
        e.preventDefault()
        setShowModal(true)
        setModalHeader("Create Category")
        setCategory(CategoryModal)

    }

    const handleEdit = () => {
        if (category.category_id == '') {
            alert("please select a category to update")
        } else {
            setShowModal(true)
            setModalHeader("Edit Category")
        }
    }

    const handleDelete = () => {
        if (category.category_id == '') {
            alert("please select a category to delete")
        } else {
            deleteCategoryService(category.category_id).then(
                responseMsg => {
                    if (responseMsg === RECORD_DELETED) {
                        async function fetchcategories() {
                            await getCategories().then((response) => {
                                setcategories(response)
                            })
                        }
                        fetchcategories();
                        setCssClassName('display-success')
                    } else {
                        setCssClassName('display-error')
                    }
                    setMessage(responseMsg)
                }

            )
        }
    }


    const handleEditOrDelete = (cat, rowId) => {
        setCategory(cat)
        setHighLightSelectedRow(rowId)
    }


    return (
        <div>
            <div>
                <div className={cssClassName}>{message}</div>
                <Container fluid className='Record-menu-btns'>
                    <Row >
                       <Col>
                       <Button variant="primary" onClick={(e) => handleCreate(e)} className='custom-btn'>
                        Create
                       </Button>
                        </Col>
                        <Col>
                        <Button variant="warning" onClick={handleEdit} className='custom-btn'>
                        Edit
                    </Button>
                        </Col>
                        <Col >
                        <Button variant="danger" onClick={handleDelete} className='custom-btn'>
                        Delete
                    </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                {showcategoriesTable &&
                    <Table className='tableHover'>
                        <thead>
                            <tr>
                                {columns.map((headerItem, index) => (
                                    <th key={index}> {headerItem}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {categories != undefined && categories.length > 0 && categories.map((cat, rowId) => {
                                return <tr key={rowId}
                                    onClick={() => handleEditOrDelete(cat, rowId)}
                                    className={highLightSelectedRow === rowId ? "tableSelected" : ""}>
                                    {columns.map(columns => <td>{cat[columns]}</td>)}</tr>
                            })
                            }
                        </tbody>
                    </Table>}
            </div>
            <div>
                {
                    showModal && <CategoryModalPage1 showModal={showModal} modalHeader={modalHeader}
                        category={category} closeModal={handleModal} />
                }
            </div>
        </div>

    )
}

