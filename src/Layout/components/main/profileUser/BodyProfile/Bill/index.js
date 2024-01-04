import React, { useState, useEffect } from "react";
import './Bill.css'
import axios from "axios";
import { getToken } from "../../../../../../assect/workToken/WorkToken";


export default function Bill() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    const [User, setUser] = useState('');

    // console.log(getToken())

    useEffect(() => {
        const fetchData = async () => {

            try {
                const testUser = JSON.parse(window.localStorage.getItem('user'));
                const response = await axios.get(`https://ttcs-delta.vercel.app/api/v1/get-all-order?id_user=${testUser.id}`);
                setOrders(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleViewDetails = async (order) => {
        try {
            console.log(order.id);
            const response = await axios.get(`https://ttcs-delta.vercel.app/api/v1/get-detail-order?id_order=${order.id}`);
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
            <h2>Orders Table</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Order Date</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.id_user}</td>
                            <td>{order.order_date}</td>
                            <td>{order.address}</td>
                            <td>{order.phone_number}</td>
                            <td>{order.total_price}</td>
                            <td>{order.payment}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleViewDetails(order)}>View Details</button>
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
                        <h3>Order Details</h3>
                        <p>ID: {selectedOrder.id}</p>
                        <p>User ID: {selectedOrder.id_user}</p>
                        <p>Order Date: {selectedOrder.order_date}</p>
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

    // return (
    //     <div className="container_bill">

    //     </div>
    // )
