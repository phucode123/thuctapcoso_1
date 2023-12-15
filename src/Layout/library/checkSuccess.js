import { FaCheckCircle } from 'react-icons/fa';
// import { Spinner } from 'react-bootstrap';
import { faCircleExclamation, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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