import React from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import AdminRoutes from './AdminRoutes';
import Table_product from './control_product';

export default function AdminPage() {
  return (
    <div className="container_big">
      <div className="row">
        <nav className="navigation col-md-2 text-start" role="navigation">
          <ul className="main">
          <Link to="/admin/quanlydonhang"><li className="dashboard">Đơn hàng</li></Link>
            <Link to="/admin/quanlysanpham"><li className="product">Quản lý hàng</li></Link>
            <Link to="/admin/quanlynguoidung"><li className="user">Quản lý người dùng</li></Link>
            <Link to="/admin/quanlydoanhthu"><li className="comments">Doanh thu</li></Link>
            <Link><li className="logout">Đăng xuất</li></Link>
          </ul>
        </nav>

        <div className="main col-md-10">
          {/* <Routes>
            <Route path="/quanlysanpham" element={<Table_product />} />
           
          </Routes> */}
          <AdminRoutes />
        </div>
      </div>
    </div>
  );
}