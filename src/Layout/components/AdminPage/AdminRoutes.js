import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Table_product from './control_product';
import Table_user from './control_product/indexUser';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/quanlysanpham" element={<Table_product />} />
      <Route path="/quanlynguoidung" element={<Table_user />} />

      {/* Các routes con khác */}
    </Routes>
  );
};