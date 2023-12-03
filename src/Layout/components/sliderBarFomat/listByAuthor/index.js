import React, { useState } from 'react';

import fakeAPI from '../../../../assect/fakeAPI';
import styles from './listByAuthor.module.scss';
import classNames from 'classnames/bind';
import Item_product from '../../../library/product/item_product';
const cx = classNames.bind(styles);

function IfYouCare({ Author_name, limit_index }) {
    // var limit = 1
    let products = fakeAPI.ListBooks
    var temp = 1, limit = 1
    console.log()

    var value_limitt = limit_index ? limit_index : 4
    let filteredProducts = []

    const auThor = function ProductsByAuthor(products, nameAuthor) {
        return products.filter(item => {
            if (item.author === nameAuthor) {

                return item
            }
        })
    }

    filteredProducts = auThor(products, Author_name);

    return (


        <div>
            <div className={cx('wrapper')}>
                <div className={cx("tabslider_header")}>
                    <div className={cx("tabslider_title")}>
                        <div className={cx("title_icon")}>
                            <img src='https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_dealhot.png'>
                            </img>
                        </div>
                        <span>Có thể bạn cũng quan tâm(cùng tác giả)</span>
                    </div>

                </div>
                <div className={cx("container_tab")}>
                    <div className={cx("row")}>
                        {(filteredProducts).map((product) => {
                            // { console.log(product) }
                            if (limit <= value_limitt) {
                                limit++
                                return <Item_product product={product} />
                            }
                        }
                        )}
                    </div>
                    <li className={cx("girdslider-menu-item", "center")} >
                        <a >XEM THÊM</a>
                    </li>
                </div>

            </div>
            
        </div>

    )
}

export default IfYouCare