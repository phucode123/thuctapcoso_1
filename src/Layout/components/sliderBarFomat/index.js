import React, { useState } from 'react';
import styles from './sliderBar.module.scss';
import classNames from 'classnames/bind';
// import ListBooks from ''
import fakeAPI from '../../../assect/fakeAPI';

import Item_product from '../../library/product/item_product';
const cx = classNames.bind(styles);


function SliderBar({ sliderItem , value_limit}) {
    const products = fakeAPI.ListBooks

     

    // console.log(value_limit)
    var temp = 1, limit = 1

    var value_limitt = value_limit? value_limit: 4

    // console.log("valueeee: " +value_limitt + "valueeee old: " +value_limit)

    const [selectedButton, setSelectedButton] = useState(1); // nút có id = 1 được chọn từ khi bắt đầu.
    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
        // console.log(buttonId)
    };

    const sortedbyScore = function sortProductsByScoreDescending(products) {
        const sortedProducts = [...products].sort((a, b) => b.score - a.score);
        return sortedProducts
    }
    const sortedbySale = function sortProductsBySaleDescending(products) {
        const sortedProducts = [...products].sort((a, b) => b.sale - a.sale);
        // console.log(sortedProducts)

        return sortedProducts
    }

    const Language = function ProductsByAuthor(products, language) {
        return products.filter((item) => {
            if (item.language === language) {
                return item
            }
        })
    }
    const auThor = function ProductsByAuthor(products, nameAuthor) {
        return products.filter(item => {
            if (item.author === nameAuthor) {

                return item
            }
        })
    }
    const renderList = (products) => {

        let filteredProducts = [];
        if (sliderItem.id === 'XH') {
            // console.log('XHHHHHHHHHHHHH')

            if (selectedButton === 1) {
                // console.log('alo')
                filteredProducts = sortedbyScore(products);

            }
            else if (selectedButton === 2) {
                filteredProducts = sortedbySale(products);

            }
        }

        if (sliderItem.id === 'LOCAL') {
            if (selectedButton === 1) {
                filteredProducts = auThor(products, 'PHUTHIEN');

            }
            else if (selectedButton === 2) {
                filteredProducts = auThor(products, 'KIMDONG');

            }

        }

        if (sliderItem.id === 'LANG') {
            if (selectedButton === 1) {
                filteredProducts = Language(products, 'English');

            }
            else if (selectedButton === 2) {
                filteredProducts = Language(products, 'Vietnam');
            }

        }
        if(sliderItem.id ==='ALL'){
            filteredProducts = fakeAPI.ListBooks
            
        }


        // filteredProducts = auThor(products, 'KIMDONG');

        // console.log(filteredProducts)
        return filteredProducts
    }


    //_________________________________________  
    //   const sortedProducts = sortProductsByScoreDescending(products);
    //   console.log(sortedProducts);



    // const temp = 0;
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx("tabslider_header")}>
                    <div className={cx("tabslider_title")}>
                        <div className={cx("title_icon")}>
                            <img src='https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_dealhot.png'>
                            </img>
                        </div>
                        <span>{sliderItem.name}</span>
                    </div>
                    <div className={cx("tab-title")}>
                        <ul>
                            {sliderItem.labels.map((button) => (
                                <li key={button.id} className={cx("girdslider-menu-item", cx(selectedButton === button.id ? 'active' : ''))} onClick={() => handleButtonClick(button.id)}>
                                    {button.label}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div className={cx("container_tab")}>
                    <div className={cx("row")}>
                        {renderList(products).map((product) => {
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

export default SliderBar;