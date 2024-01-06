
import React, { useState } from "react";
export default function QuantitySelector({quantity,setQuantity}) {

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
        else{
            setQuantity(quantity)
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // const updateQuantity = (event) => {
    //     const value = parseInt(event.target.value);
    //     if (!isNaN(value)) {
    //         setQuantity(value);
    //     }
    // };

    return (
        <>
            <div className="Quan" ><input value={quantity} ></input></div>
            <div className='selectQuan'>
                <a onClick={increaseQuantity} href="#" className="plus mb-10">
                    +
                </a>
                <a onClick={decreaseQuantity} href="#" className="minus mt-2" >
                    -
                </a>

            </div>
            {/* <div>
                <button onClick={decreaseQuantity}>-</button>
                <input type="number" value={quantity} min={0} onChange={updateQuantity} />
                <button onClick={increaseQuantity}>+</button>
            </div>
            <p>Số lượng: {quantity}</p> */}
        </>
    );
}