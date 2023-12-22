import { useState } from 'react'
import './buy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paymend_cart from '../../cartPage/select_option';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { cityDistricts } from '../../../../../assect/workToken/WorkToken';


export default function BuyProduct({ isShow, setIsShowBuy }) {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [communes, setCommunes] = useState([]);

    const handleLocationChange = (event) => {
        const selectedLocation = event.target.value;
        setSelectedLocation(selectedLocation);
        setSelectedDistrict('');
        setCommunes([]);

        // Cập nhật danh sách huyện tương ứng với lựa chọn vị trí
        const selectedDistricts = cityDistricts[selectedLocation] || {};
        const districtOptions = Object.keys(selectedDistricts);
        setDistricts(districtOptions);
    };

    const handleDistrictChange = (event) => {
        const selectedDistrict = event.target.value;
        setSelectedDistrict(selectedDistrict);

        // Cập nhật danh sách xã tương ứng với lựa chọn huyện
        const selectedCommunes = cityDistricts[selectedLocation][selectedDistrict] || [];
        setCommunes(selectedCommunes);
    };
    const [selectedPayment, setSelectedPayment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);

    const validatePhoneNumber = () => {
        const regex = /^(0|\+84|84|09)\d{8,9}$/;
        return regex.test(phoneNumber);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
        setIsValid(validatePhoneNumber(value));
    };

    const handleInputBlur = () => {
        setIsTouched(true);
    };
    // const handlePaymentChange = (event) => {
    //     setSelectedPayment(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Hình thức thanh toán: ${selectedPayment}`);
    };

    function hideForm() {
        isShow = isShow
        setIsShowBuy(false)
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }
    const [showPlaceOrderButton, setShowPlaceOrderButton] = useState(false);
    const [showPayButton, setShowPayButton] = useState(false);

    const handlePaymentChange = (event) => {
        const paymentMethod = event.target.value;
        setSelectedPayment(paymentMethod);

        // Show or hide buttons based on selected payment method
        if (paymentMethod === 'credit_card') {
            setShowPlaceOrderButton(true);
            setShowPayButton(false);
        } else if (paymentMethod === 'bank_transfer') {
            setShowPlaceOrderButton(false);
            setShowPayButton(true);
        } else {
            setShowPlaceOrderButton(false);
            setShowPayButton(false);
        }
    };
    return (
        <>
            {/* form */}
            {isShow && (<div className='wrapper_buy' onClick={hideForm}>
                <div className='content_buy' onClick={stopPropagation}>
                    <div className="header_edit_item">
                        <i className="icon_close" onClick={hideForm}><FontAwesomeIcon icon={faClose} /></i>
                    </div>
                    {/* form */}

                    <div className='body'>
                        <form className="location">
                            <p>Địa chỉ</p>
                            <select className='custom_default' value={selectedLocation} onChange={handleLocationChange}>
                                <option disabled value="">Chọn vị trí</option>
                                {Object.keys(cityDistricts).map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>

                            <div className="location_phone">
                                <select className='custom_default' value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedLocation}>
                                    <option disabled value="">Chọn huyện</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>

                                <select className='custom_default' disabled={!selectedDistrict}>
                                    <option disabled value="">Chọn xã</option>
                                    {communes.map((commune, index) => (
                                        <option key={index} value={commune}>{commune}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="location_phone">
                                <div className="location_focus">
                                    <p>Điền số nhà/ngõ/...</p>
                                    <input className="input_cartPage custom_default" type='text' placeholder="Điền thêm thông tin địa chỉ cụ thể.." />
                                </div>
                                <div className={`phone_number_input ${!isValid && isTouched ? 'error' : ''}`}>
                                    <p>Điền số điện thoại nhận hàng</p>
                                    <input
                                        id="phone" className="input_cartPage custom_default"
                                        placeholder="Enter phone number.."
                                        value={phoneNumber}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                    />
                                    {!isValid && phoneNumber && isTouched && <p className="error_message">Sai định dạng số điện thoại</p>}

                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="payment">Chọn hình thức thanh toán:</label>
                                <select className='custom_default' id="payment" value={selectedPayment} onChange={handlePaymentChange}>
                                    <option value="">-- Chọn hình thức --</option>
                                    <option value="credit_card">Thanh toán khi nhận hàng</option>
                                    <option value="bank_transfer">Chuyển khoản ngân hàng</option>
                                </select>
                            </form>

                            <div>
                                {showPlaceOrderButton && (
                                    <button type="submit" >
                                        Đặt hàng
                                    </button>
                                )}

                                {showPayButton && (
                                    <button type="submit" >
                                        Thanh toán
                                    </button>
                                )}
                            </div>

                        </form >

                    </div>


                </div>
            </div>)}
        </>

    )
}
// form