import React from "react";
import './cartPage.css'

import { useState } from "react";
import Paymend_cart from "./select_option";
import ListProduct from "./listItem";



export default function CartPage() {
    const [listProduct, setListProduct] = useState(null);
    const user = window.localStorage.getItem('user');

    // console.log(user);

    return (

        <div class=" card">
            <div class="row father">
                <ListProduct setListProduct= {setListProduct}/>
                <Paymend_cart user = {user} listProduct={listProduct}/>
            </div>
        </div>

    )
}

