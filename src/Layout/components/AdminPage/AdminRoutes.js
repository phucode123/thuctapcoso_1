import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Table_product from './control_product';
import Table_user from './control_product/indexUser';
import Doanhthu from './Doanhthu';
import Odercontrol from './OderControl';
export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/quanlysanpham" element={<Table_product />} />
      <Route path="/quanlynguoidung" element={<Table_user />} />
      <Route path="/quanlydonhang" element={< Doanhthu/>} />
      <Route path="/quanlydoanhthu" element={< Odercontrol/>} />
      {/* Các routes con khác */}
    </Routes>
  );
};