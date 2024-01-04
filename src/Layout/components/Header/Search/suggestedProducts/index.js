import { Children } from 'react';
import './suggested.css'
import {Link} from 'react-router-dom'

export default function SuggestedProduct({ items, children }) {
    // console.log(setIsshow)
    // console.log(items);
    return (
        <div className='Suggested_container'>

            <div className='List_items'>

                {items.map((item) => {
                    return (
                        <Link to={`/san-pham/${item.id}`} className='Item_container'>
                            <div className='Item_container_left'>
                                <div className='form_image'>
                                    <img className='product_image' src={item.image} alt='Product Image' />
                                </div>
                            </div>
                            <div className='Item_container_right'>
                                <h4 className='Item_suggested'>{item.name}</h4>
                            </div>

                        </Link>
                    )
                })}



            </div>
            {children}

        </div>
    )
}