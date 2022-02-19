import React, { useState, useEffect } from 'react';
import { CategoryModal } from '../modals/CategoryModal';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { createCategoryService } from '../service/CategoryService';
import { RECORD_CREATED, RECORD_UPDATED } from "../AppConstants";

export default function CategoryModalPage1(props) {

    const [category, setCategory] = useState(CategoryModal)
    const [modalHeader, setModalHeader] = useState("Category")
    const [message, setMessage] = useState()
    const [showModal, setShowModal] = useState(props.showModal)
    const[cssClassName, setCssClassName] = useState('')


    useEffect(() => {
        setShowModal(props.showModal)
        setModalHeader(props.modalHeader)
        setCategory(props.category)
    }, [])

    const handleChangeCategory = e => {
        const { name, value } = e.target;
        setCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createCategory();

    }

    const createCategory = async () => {
        if(category.categoryCode === '' || category.name===''){
            setMessage("Please enter code,name ")
            setCssClassName('display-error')
        } else{
        await createCategoryService(category)
            .then(resMessage => {
                setMessage(resMessage)
                if(message === RECORD_CREATED ||
                    message === RECORD_UPDATED){
                        setCssClassName('display-success')
                        setCategory(CategoryModal)
                    }else{
                        setCssClassName('display-error')
                    }
            });
        }
    }

    const closeModal = () => {
        props.closeModal()
    }

    return (
        <Modal show={showModal} modalHeader={modalHeader} onHide={closeModal}>
            <Modal.Header closeButton>{modalHeader}
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div id="message" className={cssClassName}>
                        {message}
                    </div>

                    <Form onSubmit={e => handleSubmit(e)}>
                            <label className='formElement'>
                            CategoryCode
                            </label>
                            <input value={category.categoryCode} name="categoryCode" onChange={handleChangeCategory} className='formElement' />
                       
                        <label className='formElement'>
                            Name
                            <input value={category.name} name="name" onChange={handleChangeCategory} className='formElement' />
                        </label>
                        <label className='formElement'>
                            Description
                            <input value={category.description} name="description" onChange={handleChangeCategory} className='formElement' />
                        </label>
                        <label className='formElement'>
                            ValidFrom
                            <input value={category.validFrom} name="validFrom" onChange={handleChangeCategory} className='formElement' />
                        </label>
                        <label className='formElement'>
                            ValidTill
                            <input value={category.validTill} name="validTill" onChange={handleChangeCategory} className='formElement' />
                        </label>
                         <div>
                        <Button type="submit" variant="primary" className='formElement'>
                        Submit </Button>
                        <Button variant="secondary" className='formElement' onClick={closeModal}>Cancel </Button>

                        </div>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}