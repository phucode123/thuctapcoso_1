import React, { useState, useEffect } from 'react';
// import fakeAPI from '../../../../assect/workToken';
import styles from './listByAuthor.module.scss';
import classNames from 'classnames/bind';
import SliderBar from '..';
import axios from 'axios';
const cx = classNames.bind(styles);

function ListByAuthor({ Author_name }) {
    const [shoesData, setShoesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/get-shoes')
            .then((response) => {
                const data = response.data;
                setShoesData(data.data);
                setIsLoading(false);
                // console.log(data);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);


   
    const auThor = function ProductsByAuthor(shoesData, nameAuthor) {
        return shoesData.filter(item => {
            
            if (item.brand.toLowerCase() === nameAuthor.toLowerCase()) {
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
        },{
            id: 2,
            title: 'Vans'
        }

    ]

    Author.map((Item) => {
        Item.slider = auThor(shoesData, Item.title)
    })
    // console.log(Author);
    return (
        <>
            <SliderBar tabs={Author} nameHeader={'Nhãn hàng được ưa thích'} />
        </>
    )

}
export default ListByAuthor