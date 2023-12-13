import React from "react";
import './control_product.css'
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import fakeAPI from "../../../../assect/fakeAPI";
import { faPen, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper_edit_item from "../Wrapper_item_edit";
import Wrapper_edit_user from "../Wrapper_user_edit";
import axios from "axios";
import Loading from "../../../library/Loading";

export default function Table_user() {

    // call API
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://ttcs-delta.vercel.app/api/v1/get-user')
            .then((response) => {
                const data = response.data;
                setUserData(data.data);
                setIsLoading(false);
                // console.log(data.data);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    // Sử dụng dữ liệu shoesData ở bên ngoài axios
    // console.log(userData);

    // const userData = fakeAPI.Testusers;
    const rowsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const displayData = userData.slice(
        currentPage * rowsPerPage,
        (currentPage + 1) * rowsPerPage
    );
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

    // console.log('Sản phẩm được chọn:', Product)



    // hết hiển thị form và đóng form
    return (
        <div className="test_manin">
            <div className="table-wrapper">
                <table id="mytable" className="table  mb-0 bg-white">
                    <thead className="bg-light">
                        <tr className="header-row">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Sản phẩm đã mua</th>
                            <th>Số điện thọai</th>
                            {/* <th>Quantity</th>
                        <th>Local Brand</th> */}
                            <th></th>
                        </tr>
                    </thead>

                    {
                        isLoading ? <Loading /> :
                            <tbody>
                                {displayData.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <p className="fw-bold mb-1">{product.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p style={{ fontSize: "15px" }} className="fs-15 fw-normal mb-1">{product.name}</p>
                                        </td>
                                        <td>
                                            <span className="text-black badge badge-success rounded-pill d-inline">{`Đã mua ${''}`}</span>
                                        </td>
                                        <td>
                                            <span>
                                                {product.phone_number}
                                            </span>
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
                    <Wrapper_edit_user isEditFormVisible={isEditFormVisible} setEditFormVisible={setEditFormVisible} user={Product} />

                </table >

            </div>
            <div className="nav_map">
                <nav aria-label="...">
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(userData.length / rowsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </nav>
            </div>
        </div >
    )
}