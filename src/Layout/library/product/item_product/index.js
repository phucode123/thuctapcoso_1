import React from 'react';
import styles from './item_product.module.scss';
import RatingBar from '../rating';
import classNames from 'classnames/bind';
// import Background from 'hero-slider/dist/components/Slide/Background';
// import Product from '../../../components/main/product';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);


function Item_product({ product }) {

    // console.log("hahahahahahha "+product.name)

    return (

        <div className={cx("col-md-6", "col-lg-4", "col-xl-3")}>
            <Link className={cx('custom-link')} to={`/san-pham/${product.id}`}>

                <div id={product.id} className={cx("single-product")}>
                    <div className={cx("image_product")} style={{ backgroundImage: `url(${product.image})` }}>

                    </div>
                    <div className={cx("part-1")}>

                        <ul>
                            <li><a href="#"><i className={cx("fas", " fa-shopping-cart")}></i></a></li>
                            <li><a href="#"><i className={cx("fas ", "fa-heart")}></i></a></li>
                            <li><a href="#"><i className={cx("fas ", "fa-plus")}></i></a></li>
                            <li><a href="#"><i className={cx("fas ", "fa-expand")}></i></a></li>
                        </ul>
                    </div>
                    <div className={cx("part-2")}>
                        <h3 className={cx("product-title")}>{product.name}</h3>
                        <h4 className={cx("product-old-price")}>${product.price}</h4>
                        <h4 className={cx("product-price")}>${product.price * (1-product.sale / 100)}</h4>

                        {/* <h2>Chất lượng sản phẩm</h2> */}
                        <RatingBar rating={product.score} />
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Item_product;