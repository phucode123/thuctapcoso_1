import React from 'react';
import styles from './item_product.module.scss';
import RatingBar from '../rating';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);


function Item_product({ product , limit}) {
    let test = limit? limit:'col-xl-3'
    return (

        <div className={cx( "col-xl-3")}>
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
                        <h4 className={cx("product-price")}>${Math.round(product.price * (1 - product.discount / 100))}</h4>


                        <RatingBar rating={product.score} />
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Item_product;