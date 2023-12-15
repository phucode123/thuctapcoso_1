import React, { useState } from "react";
import './ListproductCart.css';
const test = [
  {
    id: 1,
    name: "Sản phẩm 1 nè",
    price: "1 củ",
  },
  {
    id: 2,
    name: "Sản phẩm 2 nè",
    price: "2 củ",
  },
  {
    id: 3,
    name: "Sản phẩm 3 nè",
    price: "4 củ",
  },
  {
    id: 4,
    name: "Sản phẩm 1 nè",
    price: "1 củ",
  },
  {
    id: 5,
    name: "Sản phẩm 2 nè",
    price: "2 củ",
  }, {
    id: 6,
    name: "Sản phẩm 2 nè",
    price: "2 củ",
  }, {
    id: 7,
    name: "Sản phẩm 2 nè",
    price: "2 củ",
  }, {
    id: 8,
    name: "Sản phẩm 2 nè",
    price: "2 củ",
  },
];
export default function ListProduct() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState(Array.from({ length: test.length }, () => 1));

  const decreaseQuantity = (index) => {
    console.log(quantities[index]);
    if (quantities[index] > 0) {
      console.log('giamrmm');
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = updatedQuantities[index] - 1;
      setQuantities(updatedQuantities);
    }
  };

  const increaseQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = updatedQuantities[index] + 1;
    setQuantities(updatedQuantities);
  };

  const handleItemClick = (itemId) => {
    const selectedItem = test.find((item) => item.id === itemId);
    if (selectedItem) {
      const isSelected = selectedItems.some(
        (selectedItem) => selectedItem.id === itemId
      );
      if (isSelected) {
        setSelectedItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemId)
        );
      } else {
        setSelectedItems((prevItems) => [...prevItems, selectedItem]);
      }
    }
  };

  const handleCheckout = () => {
    const selectedItemsInfo = test
      .filter((item) => {
        return selectedItems.some((selectedItem) => selectedItem.id === item.id);
      })
      .map((item) => {
        return {
          name: item.name,
          price: item.price,
          quantity: quantities[item.id - 1] || 0,
        };
      });

    console.log(selectedItemsInfo);
    // Thực hiện các xử lý khác với các mục đã chọn
  };

  

  function handleOnclickSubmit(id) {
    console.log(id);
  }

  return (
    <div className="cart">
      <div className="title">
        <div className="header_cart_title">
          <h4 className="Heading_title_cart">Shopping Cart</h4>
        </div>
      </div>

      <div className="container_product_item row border-top border-bottom ">
        {test.map((item, index) => {
          const isSelected = selectedItems.some(
            (selectedItem) => selectedItem.id === item.id
          );

          return (
            <div
              key={item.id}
              className={`main_item_product align-items-center ${isSelected ? "selected" : ""
                }`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="col-1">
                <input className="checkbox_none" type="checkbox" />
              </div>
              <div className="col-2">
                <img
                  className="img_product"
                  src="https://i.imgur.com/pHQ3xT3.jpg"
                  alt="Product"
                />
              </div>
              <div className="col">
                <div className="row">{item.name}</div>
              </div>
              <div
                className="col minus_plus"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <a
                  href="#"
                  className="minus"
                  onClick={() => decreaseQuantity(index)}
                >
                  -
                </a>
                <a href="#" className="border">
                  {quantities[index] || 0}
                </a>
                <a
                  onClick={() => increaseQuantity(index)}
                  className="plus"
                  href="#"
                >
                  +
                </a>
              </div>
              <div className="col price_close">
                <span className="price">{item.price}</span>
                <span
                  className="close"
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOnclickSubmit(item.id);
                  }}
                >
                  &#10005;
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button style={{ marginLeft: 'auto' }} onClick={handleCheckout}>Checkout</button>
    </div>
  );
}