import { useState } from "react";
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { cityDistricts } from "../../../../../assect/workToken/WorkToken";

export default function Paymend_cart() {

    
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


    // thanh toan
    const [selectedPayment, setSelectedPayment] = useState('');

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Hình thức thanh toán: ${selectedPayment}`);
    };

    return (
        <div class=" summary col-md-5">
            <div><h5><b>Điền thông tin để mua hàng</b></h5></div>
            <form className="location">
                <p>Địa chỉ</p>
                <select value={selectedLocation} onChange={handleLocationChange}>
                    <option disabled value="">Chọn vị trí</option>
                    {Object.keys(cityDistricts).map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>

                <div className="location_phone">
                    <select value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedLocation}>
                        <option disabled value="">Chọn huyện</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>

                    <select disabled={!selectedDistrict}>
                        <option disabled value="">Chọn xã</option>
                        {communes.map((commune, index) => (
                            <option key={index} value={commune}>{commune}</option>
                        ))}
                    </select>
                </div>

                <div className="location_phone">
                    <div className="location_focus">
                        <p>Điền số nhà/ngõ/...</p>
                        <input className="input_cartPage" type='text' placeholder="Điền thêm thông tin địa chỉ cụ thể.." />
                    </div>

                    <div className={`phone_number_input ${!isValid && isTouched ? 'error' : ''}`}>

                        <p>Điền số điện thoại nhận hàng</p>
                        <input
                            id="phone" className="input_cartPage"
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
                    <select id="payment" value={selectedPayment} onChange={handlePaymentChange}>
                        <option value="">-- Chọn hình thức --</option>
                        <option value="credit_card">Thanh toán khi nhận hàng</option>
                        {/* <option value="paypal">Thanh toán online(MOMO)</option> */}
                        <option value="bank_transfer">Chuyển khoản ngân hàng</option>
                    </select>
                    {/* <button type="submit">Submit</button> */}
                </form>
                <Price_show />
            </form >

            <button type='submit' class="button_submit">Đặt hàng</button>

            <Link to={'/'} class="back-to-shop" href="#"> <div ><FontAwesomeIcon icon={faArrowLeftLong} /><span class="">Back to shop</span></div></Link>

        </div >
    )

}


function Price_show({id}) {
    return (
        <div className="price_show text-start">
            <div class="row boder_bot" >
                <div class="col">Giá trị gốc</div>
                <div class="col text-end"><span>100000đ</span></div>
            </div>
            <div class="row boder_bot" >
                <div class="col">Tổng giảm giá</div>
                <div class="col text-end"><span>20000đ</span></div>
            </div>
            <div class="row " >
                <div class="col">Cái giá phải trả</div>
                <div class="col text-end"><span>80000đ</span></div>
            </div>
        </div>
    )
}





