import React from "react";
import './control_product.css'
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import { faPen, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper_edit_item from "../Wrapper_item_edit";
import axios from "axios";
import Loading from "../../../library/Loading";
import AddProduct from "./addProduct";

export default function Table_product() {
    // gọi api
    const [shoesData, setShoesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isShow, setIsshow] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/get-shoes')
            .then((response) => {
                const data = response.data;
                setShoesData(data.data);
                setIsLoading(false);
                // console.log(data);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);


    const rowsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const displayData = shoesData.slice(
        currentPage * rowsPerPage,
        (currentPage + 1) * rowsPerPage
    );
    console.log(shoesData);
    const handlePageChange = (selected) => {
        setCurrentPage(selected.selected);
    };
    const [isEditFormVisible, setEditFormVisible] = useState(false);
    const [Product, setProduct] = useState({});


    // hiển thị form và đóng form
    const handleEditButtonClick = (product) => {
        setProduct(product)
        setEditFormVisible(true);
    };
    const HandlerAddProduct = () => {
        setIsshow(true)
    }
    console.log('Sản phẩm được chọn:', Product)
    function removeForm() {
        setIsshow(false);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }


    // hết hiển thị form và đóng form
    return (
        <div className="test_manin">

            <button onClick={HandlerAddProduct}>Thêm sản phẩm</button>
            <table id="mytable" className="table  mb-0 bg-white">
                <thead className="bg-light">
                    <tr className="header-row">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Local Brand</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    isLoading ? <Loading /> :
                        <tbody>
                            {displayData.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <p className="fw-bold mb-1">{product.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p style={{ fontSize: "15px" }} className="fs-15 fw-normal mb-1">{product.name}</p>
                                    </td>
                                    <td>
                                        <span className="text-black badge badge-success rounded-pill d-inline">{product.quantity > 0 ? 'Còn hàng ' : 'Hết hàng'}</span>
                                    </td>
                                    <td>
                                        <span>

                                            {product.price}
                                        </span>
                                    </td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <div className="">
                                            {product.brand}
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            type="button"
                                            className="button_edit_element btn btn-link btn-sm btn-rounded text-primary"
                                            onClick={() => handleEditButtonClick(product)}
                                        // key = {product.id}
                                        // onClick={() => handleEditButtonClick(product)}

                                        >
                                            {/* <i className="me-1 action-icon bi bi-file-earmark-richtext text-primary"></i> */}
                                            <span style={{ paddingRight: '4px' }}>Preview Form</span> <FontAwesomeIcon icon={faPen} />
                                            <div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody >
                }
                <Wrapper_edit_item isEditFormVisible={isEditFormVisible} setEditFormVisible={setEditFormVisible} product={Product} />
                {

                    isShow && <div className="wrapper_edit_itemForm" onClick={removeForm}>
                        <div className="edit_item" onClick={stopPropagation}>
                            <AddProduct />
                        </div>
                    </div>
                }


            </table >
            <div className="nav_map">
                <nav aria-label="...">
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(shoesData.length / rowsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </nav>
            </div>
        </div >
    )
}