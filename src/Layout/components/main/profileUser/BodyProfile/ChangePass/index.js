import React, { useEffect, useState } from "react";
import './ChangePass.css'

export default function ChangePass() {
    let user = { id: 1, name: 'phu', phone_number: '09648', email: '123@' }//test
    // const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    // console.log(editedUser)



    useEffect(() => {
        setEditedUser(user);
    }, []);
    // chỉnh sửa hoặc cấm


    const handleEditButtonClick = () => {
        // setIsEditing(true);
    };

    const handleSaveButtonClick = () => {
        console.log('Sản phẩm được chỉnh sửa:', editedUser);
        // setIsEditing(false);
    };

    const handleInputChange = (event, field) => {
        const { value } = event.target;
        setEditedUser((prevProduct) => ({
            ...prevProduct,
            [field]: value,
        }));
    };

    const handleCancelEdit = () => {
        // setIsEditing(false);
    };
    return (
        <div className="container_Changepass">
            <div className="container_edit_item detail_profile">
                <div className="form_edit_input">
                    <div className="form_edit_input_left">
                        <div className="form_container">
                            <div className='form_input'>
                                <label className='text_span_input'><span>Mật khẩu cũ</span></label>

                                <input
                                    type="password"
                                
                                    // value={editedUser.name}
                                    // onChange={(event) => handleInputChange(event, 'pass')}
                                    className='form-control'

                                />

                            </div>
                            <div className='form_input'>
                                <label className='text_span_input'><span>Mật khẩu mới</span></label>
                                <input
                                    type="password"
                                    // value={editedUser.phone_number}
                                    // onChange={(event) => handleInputChange(event, 'price')}
                                    className='form-control'

                                />

                            </div><div className='form_input'>
                                <label className='text_span_input'><span>Nhập lại mật khẩu mới</span></label>

                                <input
                                    type="password"
                                    
                                    // value={editedUser.email}
                                    // onChange={(event) => handleInputChange(event, 'email')}
                                    className='form-control'

                                />

                            </div>
                            <div className="button_edit_delete userpage">

                                <>
                                    <button className='btn Save_edit button_userDetail' onClick={handleSaveButtonClick}>
                                        Save
                                    </button>
                                </>

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
        </div>)
}