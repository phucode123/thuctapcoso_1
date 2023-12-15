import './ListProduct.css'
import React from 'react'

import Item_product from '../../../../library/product/item_product'

function ListProduct({ ListProduct, quality }) {


    let limit = 1
    const ListAll = ListProduct

    return (

        <>
            <div class="listing-section">
                {
                    ListAll.map((product) => {
                        // console.log(product.id)
                        if (limit <= quality) {
                            limit++
                            return (
                                <Item_product product={product} />
                            )
                        }
                    })

                }

            </div>
        </>
    )
}
export default ListProduct