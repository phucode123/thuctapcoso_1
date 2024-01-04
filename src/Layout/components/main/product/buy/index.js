import { useState } from 'react'
import './buy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paymend_cart from '../../cartPage/select_option';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { cityDistricts, getToken , postData} from '../../../../../assect/workToken/WorkToken';
import { FaGratipay } from 'react-icons/fa';
import axios from 'axios';

export default function BuyProduct({ product, size, isShow, setIsShowBuy }) {
    console.log(size);
    const [quantity, setQuantity] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCommunes, setSelectedCommunes] = useState('')
    const [districts, setDistricts] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addRess, setAddress] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    function getTime() {
        setCurrentTime(new Date());
        const formattedDate = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
        return formattedDate
    }
    const validatePhoneNumber = () => {
        const regex = /^(0|\+84|84|09)\d{8,9}$/;
        return regex.test(phoneNumber);
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
        setIsValid(validatePhoneNumber(value));
    };
    const handleInputChangeAddress = (event) => {
        const value = event.target.value;
        setAddress(value);
        // setIsValid(validatePhoneNumber(value));
    };
    const handleInputBlur = () => {
        setIsTouched(true);
    };
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
        // console.log(selectedDistrict);
        // Cập nhật danh sách xã tương ứng với lựa chọn huyện
        const selectedCommunes = cityDistricts[selectedLocation][selectedDistrict] || [];
        setCommunes(selectedCommunes);
    };
    const handleCommunesChange = (event) => {
        const selectedCommunes = event.target.value;
        setSelectedCommunes(selectedCommunes);
    };
    const handlePaymentChange = (event) => {
        const paymentMethod = event.target.value;
        setSelectedPayment(paymentMethod);
        // Show or hide buttons based on selected payment method
        if (paymentMethod === 'credit_card') {
            // setShowPlaceOrderButton(true);
            // setShowPayButton(false);
        } else if (paymentMethod === 'bank_transfer') {
            // setShowPlaceOrderButton(false);
            // setShowPayButton(true);
        } else {
            // setShowPlaceOrderButton(false);
            // setShowPayButton(false);
        }
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    function hideForm() {
        isShow = isShow
        setIsShowBuy(false)
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }
    // const postData = async (data) => {
    //     try {
    //         const response =
    //             await axios.post('https://ttcs-duongxuannhan2002s-projects.vercel.app/api/v1/post-order', data);
    //         console.log(response); // In ra dữ liệu phản hồi từ server nếu thành công
    //         // setProduct(response.data.data[0])
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('token', getToken());
        let address = `${addRess}/${selectedCommunes}/${selectedDistrict}/${selectedLocation}`
        console.log('Số lượng:', quantity);
        console.log('Hình thức thanh toán:', selectedPayment);

        let Data = ItemProduct({ product, size, getTime, address, phoneNumber, selectedPayment });
        console.log(Data);
        // console.log(Data);
        postData(Data)




        // Tiếp tục xử lý logic của bạn sau khi submit
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
                        <form onSubmit={handleSubmit}>
                            <SelectAddress
                                selectedLocation={selectedLocation}
                                selectedDistrict={selectedDistrict}
                                selectedCommunes={selectedCommunes}
                                districts={districts}
                                communes={communes}
                                handleLocationChange={handleLocationChange}
                                handleDistrictChange={handleDistrictChange}
                                handleCommunesChange={handleCommunesChange}
                                phoneNumber={phoneNumber}
                                addRess={addRess}
                                handleInputChangeAddress={handleInputChangeAddress}
                                isValid={isValid}
                                isTouched={isTouched}
                                handleInputChange={handleInputChange}
                                handleInputblur={handleInputBlur}
                            />
                            <div>
                                <span>Chọn số lượng bạn muốn</span>
                                <div className='decreaseAndincrease'>
                                    <a href="#" className="minus" onClick={decreaseQuantity}>
                                        -
                                    </a>
                                    <a href="#" className="border">
                                        {quantity}
                                    </a>
                                    <a href="#" className="plus" onClick={increaseQuantity}>
                                        +
                                    </a>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="payment">Chọn hình thức thanh toán:</label>
                                <select className='custom_default' id="payment" value={selectedPayment} onChange={handlePaymentChange}>
                                    <option value="">-- Chọn hình thức --</option>
                                    <option value="credit_card">Thanh toán khi nhận hàng</option>
                                    <option value="bank_transfer">Chuyển khoản ngân hàng</option>
                                </select>
                            </div>

                            <div>
                                <button type="submit" >
                                    Mua hàng
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>)}
        </>

    )
}

function ItemProduct({ product, size, getTime, address, phoneNumber, selectedPayment }) {

    return {
        "token": getToken(),
        "order_date": getTime(),
        "address": address,
        "phoneNumber": phoneNumber,
        "totalPrice": product.price,
        "payment": selectedPayment,
        "status": "Đã đặt hàng",
        "products": [{ "id_product": product.id, "id_size": size, "quantity": 1 }]
    }
}

function SelectAddress({
    selectedLocation,
    selectedDistrict,
    selectedCommunes,
    districts,
    communes,
    handleLocationChange,
    handleDistrictChange, handleCommunesChange,
    phoneNumber, addRess, handleInputChangeAddress,
    isValid,
    isTouched,
    handleInputChange,
    handleInputBlur
}) {




    return (
        <>
            <div className="location">
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

                    <select className='custom_default' onChange={handleCommunesChange} value={selectedCommunes} disabled={!selectedDistrict}>
                        <option disabled value="">Chọn xã</option>
                        {communes.map((commune, index) => (
                            <option key={index} value={commune}>{commune}</option>
                        ))}
                    </select>
                </div>
                <div className="location_phone">
                    <div className="location_focus">
                        <p>Điền số nhà/ngõ/...</p>
                        <input className="input_cartPage custom_default"
                            type='text'
                            placeholder="Điền thêm thông tin địa chỉ cụ thể.."
                            value={addRess}
                            onChange={handleInputChangeAddress} />
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
            </div >
        </>
    )
}



// id giay, so luong, size, tong gia, dia chi, sdt, hinh thuc thanh toan(bank, cod), thoi gian, id user

// form