import React, { useState } from 'react';
import fakeAPI from '../../../../assect/fakeAPI';
import SliderBar from '..';
function ListByScore() {
    let products = fakeAPI.ListBooks
    const sortedbyScore = function sortProductsByScoreDescending(products) {
        const sortedProducts = [...products].sort((a, b) => b.score - a.score);
        return sortedProducts
    }
    const sortedbySale = function sortProductsBySaleDescending(products) {
        const sortedProducts = [...products].sort((a, b) => b.sale - a.sale);
        return sortedProducts
    }

    const Sorted = [
        {
            id: 0,
            title: 'Đang được ưa chuộng',
            slider: sortedbyScore(products)
        },
        {
            id: 1,
            title: 'Giảm giá sốc!!',
            slider: sortedbySale(products)
        }

    ]
    return (
        <>
            <SliderBar  tabs={Sorted}  nameHeader = {'Xu hướng mua sắm'}/>
        </>
    )

}
export default ListByScore