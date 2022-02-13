import React, { useState, useEffect } from 'react';
import { getCategories } from '../service/CategoryService'
import { CategoryModal } from '../modals/CategoryModal';
import { Table,Button,Modal,Form } from 'react-bootstrap';
import { createCategoryService } from '../service/CategoryService';
import { RECORD_CREATED, RECORD_UPDATED } from "../AppConstants";



export default function Categories() {
    const [categories, setcategories] = useState([CategoryModal])
    const [showcategoriesTable, setShowcategoriesTable] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState(CategoryModal)
    const [modalHeader, setModalHeader] = useState()
    const [message, setMessage] = useState()

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

    const handleCreate = () => {
        console.log("*******************")
        setShowModal(true)
        setModalHeader("Create Category")
    }

    const handleEdit = () => {
        setShowModal(true)
        setModalHeader("Edit Category")
    }

    const handleDelete = () => {
        setModalHeader("Edit Category")
    }


  const  handleSubmit =  (event) => {
        event.preventDefault();
        createCategory(); 
      
    }

    const createCategory = async() => {
        await createCategoryService(category)
        .then(resMessage => {
            setMessage(resMessage)
        });
    }

    const handleChangeCategory = e => {
        const { name, value } = e.target;
        setCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
            <div>
                <span>
                    <Button variant="primary" onClick={handleCreate} className='custom-btn'>
                        Create
                    </Button>
                </span>
                <span>
                    <Button variant="primary" onClick={handleEdit} className='custom-btn'>
                        Edit
                    </Button>
                </span>
                <span>
                    <Button variant="primary" onClick={handleDelete} className='custom-btn'>
                        Delete
                    </Button>
                </span>
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
                            {categories != undefined && categories.length > 0 && categories.map((p, rowId) => {
                                return <tr key={rowId}>
                                    {columns.map(columns => <td>{p[columns]}</td>)}</tr>
                            })
                            }
                        </tbody>
                    </Table>}
            </div>
           <div>
           {
                <div>
                    <Modal >
                        <Modal.Header closeButton>{modalHeader}</Modal.Header>
                        <Modal.Body>

                            <div>
                                <div id="message" className={message == "" ? "" : (message === RECORD_CREATED ||
                                    message === RECORD_UPDATED)
                                    ? 'display-success' : 'display-error'}>
                                    {message}
                                </div>

                                <Form onSubmit={e => handleSubmit(e)}>
                                    <label className='formElement'>
                                        CategoryCode:
                                        <input value={category.categoryCode} name="categoryCode" onChange={handleChangeCategory} className='formElement' />
                                    </label>
                                    <label className='formElement'>
                                        Name:
                                        <input value={category.name} name="name" onChange={handleChangeCategory} className='formElement' />
                                    </label>
                                    <label className='formElement'>
                                        Description:
                                        <input value={category.description} name="description" onChange={handleChangeCategory} className='formElement' />
                                    </label>
                                    <label className='formElement'>
                                        ValidFrom:
                                        <input value={category.validFrom} name="validFrom" onChange={handleChangeCategory} className='formElement' />
                                    </label>
                                    <label className='formElement'>
                                        ValidTill:
                                        <input value={category.validTill} name="validTill" onChange={handleChangeCategory} className='formElement' />
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
            }
           </div>
        </div>

    )
}

