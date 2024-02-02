
import React
    from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Odercontrol() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    const [User, setUser] = useState('');

    // console.log(getToken())

    const fetchData = async () => {

        try {
            const testUser = JSON.parse(window.localStorage.getItem('user'));
            console.log(testUser.id);
            console.log(testUser);
            const response = await axios.get(`http://localhost:3001/api/v1/get-all-order`);
            setOrders(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleViewDetails = async (order) => {
        // console.log(orders);
        try {
            console.log('order id:', order.id);
            const response = await axios.get(`http://localhost:3001/api/v1/get-detail-order?id_order=${order.id}`);
            setOrderDetails(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
        setSelectedOrder(order);
    };

    const handleCloseDetails = () => {
        setSelectedOrder(null);
        setOrderDetails(null);
    };

    return (
        <div className="container_bill">
            <h2>Danh sách đơn hàng</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        {/* <th>ID người dùng</th> */}
                        <th>Ngày mua</th>
                        <th>Địa chỉ nhận</th>
                        <th>Số điện thoại</th>
                        <th>Giá trị đơn</th>
                        <th>Hình thức thanh toán</th>
                        <th>Trạng thái</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            {/* <td>{order.id}</td> */}
                            {/* <td>{order.id_user}</td> */}
                            <td>{order.order_date}</td>
                            <td>{order.address}</td>
                            <td>{order.phone_number}</td>
                            <td>{order.total_price}</td>
                            <td>{order.payment}</td>
                            <td>{order.status}</td>
                            <td>
                                <button className="view_detail" onClick={() => handleViewDetails(order)}>Xem</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Chi tiết đơn hàng */}
            <WrapperBill selectedOrder={selectedOrder} orderDetails={orderDetails} handleCloseDetails={handleCloseDetails} />
        </div>
    );
}

function WrapperBill({ selectedOrder, orderDetails, handleCloseDetails }) {
    // console.log(product)

    // function removeForm() {
    //     setIsShow(false);
    // }
    function stopPropagation(event) {
        event.stopPropagation();
    }


    return (
        <>
            {selectedOrder && (
                <div className="wrapper_order">
                    <div className="order-details">
                        <h3>Quản lý đơn hàng</h3>
                        <p>ID: {selectedOrder.id}</p>
                        <p>ID người dùng : {selectedOrder.id_user}</p>
                        <p>Ngày tạo hóa đơn: {selectedOrder.order_date}</p>
                        {/* Hiển thị danh sách sản phẩm */}
                        <div className="product-list">
                            {orderDetails.map((product, index) => (
                                <div key={index} className="product-item">
                                    <p>Name: {product.name}</p>
                                    <p>Size: {product.size}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <img src={product.image} alt={product.name} />{
                                        console.log(product.image)
                                    }
                                </div>
                            ))}
                        </div>
                        <button onClick={handleCloseDetails}>Close</button>
                    </div>
                </div>
            )}

        </>
    )
}