import React, { useState, useEffect } from "react";
import './Detail_profile.css'

export default function Detail_profile() {

    const [User, setUser] = useState('');
    const [Token, setToken] = useState(null);


    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = () => {
        const testToken = window.localStorage.getItem('token');
        const testUser = window.localStorage.getItem('user');
        // console.log(JSON.parse(testUser), testToken);
        setUser(JSON.parse(testUser));
        setToken(testToken)
    };
    // console.log(User);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(User);
    // console.log(editedUser)
    useEffect(() => {
        setEditedUser(User);
    }, [User]);
    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    const handleSaveButtonClick = () => {
        console.log('Sản phẩm được chỉnh sửa:', editedUser);
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
    return (
        <div className="container_detail">
            <div className="container_edit_item detail_profile">
                <div className="form_edit_input">
                    <div className="form_edit_input_left">
                        <div className="form_container">
                            <div className='form_input'>
                                <label className='text_span_input'><span>Tên người dùng</span></label>

                                <input
                                    type="text"
                                    value={editedUser.name}
                                    onChange={(event) => handleInputChange(event, 'name')}
                                    className='form-control'
                                    disabled={!isEditing}
                                />

                            </div>
                            <div className='form_input'>
                                <label className='text_span_input'><span>Số điện thọai</span></label>
                                <input
                                    type="text"
                                    value={editedUser.phone_number}
                                    onChange={(event) => handleInputChange(event, 'price')}
                                    className='form-control'
                                    disabled={!isEditing}
                                />

                            </div><div className='form_input'>
                                <label className='text_span_input'><span>Email</span></label>

                                <input
                                    type="text"
                                    value={editedUser.email}
                                    onChange={(event) => handleInputChange(event, 'email')}
                                    className='form-control'
                                    disabled={!isEditing}
                                />

                            </div>
                            <div className="button_edit_delete userpage">
                                {isEditing ? (
                                    <>
                                        <button className='btn Save_edit button_userDetail' onClick={handleSaveButtonClick}>
                                            Save
                                        </button>
                                    </>
                                ) : (
                                    <button className='btn Save_edit button_userDetail' onClick={handleEditButtonClick}>
                                        Edit
                                    </button>
                                )}
                                <div className='d-grid'>
                                    <button onClick={handleCancelEdit} className='button_userDetail cancel_edit btn '>Huỷ</button>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <div>

            </div>
        </div>
    )
}