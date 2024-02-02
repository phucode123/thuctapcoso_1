import React, { useState } from 'react';
import styles from './item_product.module.scss';
import RatingBar from '../rating';
import classNames from 'classnames/bind';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);


function Item_product({ product, limit }) {
    let test = limit ? limit : 'col-xl-3'
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <div className={cx('col-xl-3')}>
            <Link className={cx('custom-link')} to={`/san-pham/${product.id}`}>
                <div
                    id={product.id}
                    className={cx('single-product')}

                >
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={cx('image_product', { 'image-flip': isFlipped })}
                        style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div className={cx('part-1')}></div>
                    <div className={cx('part-2')}>
                        <h3 className={cx('product-title')}>{product.name}</h3>
                        <h4 className={cx('product-price')}>
                            {Math.round(product.price * (1 - product.discount / 100)).toLocaleString()}đ
                        </h4>
                        <h4 className={cx('product-old-price')}>{product.price.toLocaleString()}đ</h4>
                    </div>
                </div>
                <div className={cx("product-item__sale-off")}>
                      <span className={cx("product-item__sale-off__percent")}>
                        {product.discount}%
                      </span>
                      <span className={cx("product-item__sale-off__label")}>
                        Giảm
                      </span>
                    </div>
            </Link>
        </div>
    );
}

export default Item_product;