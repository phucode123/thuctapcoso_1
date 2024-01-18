import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Doanhthu = () => {
  const [chartData, setChartData] = useState(null);
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    // Gọi API để lấy dữ liệu
    axios.get('http://localhost:3001/api/v1/get-all-order')
      .then(response => {
        const data = response.data.data;

        // Tạo một đối tượng Map để nhóm dữ liệu theo năm và tháng và tính tổng giá trị đơn hàng
        const monthlyData = new Map();
        const yearsSet = new Set();

        data.forEach(item => {
          const year = item.order_date.split('/')[2]; // Lấy năm từ order_date
          const monthYear = `${item.order_date.split('/')[1]}/${year}`; // Lấy tháng và năm từ order_date
          const totalPrice = parseFloat(item.total_price); // Chuyển đổi total_price thành số
          
          if (!selectedYear || year === selectedYear) {
            if (!monthlyData.has(monthYear)) {
              monthlyData.set(monthYear, totalPrice);
            } else {
              monthlyData.set(monthYear, monthlyData.get(monthYear) + totalPrice);
            }
          }

          yearsSet.add(year);
        });

        // Chuyển đổi dữ liệu từ Map sang mảng
        const chartData = {
          labels: Array.from(monthlyData.keys()),
          datasets: [
            {
              label: 'Doanh số',
              data: Array.from(monthlyData.values()),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };

        setChartData(chartData);
        setAvailableYears(Array.from(yearsSet));
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedYear]);

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Doanh số',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Tháng/Năm',
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[0].data[tooltipItem.index];
          return `${label}: ${value} - ${formatDate(label)}`;
        },
      },
    },
  };

  const formatDate = (monthYearString) => {
    return `Tháng/Năm ${monthYearString}`;
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Biểu đồ doanh số bán hàng theo từng tháng/năm</h2>
      
      <label htmlFor="yearSelect">Chọn năm:</label>
      <select id="yearSelect" onChange={handleYearChange} value={selectedYear || ""}>
        <option value="">Tất cả</option>
        {availableYears.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      
      <div style={{ width: '500px', height: '300px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Doanhthu;
