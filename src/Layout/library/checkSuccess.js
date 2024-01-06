import { FaCheckCircle } from 'react-icons/fa';
// import { Spinner } from 'react-bootstrap';
import { faCircleExclamation, faClose, faUserCircle, faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styleLibrary.css'
import React, { useEffect } from "react";

export default function MyComponent({ title, messenger, status, isShow, setIsshow }) {
    // status = false
    //status sẽ có 2 trạng thái thành công và không thành công true false 

    return (
        <> {
            isShow &&
            <div id="toast " className={` toast_container ${status ? 'toast--success' : 'toast--error'}`}>
                {status ? <div class="toast__icon toast--success">
                    <FontAwesomeIcon icon={faCheckCircle} className="success_icon phutest_icon" />
                </div> : <div class="toast__icon toast--error">
                    <FontAwesomeIcon icon={faWarning} className="phutest_icon" />
                </div>}
                <div class="toast__body">
                    <h3 class="toast__title ">{title}</h3>
                    <p class="toast__msg">{messenger}</p>
                </div>
                <div class="toast__close" onClick={() => {
                    setIsshow(false)
                }}>
                    <i >
                        <FontAwesomeIcon icon={faClose} id="" className="" />
                    </i>
                </div>
            </div>}
        </>
    );
}

function Checksuccess() {
    return (
        <div className="status_message" >

            <FaCheckCircle id="successIcon" className="success_icon" />
            {/* {successMessage} */}
            <span>Thành công</span>

        </div>)
}
function CheckError() {
    return (
        <div className="status_message error"   >
            <i id="error" className="error_icon">
                <FontAwesomeIcon icon={faCircleExclamation} />
            </i>
            {/* {successMessage} */}
            <span>Thất pại rồii</span>

        </div>)
}


export { Checksuccess, CheckError }