import React from "react";
import './cartPage.css'

import { useState } from "react";
import Paymend_cart from "./select_option";
import ListProduct from "./listItem";



export default function CartPage() {


    // test vị trí



    return (

        <div class=" card">
            <div class="row father">
                <ListProduct />
                <Paymend_cart />
            </div>


        </div>

    )
}

