
import React
    from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Odercontrol() {
    useEffect(() => {
        // Gọi API để lấy dữ liệu
        axios
            .get('http://localhost:3001/api/v1/get-all-order')
            .then((response) => {
                const data = response.data.data;
                console.log(data);
                // Tạo một đối tượng Map để nhóm dữ liệu theo năm và tháng và tính tổng giá trị đơn hàng

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (<>
cá con
    </>)
}