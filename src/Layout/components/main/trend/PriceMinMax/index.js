import './PriceMinMax.css'
import React, { useState } from "react";

const MinMaxList = ({minPrice, maxPrice, setMinPrice, setMaxPrice}) => {
   
    // const [filteredProducts, setFilteredProducts] = useState([]);

    // const products = [
    //     { name: "Product 1", price: 100 },
    //     { name: "Product 2", price: 50 },
    //     { name: "Product 3", price: 200 },
    //     // ...
    // ];

    const handleFilter = () => {
        // const filtered = products.filter(
        //     (product) =>
        //         product.price >= parseFloat(minPrice) &&
        //         product.price <= parseFloat(maxPrice)
        // );
        // setFilteredProducts(filtered);
    };

    return (
        <div>
            <div>
                <label>Min Price:</label>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Max Price:</label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            
            {/* <ul>
                {filteredProducts.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default MinMaxList;