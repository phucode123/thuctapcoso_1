import React from "react";
import { Route, Routes } from "react-router-dom";
import Bill from "./Bill";
import ChangePass from "./ChangePass";
import Detail_profile from "./detail_profile";
export default function RouterBody() {
    return (
        
            <Routes>
                <Route path="/billhistory" element={<Bill />}/> 
                <Route path='/profileDetail' element={<Detail_profile />}/> 
                <Route path='/ChangePass' element={<ChangePass />}/> 
            </Routes>
        
    )
}