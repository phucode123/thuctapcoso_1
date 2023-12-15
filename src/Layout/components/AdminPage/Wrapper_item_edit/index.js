import React, { useEffect } from "react";
import { useState } from "react";
import './Wrapper_edit_item.css'
import { faPen, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Wrapper_edit_item({ isEditFormVisible, setEditFormVisible, product }) {

    console.log(product)
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    function removeForm() {
        setEditFormVisible(false);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }

    useEffect(() => {

        setEditedProduct(product);
    }, [isEditFormVisible]);
    // chỉnh sửa hoặc cấm


    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    const handleSaveButtonClick = () => {
        console.log('Sản phẩm được chỉnh sửa:', editedProduct);
        setIsEditing(false);
    };

    const handleInputChange = (event, field) => {
        const { value } = event.target;
        setEditedProduct((prevProduct) => ({
            ...prevProduct,
            [field]: value,
        }));
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };
    // 
    return (
        <>

            {isEditFormVisible && (
                <div className="wrapper_edit_itemForm" onClick={removeForm}>
                    <div className="edit_item" onClick={stopPropagation}>
                        <div className="header_edit_item">
                            <i className="icon_close" onClick={removeForm}><FontAwesomeIcon icon={faClose} /></i>
                        </div>

                        <div className="container_edit_item">
                            <div className="form_edit_input">

                                <div className="form_edit_input_left">
                                    <div className="form_container">
                                        <div className='form_input'>
                                            <label className='text_span_input'><span>Tên sản phẩm</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedProduct.name}
                                                    onChange={(event) => handleInputChange(event, 'name')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedProduct.name}</p>
                                            )}
                                        </div>
                                        <div className='form_input'>
                                            <label className='text_span_input'><span>Giá</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedProduct.price}
                                                    onChange={(event) => handleInputChange(event, 'price')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedProduct.price}</p>
                                            )}
                                        </div>
                                        <div className='form_input'>
                                            <label className='text_span_input'><span>Sale</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedProduct.discount}
                                                    onChange={(event) => handleInputChange(event, 'sale')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedProduct.discount}</p>
                                            )}
                                        </div>
                                        <div className='form_input'>
                                            <label className='text_span_input'><span>Số lượng</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedProduct.quantity}
                                                    onChange={(event) => handleInputChange(event, 'quantity')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedProduct.quantity}</p>
                                            )}
                                        </div>
                                        <div className='form_input'>
                                            <label className='text_span_input'><span>Nhãn hàng</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedProduct.brand}
                                                    onChange={(event) => handleInputChange(event, 'local')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedProduct.brand}</p>
                                            )}
                                        </div>
                                        <div className="button_edit_delete">
                                            {isEditing ? (
                                                <>
                                                    <button className='btn btn-primary' onClick={handleSaveButtonClick}>
                                                        Save
                                                    </button>
                                                </>
                                            ) : (
                                                <button className='btn btn-primary' onClick={handleEditButtonClick}>
                                                    Edit
                                                </button>
                                            )}
                                            <div className='d-grid'>
                                                <button onClick={handleCancelEdit} className='btn btn-primary'>Huỷ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_edit_input_right">
                                    <div className="form_edit_right_image" style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <img src={product.image} alt="Background Image" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="form_edit_save_cancel">

                                    </div>
                                </div>


                            </div>

                        </div>
                        {/* Nội dung của edit_item */}
                    </div>
                </div>
            )}
        </>
    )
}