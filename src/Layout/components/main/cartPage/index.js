import React from "react";
import './cartPage.css'

import { useState } from "react";
import Paymend_cart from "./select_option";
import ListProduct from "./listItem";



export default function CartPage() {
    const [listProduct, setListProduct] = useState(null);
    const user = JSON.parse(window.localStorage.getItem('user'));
    console.log();
    // const dataObject = JSON.parse(dataString);

    return (

        <div class=" card">
            <div class="row father">
                <ListProduct  user = {user} setListProduct= {setListProduct}/>
                <Paymend_cart user={user} listProduct={listProduct}/>
            </div>
        </div>

    )
}

