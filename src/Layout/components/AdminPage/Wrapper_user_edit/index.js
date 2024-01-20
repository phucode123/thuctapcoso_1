import React, { useEffect } from "react";
import { useState } from "react";
// import Wrapper_edit_item from "../Wrapper_item_edit";
import './Wrapper_edit_edit.css'
import { faPen, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../../library/Loading";
import axios from "axios";

export default function Wrapper_edit_user({ isEditFormVisible, setEditFormVisible, user }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({});
    const [orders, setOrders] = useState([]);

    const fetchData = async () => {

        try {
            // const testUser = JSON.parse(window.localStorage.getItem('user'));
            // console.log(testUser.id);
            // console.log(testUser);
            // await setEditedUser(user)
            console.log(editedUser.id, editedUser.name);
            const response = await axios.get(`http://localhost:3001/api/v1/get-all-order?id_user=${user.id}`);
            setOrders(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [isEditFormVisible]);
    // console.log(editedUser)
    function removeForm() {
        setEditFormVisible(false);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }

    useEffect(() => {

        setEditedUser(user);
    }, [isEditFormVisible]);
    // chỉnh sửa hoặc cấm


    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    const handleSaveButtonClick = () => {
        // console.log('Sản phẩm được chỉnh sửa:', editedUser);
        setIsEditing(false);
    };

    const handleInputChange = (event, field) => {
        const { value } = event.target;
        setEditedUser((prevProduct) => ({
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
                                            <label className='text_span_input'><span>Tên người dùng</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedUser.name}
                                                    onChange={(event) => handleInputChange(event, 'name')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedUser.name}</p>
                                            )}
                                        </div>
                                        <div className='form_input'>
                                            <label className='text_span_input'><span>Số điện thọai</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedUser.phone_number}
                                                    onChange={(event) => handleInputChange(event, 'price')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedUser.phone_number}</p>
                                            )}
                                        </div><div className='form_input'>
                                            <label className='text_span_input'><span>Email</span></label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedUser.email}
                                                    onChange={(event) => handleInputChange(event, 'email')}
                                                    className='form-control'
                                                />
                                            ) : (
                                                <p className="text_form_control">{editedUser.email}</p>
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
                                            <div className='d-grid'>
                                                <button className='btn btn-primary delete_user_btn'>Xóa người dùng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_edit_input_right">
                                    <h3 className='header_text_table'><span>Sản phẩm đã mua</span></h3>
                                    {/* <div style={{ height: '100%', width: '100%', backgroundImage: `url('https://www.jnland.com.my/wp-content/uploads/2020/05/coming-soon-projects.png')` }}></div> */}
                                    <div className='body_text_table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Ngày mua</th>
                                                    <th>Price</th>
                                                    <th>Trạng thái</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ position: 'relative' }}>

                                                {orders.map((product) => (
                                                    <tr key={product.id}>
                                                        <td className='table_text'>{product.id}</td>
                                                        <td className='table_text' >{product.order_date}</td>
                                                        <td className='table_text' >{product.total_price}</td>
                                                        <td className='table_text' >{product.status}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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