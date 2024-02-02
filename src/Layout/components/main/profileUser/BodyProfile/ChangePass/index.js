import React, { useEffect, useState } from "react";
import './ChangePass.css'
import axios from "axios";
import MyComponent from "../../../../../library/checkSuccess";

export default function ChangePass() {
    // let user = { id: 1, name: 'phu', phone_number: '09648', email: '123@' }//test
    // const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({});
    useEffect(() => {
        const testUser = window.localStorage.getItem('user');
        // console.log(JSON.parse(testUser), testToken);
        setEditedUser(JSON.parse(testUser));
        // setEditedUser(user);
    }, []);
    // chỉnh sửa hoặc cấm

    const [isShow, setIsShow] = useState('')
    const [title, setTitle] = useState('')
    const [messenger, setMessenger] = useState('')
    const [status, setStatus] = useState('')

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSaveButtonClick = () => {
        console.log(editedUser);
        let test = editedUser.id
        // Kiểm tra mật khẩu mới đã nhập lại có khớp không
        if (newPassword !== confirmPassword) {
            console.log("Mật khẩu mới và mật khẩu nhập lại không khớp");
            setTitle('Thất bại')
            setStatus(false)
            setIsShow(true)
            setMessenger('Mật khẩu mới và mật khẩu nhập lại không khớp')
            return;
        }
        else if (!oldPassword || !newPassword || !confirmPassword) {
            // console.log("Mật khẩu mới và mật khẩu nhập lại không khớp");
            setTitle('Thất bại')
            setStatus(false)
            setIsShow(true)
            setMessenger('Bạn không được để trống ô nàoo')

        }
        else {
            axios.get(`http://localhost:3001/api/v1/change-pass?id=${test}&pass=${oldPassword}&newPass=${newPassword}`)
                .then((response) => {
                    const data = response.data;
                    // if (data.masseger = 'Mật khẩu cũ không đúng') {
                    //     setTitle('Không thành công')
                    //     setStatus(false)
                    //     setIsShow(true)
                    // }
                    // else if(data.massege ="Thay đổi thành công"){
                    //     setTitle('Thành công')
                    //     setStatus(true)
                    //     setIsShow(true)
                    // }
                    // setMessenger(data.massege)
                    console.log(data);
                  
                })
                .catch((error) => {
                    console.error(error);
                    // setIsLoading(false);
                });

        }
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
                                    className='form-control'
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>
                            <div className='form_input'>
                                <label className='text_span_input'><span>Mật khẩu mới</span></label>
                                <input
                                    type="password"
                                    className='form-control'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className='form_input'>
                                <label className='text_span_input'><span>Nhập lại mật khẩu mới</span></label>
                                <input
                                    type="password"
                                    className='form-control'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="button_edit_delete userpage">
                                <>
                                    <button className='btn Save_edit button_userDetail' onClick={handleSaveButtonClick}>
                                        Save
                                    </button>
                                </>
                                <div className='d-grid'>
                                    <button className='button_userDetail cancel_edit btn'>Huỷ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyComponent title={title} messenger={messenger} status={status} isShow={isShow} setIsshow={setIsShow} />

        </div>
    )
}