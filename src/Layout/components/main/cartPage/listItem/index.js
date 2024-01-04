import React, { useState, useEffect } from "react";
import "./ListproductCart.css";
import axios from "axios";
import { getToken } from "../../../../../assect/workToken/WorkToken";

export default function ListProduct({ setListProduct }) {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleNumberChange = (itemId, event) => {
    const selectedSize = event.target.value;
    setSelectedNumber(selectedSize);
  };

  const token = getToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ttcs-duongxuannhan2002s-projects.vercel.app/api/v1/get-cart?token=${token}`
        );
        setCartItems(function format() {
          return response.data.data.map((item, index) => ({
            ...item,
            id: index + 1,
          }));
        });

        setQuantities(Array.from({ length: response.data.data.length }, () => 1));
        // setSizes(Array.from({ length: response.data.data.length }, () => ""));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  const handleItemClick = (itemId) => {
    // console.log(itemId);

    const selectedItem = cartItems.find((item) => item.id === itemId);
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

  const decreaseQuantity = (index) => {
    if (quantities[index] > 0) {
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

  const handleCheckout = () => {
    // console.log();
    // console.log(cartItems);

    const selectedItemsInfo = cartItems
      .filter((item) => {
        // console.log(item.size);
        return selectedItems.some((selectedItem) => selectedItem.id === item.id);
      })
      .map((item, index) => {
        return {
          id_product: item.id_product,
          name: item.name,
          price: item.price,
          quantity: quantities[item.id - 1] || 0,
          size: item.size // Thêm thông tin về kích thước,
          // ,discount: item.discount
        };
      });

    setListProduct(selectedItemsInfo)

    // console.log(selectedItemsInfo);
  };

  function handleRemove(item) {
    console.log(item);
    let itemRemove = {
      'id_user': '',
      'id_product': item.id_product,
      'size': '',
    }
  }

  return (
    <div className="cart">
      <div className="title">
        <div className="header_cart_title">
          <h4 className="Heading_title_cart">Shopping Cart</h4>
        </div>
      </div>

      <div className="container_product_item row border-top border-bottom ">
        {cartItems.map((item, index) => {
          const isSelected = selectedItems.some(
            (selectedItem) => selectedItem.id === item.id
          );

          return (
            <div
              key={item.id}
              className={`main_item_product align-items-center ${isSelected ? "selected" : ""
                }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="">
                <input className="checkbox_none" type="checkbox" />
              </div>
              <div className="col-2">
                <img className="img_product" src={item.image} alt="Product" />
              </div>
              <div className="col">
                <div className="row name_item_cart">{item.name}</div>
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
              <div
                className="col"
                style={{
                  display: "flex",
                  height: "20px",
                  width: "40px",
                  flexDirection: 'row'
                  , justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px',
                  color: 'grey'
                }}
              >
                <p style={{
                  margin: '0'
                }}>Size</p>
                <div
                  style={{
                    padding: "0",
                    width: "50px",
                  }}
                  value={item.size}
                  onChange={(event) => handleNumberChange(item.id, event)}
                >
                  <div value="">{item.size}</div>
                </div>
              </div>
              <div className="col price_close">
                <span className="price">{item.price * quantities[index]} <span>VNĐ</span></span>
                <span
                  className="close"
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(item);
                  }}
                >
                  &#10005;
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button style={{ marginLeft: "auto" }} onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}