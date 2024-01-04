import { useState } from "react";
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { cityDistricts } from "../../../../../assect/workToken/WorkToken";
import axios from "axios";
import { getToken, postData, removeDataInCart } from "../../../../../assect/workToken/WorkToken";
export default function Paymend_cart({ user, listProduct }) {
    // console.log(user);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCommunes, setSelectedCommunes] = useState('')
    const [selectedPayment, setSelectedPayment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [districts, setDistricts] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [addRess, setAddress] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [totalPrice, setTotalPrice] = useState(0)
    function getTime() {
        setCurrentTime(new Date());
        const formattedDate = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
        return formattedDate
    }

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
    const handleInputChangeAddress = (event) => {
        const value = event.target.value;
        setAddress(value);
        // setIsValid(validatePhoneNumber(value));
    };
    const handleCommunesChange = (event) => {
        const selectedCommunes = event.target.value;
        setSelectedCommunes(selectedCommunes);
    };



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

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const removeData = (listProduct) => {
        listProduct.map((item) => {
            handleRemove(item)
        })
    }

    async function handleRemove(item) {
        try {
            console.log(item);
            let itemRemove = {
                id_user: user.id,
                id_product: item.id_product,
                size: item.size,
            };
            console.log(itemRemove);
            await removeDataInCart(itemRemove);
            // await fetchData();
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (event) => {

        if (listProduct.length === 0) {
            alert('Không có gì trong giỏ')
        }
        else {

            event.preventDefault();
            let address = `${addRess}/${selectedCommunes}/${selectedDistrict}/${selectedLocation}`
            const newList =
                listProduct ? listProduct.map((item) => {
                    // console.log('halo');
                    return { "id_product": item.id_product, "id_size": item.size, "quantity": item.quantity }

                }) : null


            // const totalPrice = listProduct.reduce((sum, item) => sum + item.price, 0);
            let Data = ItemProduct({ newList, totalPrice, getTime, address, phoneNumber, selectedPayment });
            console.log(Data);
            postData(Data)
            removeData(listProduct)
            window.location.reload();

        }

    };

    return (
        <div class=" summary col-md-5">
            <div><h5><b>Điền thông tin để mua hàng</b></h5></div>
            <form onSubmit={handleSubmit}>
                <div className="location">

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
                        handleInputChange={handleInputChange} />
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
                <Price_show listProduct={listProduct} setTotalPrice={setTotalPrice} />
                <button type='submit' class="button_submit">Đặt hàng</button>
            </form >
            <Link to={'/'} class="back-to-shop" href="#"> <div ><FontAwesomeIcon icon={faArrowLeftLong} /><span class="">Back to shop</span></div></Link>

        </div >
    )

}

function ItemProduct({ newList, totalPrice, getTime, address, phoneNumber, selectedPayment }) {
    return {
        "id_user": getToken(),
        "order_date": getTime(),
        "address": address,
        "phoneNumber": phoneNumber,
        "totalPrice": totalPrice,
        "payment": selectedPayment,
        "status": "Đã đặt hàng",
        "products": newList
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


function Price_show({ listProduct, setTotalPrice }) {
    console.log(listProduct);
    let totalAmount = 0;
    let totalDiscount = 0;

    if (listProduct) {
        listProduct.forEach((product) => {
            const discountedPrice = product.price * (1 - product.discount / 100);
            totalAmount += product.price;
            totalDiscount += product.price - discountedPrice;
        });
        setTotalPrice(totalAmount - totalDiscount)
    }
    totalAmount = Math.round(totalAmount);
    totalDiscount = Math.round(totalDiscount);

    return (
        <div className="price_show text-start">
            <div class="row boder_bot" >
                <div class="col">Giá trị gốc</div>
                <div class="col text-end"><span>{listProduct ? totalAmount : 0} vnđ</span></div>
            </div>
            <div class="row boder_bot" >
                <div class="col">Tổng giảm giá</div>
                <div class="col text-end"><span>{listProduct ? totalDiscount : 0} vnđ</span></div>
            </div>
            <div class="row " >
                <div class="col">Cái giá phải trả</div>
                <div class="col text-end"><span>{listProduct ? (totalAmount - totalDiscount) : 0} vnđ</span></div>
            </div>
        </div>
    )
}





