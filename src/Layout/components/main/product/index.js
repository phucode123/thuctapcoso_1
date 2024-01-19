import React from "react";
import { useState, useEffect } from "react";
import Listdiscount from "./discount";
import QuantitySelector from "./Library";
import { useActionData, useParams } from 'react-router-dom';
import axios from "axios";
import { getToken } from "../../../../assect/workToken/WorkToken";
import './product.css'
import BuyProduct from "./buy";
import { CheckError, Checksuccess } from "../../../library/checkSuccess";
import MyComponent from "../../../library/checkSuccess";
import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";

function Product() {
    // const [size, setSize] = useState(null)
    const [optionChange, setOptionChange] = useState(null);
    // const [quantitySize, setQuantitySize] = useState(0)
    const [optionsize, setOptionSize] = useState(null)
    const [product, setProduct] = useState({});
    const [isShowBuy, setIsShowBuy] = useState(false)
    const { productId } = useParams();

    const [status, setStatus] = useState()
    const [isShow, setIsshow] = useState(false)
    const [title, setTitle] = useState('')
    const [messenger, setMessenger] = useState('')


    const [quantity, setQuantity] = useState(1);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/get-1-product?id=${productId}`);
            setProduct(response.data.data[0])
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchProduct()
    }, [productId])

    // console.log(product);

    const handlerSubmittoCart = async () => {
        if (optionsize == null || quantity < 1) {
            if (optionsize == null)
                alert('vui lòng chọn size bạn muốn')
            else
                alert('không thể thêm hàng vào giỏ khi số lượng = 0')
        }
        else {
            const tokenCurren = getToken();
            // console.log(tokenCurren, 'id giay:', product.id, 'size:', optionChange);
            let data = {
                token: tokenCurren,
                id_product: product.id,
                size: optionsize.size,
                id_size: optionsize.id_size,
                quantity: quantity
            }
            console.log(data);
            try {
                const response =
                    await axios.post('http://localhost:3001/api/v1/post-product-to-cart', data);
                console.log(response); // In ra dữ liệu phản hồi từ server nếu thành công 

                setStatus(true)
                setIsshow(true)
                // setIsshow(true)
                setTitle('Thành công')
                setMessenger("Thêm vào giỏ thành công")
            } catch (error) {
                // setStatus(false)
                // // setIsshow(true)
                // setIsshow(true)
                // setTitle('Không thành công')
                // setMessenger(error)
                console.error(error);
            }
        }
    };
    // console.log(optionChange);

    // handlerSubmittoCart();

    return (
        <>
            <div className='body-container'>
                <div className='container-banner'>
                    <div className='container-product-media dp_flex'>
                        <div className="product-view-image-product">
                            <img id="image" class="fhs-p-img lazyloaded"
                                src={product.image}
                                alt="selectedImage" title="" />
                        </div>
                    </div>
                    <div className='container-product-detail text-start'>
                        <h1>{product.name}</h1>
                        <div className="product-view-sa">
                            <div className="product-view-sa_one dp_flex">
                                <div className="product-view-sa_one_nxb ">
                                    <span>Nhãn hiệu: </span><span className="local">{product.brand}</span>
                                </div>
                            </div>
                        </div>
                        <div className="product_price">
                            <div className="product-details-price">
                                <div className="special_price">
                                    <span className="price">{Math.round(product.price * (1 - (product.discount / 100)))} đ</span>
                                </div>
                                <div className="old_price">
                                    <span className="price-label">{product.price}</span>
                                    <span className="discount-percent">-{(product.discount)}%</span>
                                </div>
                            </div>
                            <div className="price-block-share"></div>
                        </div>
                        <div>
                            <div><p2 className='select_size'>Chọn size giày</p2></div>
                            <div className="rate_score">
                                <Options options_test={product.size} productSelect={product} setOptionChange={setOptionChange} optionChange={optionChange} optionsize={optionsize} setOptionSize={setOptionSize} />
                            </div>
                            {optionsize ? <div><p3 className='quantity_size'>Còn lại: <span>{optionsize.quantity}</span></p3></div> : ''}
                        </div>
                        <div className="expected_delivery">
                            <div className="expected_delivery_address">
                                <span>Thời gian giao hàng: </span><span>Giao hàng đến <a className="view_more">Thay đổi</a></span>
                            </div>
                            <div className="expected_return_product_policy">
                                <span>Chính sách đổi trả: </span><span>Đổi trả trong 30 ngày <a className="view_more">Xem thêm</a></span>
                            </div>
                        </div>
                        <div class=" girdslider-button d-flex flex-row ">
                            <div class="d-flex flex-row r4 align-items-center">
                                {/* <QuantitySelect/> */}
                                <div className="container_add_cart">

                                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

                                    <div class="girdslider-menu-item ml-4 " onClick={handlerSubmittoCart}>
                                        <a href="#">Thêm vào giỏ</a>
                                    </div>


                                </div>
                                <div class="girdslider-menu-item" onClick={() => {
                                    if (optionChange) {
                                        setIsShowBuy(true)
                                    }
                                }}><a>Đặt mua ngay</a></div>


                            </div>
                        </div>

                        {/* </div> */}
                        <MyComponent title={title} messenger={messenger} status={status} setIsshow={setIsshow} isShow={isShow}/>
                        <BuyProduct product={product} size={optionChange} quan={quantity} optionsize={optionsize} isShow={isShowBuy} setIsShowBuy={setIsShowBuy} />
                    </div>
                </div >
                {/* <Listdiscount Author_name={product.author} /> */}
            </div >
        </>
    )
}


const Options = ({ options_test, productSelect, setQuantitySize, setOptionChange, optionChange, optionsize, setOptionSize }) => {
    const options_tes = options_test ? options_test.split(',') : []
    const options = [
        { id: 1, size: '38' },
        { id: 2, size: '39' },
        { id: 3, size: '40' },
        { id: 4, size: '41' },
        { id: 5, size: '42' },
        { id: 6, size: '43' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
        if (!options_tes.includes(option.size)) {
            return; // Không làm gì nếu lựa chọn đã bị vô hiệu hóa
        }

        if (selectedOption === option.id) {
            // Nếu lựa chọn đã được chọn và được nhấp lại, hủy chọn
            console.log('Selected Product ID:', productSelect.id);
            console.log('Selected Size:', option.size);
            setOptionChange(null)
            setSelectedOption(null);
        } else {
            // Nếu lựa chọn chưa được chọn hoặc được chọn khác, chọn lại
            console.log('Selected Product ID:', productSelect.id);
            console.log('Selected Size:', parseInt(option.size));
            setOptionChange(parseInt(option.size))
            setSelectedOption(option.id);
        }
    };
    let value = GetQuatity(productSelect, optionChange)
    // console.log(value);
    // setQuantitySize(value.quantity)
    setOptionSize(value)
    return (
        <>
            {options.map((option, index) => (
                <div
                    key={option.id}
                    className={`option-item ${option.id === selectedOption ? 'selected' : ''} ${options_tes.includes(option.size) ? '' : 'disabled'}`}
                    onClick={() => handleOptionClick(option)}
                >
                    {option.size}
                </div>
            ))}
        </>
    );
};

function GetQuatity(productSelect, optionChange) {
    const [value, setValue] = useState()
    const getQuatity = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/get-quantity?id=${productSelect.id}&size=${parseInt(optionChange)}`);
            // console.log(response.data.data[0].quantity);
            console.log(response.data.data[0]);
            setValue(response.data.data[0])
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getQuatity()
    }, [optionChange])
    return value
}
export default Product
