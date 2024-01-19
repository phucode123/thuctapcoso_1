
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { parse, format } from 'date-fns';
import Select from 'react-select'

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Gọi API và nhận dữ liệu
    axios.get('http://localhost:3001/api/v1/get-all-order') // Thay thế bằng URL thực tế của API
      .then(response => {
        const data = response.data.data;

        // Lấy danh sách các năm từ dữ liệu
        const uniqueYears = [...new Set(data.map(entry => parse(entry.order_date, 'dd/MM/yyyy', new Date()).getFullYear()))];
        setYears(uniqueYears);

        // Lọc dữ liệu theo năm được chọn
        const filteredData = selectedYear ? data.filter(entry => parse(entry.order_date, 'dd/MM/yyyy', new Date()).getFullYear() === selectedYear.value) : data;

        // Chuyển đổi ngày thành tháng và tính tổng doanh thu cho mỗi tháng
        const monthlyData = filteredData.reduce((acc, entry) => {
          const month = parse(entry.order_date, 'dd/MM/yyyy', new Date()); // Chuyển đổi ngày tháng
          const formattedMonth = format(month, 'MM/yyyy'); // Lấy tháng/năm
          
          if (!acc[formattedMonth]) {
            acc[formattedMonth] = { order_date: formattedMonth, 'tổng doanh thu': 0 }; // Thay đổi chữ 'total price' thành 'tổng doanh thu'
          }
          acc[formattedMonth]['tổng doanh thu'] += entry.total_price;
          return acc;
        }, {});

        // Chuyển đổi dữ liệu thành mảng
        const formattedData = Object.values(monthlyData);

        // Cập nhật state để vẽ biểu đồ
        setChartData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedYear]); // Thêm selectedYear vào dependency để gọi lại useEffect khi selectedYear thay đổi

  const yearOptions = years.map(year => ({ value: year, label: year }));

  return (
    <div>
      <h2>Doanh số bán hàng theo năm</h2>
      <Select
        options={yearOptions}
        isClearable
        placeholder="Chọn năm"
        value={selectedYear}
        onChange={value => setSelectedYear(value)}
      />
      <LineChart width={800} height={400} data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="order_date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="tổng doanh thu" stroke="#8884d8" /> {/* Thay đổi chữ 'total price' thành 'tổng doanh thu' */}
      </LineChart>
    </div>
  );
};

export default ChartComponent;
