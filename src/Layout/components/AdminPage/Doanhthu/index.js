import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Doanhthu = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Gọi API để lấy dữ liệu
    axios.get('API_URL')
      .then(response => {
        const data = response.data;
        // Xử lý và chuẩn bị dữ liệu cho biểu đồ
        const chartData = {
          labels: data.map(item => item.month),
          datasets: [
            {
              label: 'Doanh số',
              data: data.map(item => item.sales),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
        setChartData(chartData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Doanh số',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Tháng',
        },
      },
    },
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Biểu đồ doanh số bán hàng trong các tháng</h2>
      <div style={{ width: '500px', height: '300px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Doanhthu;