import  { useState, useEffect } from 'react';
// import { Chart as ChartJS, BarController, Tooltip, Legend, CategoryScale } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// // import { CategoryScale } from 'chart.js';
import axios from 'axios';
// import { linearProgressClasses } from '@mui/material';
// // import LinearProgress from '@material-ui/core/LinearProgress';

// // ChartJS.register(BarController, Tooltip, Legend, CategoryScale,linearProgressClasses);

// const Doanhthu = () => {
//   const [chartData, setChartData] = useState(null);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(null);

//   useEffect(() => {
//     // Gọi API để lấy dữ liệu
//     axios
//       .get('http://localhost:3001/api/v1/get-all-order')
//       .then((response) => {
//         const data = response.data.data;

//         // Tạo một đối tượng Map để nhóm dữ liệu theo năm và tháng và tính tổng giá trị đơn hàng
//         const monthlyData = new Map();
//         const yearsSet = new Set();

//         data.forEach((item) => {
//           const year = item.order_date.split('/')[2]; // Lấy năm từ order_date
//           const monthYear = `${item.order_date.split('/')[1]}/${year}`; // Lấy tháng và năm từ order_date
//           const totalPrice = parseFloat(item.total_price); // Chuyển đổi total_price thành số

//           if (!selectedYear || year === selectedYear) {
//             if (!monthlyData.has(monthYear)) {
//               monthlyData.set(monthYear, totalPrice);
//             } else {
//               monthlyData.set(monthYear, monthlyData.get(monthYear) + totalPrice);
//             }
//           }

//           yearsSet.add(year);
//         });

//         // Chuyển đổi dữ liệu từ Map sang mảng
//         const chartData = {
//           labels: Array.from(monthlyData.keys()),
//           datasets: [
//             {
//               label: 'Doanh số',
//               data: Array.from(monthlyData.values()),
//               backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1,
//             },
//           ],
//         };

//         setChartData(chartData);
//         setAvailableYears(Array.from(yearsSet));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [selectedYear]);

//   const chartOptions = {
//     scales: {
//       x: {
//         type: 'category', // Sử dụng scale "category" cho trục x
//       },
//       y: {
//         ticks: {
//           beginAtZero: true,
//         },
//         scaleLabel: {
//           display: true,
//           labelString: 'Doanh số',
//         },
//       },
//     },
//     tooltips: {
//       callbacks: {
//         label: function (tooltipItem, data) {
//           const label = data.labels[tooltipItem.index];
//           const value = data.datasets[0].data[tooltipItem.index];
//           return `${label}: ${value} - ${formatDate(label)}`;
//         },
//       },
//     },
//   };

//   const formatDate = (monthYearString) => {
//     return `Tháng/Năm ${monthYearString}`;
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   if (!chartData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Bar data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default Doanhthu;

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Text,
  CartesianGrid
} from "recharts";

import { CustomTooltip, RenderLegend } from "./utils";

const Doanhthu = () => {

  // 
  const [chartData, setChartData] = useState(null);
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    // Gọi API để lấy dữ liệu
    axios
      .get('http://localhost:3001/api/v1/get-all-order')
      .then((response) => {
        const data = response.data.data;

        // Tạo một đối tượng Map để nhóm dữ liệu theo năm và tháng và tính tổng giá trị đơn hàng
        const monthlyData = new Map();
        const yearsSet = new Set();

        data.forEach((item) => {
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
      .catch((error) => {
        console.log(error);
      });
  }, [selectedYear]);

  const chartOptions = {
    scales: {
      x: {
        type: 'category', // Sử dụng scale "category" cho trục x
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: 'Doanh số',
        },
      },
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
console.log(chartData);
  if (!chartData) {
    return <div>Loading...</div>;
  }

  // 
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  const customTick = (tickObject) => {
    const {
      payload: { value }
    } = tickObject;
    tickObject["fill"] = value === 0 ? "red" : "#666";
    return <Text {...tickObject}>{value}</Text>;
  };

  return (
    <div style={{ height: "20rem" }}>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="4 1 " />

          <XAxis dataKey="name"></XAxis>

          <YAxis tick={(tickObject) => customTick(tickObject)}></YAxis>

          <Line dataKey="uv" type="monotone" stroke="#0000FF"></Line>
          <Line dataKey="pv" type="monotone" stroke="#ff223f"></Line>

          {/* Tooltip Implementation */}
          <Tooltip
            content={<CustomTooltip active={false} payload={[]} label={""} />}
          />

          {/* Legend Implementation */}
          <Legend content={<RenderLegend />} verticalAlign="top" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Doanhthu;
