import React from "react";
import './cartPage.css'

import { useState } from "react";

import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const cityDistricts = {
    hanoi: {
        'Huyện Phú Xuyên': ['Thị trấn Phú Minh', 'Xã Nam Tiến', 'Thị trấn Phú Xuyên'],
        'Quận Hà Đông': ['Phường Văn Quán', 'Xã Tấn Triều', 'Xã 6'],
        'Quận Hoàng Mike': ['Xã 7', 'Xã 8', 'Xã 9']
    },
    hcm: {
        'Quận X': ['Xã 10', 'Xã 11', 'Xã 12'],
        'Quận Y': ['Xã 13', 'Xã 14', 'Xã 15'],
        'Quận Z': ['Xã 16', 'Xã 17', 'Xã 18']
    }
    // Thêm các thành phố, huyện và danh sách xã tương ứng ở đây
};
export default function CartPage() {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // test vị trí



    return (

        <div class="col-md-8 card">
            <div class="row father">
                <div class="cart">


                    <div class="title">
                        <div class=" header_cart_title">
                            <h4 className="Heading_title_cart">Shopping Cart</h4>
                            {/* <div class="">3 items</div> */}
                        </div>
                    </div>


                    <div class="container_product_item row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2">
                                <img class="img_product" src="https://i.imgur.com/pHQ3xT3.jpg" />
                            </div>
                            <div class="col">

                                <div class="row">Teen sản phẩm của bạn</div>
                            </div>
                            <div class="col minus_plus">
                                <a href="#" className="minus" onClick={decreaseQuantity}>-</a><a href="#" class="border">{quantity}</a><a onClick={increaseQuantity} className="plus" href="#">+</a>
                            </div>
                            <div class="col price_close"> <span className="price">100000 VNĐ</span> <span class="close">&#10005;</span></div>
                        </div>
                    </div>


                </div>


                <Paymend_cart />



            </div>


        </div>

    )
}

function Paymend_cart() {
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

    return (
        <div class=" summary col-md-4">
            <div><h5><b>Summary</b></h5></div>


            {/* <div class="row">
                <div class="col">ITEMS 3</div>
            <div class="col text-right">&euro; 132.00</div>
            </div> */}
            <form>
                <p>Địa chỉ</p>
                <select value={selectedLocation} onChange={handleLocationChange}>
                    <option disabled value="">Chọn vị trí</option>
                    {Object.keys(cityDistricts).map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>

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

                <div className="location_focus">
                    <p>Điền số nhà/ngõ/...</p>
                    <input type='text' placeholder="Điền thêm thông tin địa chỉ cụ thể.." />
                </div>

                <div className={`phone_number_input ${!isValid && isTouched ? 'error' : ''}`}>
                    <p>Điền số điện thoại nhận hàng</p>
                    <input
                        id="phone"
                        placeholder="Enter phone number.."
                        value={phoneNumber}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                    {!isValid && phoneNumber && isTouched && <p className="error_message">Sai định dạng số điện thoại</p>}
                </div>

            </form>
            <div className="text-start">
                <div class="row" >
                    <div class="col">Giá trị gốc</div>
                    <div class="col text-end"><span>100000đ</span></div>
                </div>
                <div class="row" >
                    <div class="col">Tổng giảm giá</div>
                    <div class="col text-end"><span>20000đ</span></div>
                </div>
                <div class="row" >
                    <div class="col">Cái giá phải trả</div>
                    <div class="col text-end"><span>80000đ</span></div>
                </div>
            </div>
            <button class="btn button_pay">Đặt hàng</button>
            <a class="back-to-shop" href="#"> <div ><FontAwesomeIcon icon={faArrowLeftLong} /><span class="">Back to shop</span></div></a>

        </div>
    )

}