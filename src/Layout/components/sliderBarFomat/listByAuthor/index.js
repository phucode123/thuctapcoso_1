import React, { useState } from 'react';
import fakeAPI from '../../../../assect/fakeAPI';
import styles from './listByAuthor.module.scss';
import classNames from 'classnames/bind';
import SliderBar from '..';
const cx = classNames.bind(styles);

 function ListByAuthor({Author_name}) {

    let products = fakeAPI.ListBooks
    console.log()
    const auThor = function ProductsByAuthor(products, nameAuthor) {
        return products.filter(item => {
            if (item.local.toLowerCase() === nameAuthor.toLowerCase()) {
                return item
            }
        })
    }

    const Author = [
        {
            id: 0,
            title: 'adidas'
        },
        {
            id: 1,
            title: 'nike'
        }

    ]

    Author.map((Item)=>{
        Item.slider = auThor(products, Item.title)
    })
    return(
        <>
        <SliderBar tabs={Author} nameHeader = {'Nhãn hàng được ưa thích'}/>
        </>
    )

}
export default ListByAuthor