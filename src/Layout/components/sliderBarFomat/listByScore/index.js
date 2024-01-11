import React, { useState, useEffect } from 'react';
// import fakeAPI from '../../../../assect/workToken';
import SliderBar from '..';
import axios from 'axios';
function ListByScore() {

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

    // let shoesData = fakeAPI.ListBooks
    const sortedbyScore = function sortProductsByScoreDescending(shoesData) {
        const sortedProducts = [...shoesData].sort((a, b) => b.score - a.score);
        return sortedProducts
    }
    const sortedbySale = function sortProductsBySaleDescending(shoesData) {
        const sortedProducts = [...shoesData].sort((a, b) => b.discount - a.discount);
        return sortedProducts
    }

    const Sorted = [
        {
            id: 0,
            title: 'Đang được ưa chuộng',
            slider: sortedbyScore(shoesData)
        },
        {
            id: 1,
            title: 'Giảm giá sốc!!',
            slider: sortedbySale(shoesData)
        }

    ]
    return (
        <>
            <SliderBar tabs={Sorted} nameHeader={'Xu hướng mua sắm'} />
        </>
    )

}
export default ListByScore