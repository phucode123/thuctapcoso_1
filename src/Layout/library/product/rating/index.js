import React from 'react';
import './rating.css'; // Import file CSS để tùy chỉnh giao diện thanh


function RatingBar({ rating }) {
    const calculateWidth = () => {
      return (rating / 10) * 100 + '%';
    };

    const getColor = () => {
        if (rating >= 5&& rating<=7) {
          return "yellow";
        } else if(rating>7&& rating<=10){
          return "green";
        }
        else if(rating<5&&rating>=3){
          return "orange";
        }
        else{
          return "red";
        }
      };
  
    return (
      <div className="rating-bar">
        <p className="rating_score">Score:{rating}</p>
        <div className="rating-bar-progress" style={{ width: calculateWidth() , backgroundColor: getColor()}}></div>
      </div>
    );
  }
  
  export default RatingBar;