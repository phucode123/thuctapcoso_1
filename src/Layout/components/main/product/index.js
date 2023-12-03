import React from "react";
import { useState, useEffect } from "react";
// import styles from './product.module.scss'

// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);
import SliderBar from "../../sliderBarFomat";
// import listByAuthorr from "../../sliderBarFomat/listByAuthor";
import IfYouCare from "../../sliderBarFomat/listByAuthor";
import Listdiscount from "./discount";
import fakeAPI from "../../../../assect/fakeAPI";
import { useParams } from 'react-router-dom';
import './product.css'
import RatingBar from "../../../library/product/rating";

function Product() {
    let { productId } = useParams();
    // console.log(fakeAPI.ListBooks[0].id)
    const selectedProduct = fakeAPI.ListBooks.find(item => {
        if (item.id == productId) {
            // console.log(item)
            // setSelectedImage(item.image)
            return item
        }
    });
    const [selectedImage, setSelectedImage] = useState(selectedProduct.image);

    useEffect(() => {

        setSelectedImage(selectedProduct.image);
      }, [selectedProduct]); 

    const images = [
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
        'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
        'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
        'https://th.bing.com/th/id/OIP.HU42KXcmKotDvfb_WgNmWAHaEo?rs=1&pid=ImgDetMain',
        'https://i0.wp.com/wallpup.com/wp-content/uploads/2013/03/Doraemon.jpg?w=1024'
        // Thêm các ảnh khác vào đây
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };



    const products = fakeAPI.ListBooks
    const auThor = function ProductsByAuthor(products, nameAuthor) {
        return products.filter(item => {
            if (item.author === nameAuthor) {

                return item
            }
        })
    }
    let filteredProducts = [];

    filteredProducts = auThor(products, selectedProduct.author);

    return (
        <>
            <div className='body-container'>
                {/* d-flex justify-content-center align-items-center mt-5 wrapper_form card p-5*/}

                <div className='container-banner'>
                    <div className='container-product-media dp_flex fl-2'>
                        <div className="product-view-thumbnail">
                            {images.map((image, index) => (
                                <div key={index} onClick={() => handleImageClick(image)}>
                                    <img src={image} ></img>
                                </div>

                            ))}


                        </div>
                        <div className="product-view-image-product">
                            <img id="image" class="fhs-p-img lazyloaded"
                                src={selectedImage}

                                alt="selectedImage" title="" />
                        </div>
                    </div>

                    <div className='container-product-detail text-start fl-3'>

                        <h1>{selectedProduct.name}</h1>
                        <div className="product-view-sa">
                            <div className="product-view-sa_one dp_flex">

                                <div className="product-view-sa_one_nxb ">
                                    <span>Nhà xuất bản: </span><span>{selectedProduct.author}</span>
                                </div>
                                <div className="product-view-author"><span>Tác Giả: </span><span>Lương Sơn Bạc</span>
                                </div>

                            </div>
                        </div>
                        <div className="rate_score">
                            {/* <RatingBar rating={selectedProduct.score}/> */}
                        </div>
                        <div className="product_price">
                            <div className="product-details-price">
                                <div className="special_price">
                                    <span className="price">{selectedProduct.price * (1 - (selectedProduct.sale / 100))} đ</span>
                                </div>
                                <div className="old_price">
                                    <span className="price-label">{selectedProduct.price}</span>
                                    <span className="discount-percent">-{(selectedProduct.sale)}%</span>
                                </div>
                            </div>
                            <div className="price-block-share"></div>
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

                                <div class="girdslider-menu-item ml-4 "><a href="#">ADD TO CART</a></div>
                                <div class="girdslider-menu-item"><a href="#">BUY NOW</a></div>
                            </div>
                        </div>
                    </div>





                </div>



                <Listdiscount Author_name={selectedProduct.author} />

                <IfYouCare Author_name={selectedProduct.author} />




            </div>
        </>
    )
}

export default Product
