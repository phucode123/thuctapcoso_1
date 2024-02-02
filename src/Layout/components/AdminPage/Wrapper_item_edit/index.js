import React, { useEffect } from "react";
import { useState } from "react";
import './Wrapper_edit_item.css'
import { faPen, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import MyComponent from "../../../library/checkSuccess";
// MyComponent
export default function Wrapper_edit_item({ isEditFormVisible, setEditFormVisible, product }) {
    // console.log(product)
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);


    const [isShow, setIsShow] = useState('')
    const [title, setTitle] = useState('')
    const [messenger, setMessenger] = useState('')
    const [status, setStatus] = useState('')
    // const [savedProduct, setSavedProduct] = useState(product);
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
        displaySavedProduct()
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
    const displaySavedProduct = async () => {
        try {
            console.log(editedProduct);
            const response = await axios.post(
                "http://localhost:3001/api/v1/update-shoes",
                {
                    id_shoes: editedProduct.id,
                    price: editedProduct.price,
                    discount: editedProduct.discount,
                    describ: editedProduct.describ,
                }
            );

            if (response.data = 'OK') {
                setStatus(true)
                setIsShow(true)

                setTitle('Thêm Thành Công')
                setMessenger('Đã sửa thành công')
            }
            console.log("Sản phẩm đã được cập nhật:", response.data);
            // console.log("Thành công");
        } catch (error) {
            console.error("Lỗi khi cập nhật sản phẩm:", error);
        }
    };

    const handleDelete = async () => {
        try {
            console.log(editedProduct);
            const response = await axios.delete(
                `http://localhost:3001/api/v1/delete-shoes?id_shoes= ${editedProduct.id}`
            );

            if (response.data = 'OK') {
                setStatus(true)
                setIsShow(true)

                setTitle('Xóa Thành Công')
                setMessenger('Đã xóa thành công')
                // window.location('/')
            }
            console.log("Sản phẩm đã được xóa:", response.data);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            
            // console.log("Thành công");
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
        }

    }
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

                                            <p className="text_form_control">{editedProduct.name}</p>

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
                                            <label className='text_span_input'><span>Giảm giá</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedProduct.discount}
                                                    onChange={(event) => handleInputChange(event, 'discount')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedProduct.discount}</p>
                                            )}
                                        </div>

                                        <div className='form_input'>
                                            <label className='text_span_input'><span>Nhãn hàng</span></label>

                                            <p className="text_form_control">{editedProduct.brand}</p>

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
                                            <div className='d-grid'>
                                                <button onClick={handleDelete} className='btn btn-primary'>Xóa</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="form_edit_input_right">
                                    <div className="form_edit_right_image" style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <img src={product.image} alt="Background Image" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="form_edit_save_cancel">
                                        <h3>
                                            Mô tả sản phẩm:
                                        </h3>
                                        {isEditing ?
                                            <textarea
                                                onChange={(event) => handleInputChange(event, 'describ')}
                                                name="describe"
                                                defaultValue={editedProduct.describ}
                                                className="form-textarea"
                                            ></textarea>
                                            :
                                            <p>
                                                {editedProduct.describ}
                                            </p>
                                        }
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            )}
            <MyComponent title={title} messenger={messenger} status={status} isShow={isShow} setIsshow={setIsShow} />

        </>
    )
}