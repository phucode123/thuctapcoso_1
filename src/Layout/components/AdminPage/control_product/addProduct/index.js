


import React, { useState } from 'react';
import axios from 'axios';
import './addProduct.css'

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        brand: '',
        discount: '',
        sizes: ['38', '39', '40', '41', '42', '43'],
        quantities: {},
        image: null,
        describe: '', // New field for product description
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'checkbox') {
            const updatedQuantities = { ...formData.quantities };
            if (checked) {
                updatedQuantities[value] = updatedQuantities[value] || 0;
            } else {
                delete updatedQuantities[value];
            }

            setFormData({
                ...formData,
                quantities: updatedQuantities,
            });
        } else if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleQuantityChange = (size, e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            quantities: {
                ...formData.quantities,
                [size]: value,
            },
        });
    };

    const renderSizeCheckboxes = () => {
        return formData.sizes.map((size) => (
            <div className='container_size_quan' key={size}>
                <label>
                    <input
                        className='input_checkBox_size'
                        type="checkbox"
                        name="sizes"
                        value={size}
                        checked={formData.quantities[size] !== undefined}
                        onChange={handleInputChange}
                    />
                    {` ${size}`}
                </label>
                {formData.quantities[size] !== undefined && (
                    <input
                        // style={{ width: '100%' }}
                        className='input_quan_size'
                        type="number"
                        name={`quantity_${size}`}
                        value={formData.quantities[size]}
                        placeholder="Quantity"
                        onChange={(e) => handleQuantityChange(size, e)}
                    />
                )}
            </div>
        ));
    };

    const prepareDataForSubmit = () => {
        if (!formData.image) {
            console.error('Vui lòng chọn ảnh.');
            return;
        }

        const sizesArray = formData.sizes.map((size, index) => ({
            id_size: index + 1,
            quantity: parseInt(formData.quantities[size]) || 0,
        }));

        const price = parseFloat(formData.price);
        const discount = parseFloat(formData.discount);

        if (isNaN(price) || isNaN(discount)) {
            console.error('Giá và giảm giá phải là số.');
            return;
        }

        const postData = {
            name: formData.name,
            price: price,
            brand: formData.brand,
            discount: discount,
            sizes: sizesArray,
            describe: formData.describe, // Include the description
        };

        const formDataToSend = new FormData();
        formDataToSend.append('name', postData.name);
        formDataToSend.append('price', postData.price);
        formDataToSend.append('brand', postData.brand);
        formDataToSend.append('discount', postData.discount);
        formDataToSend.append('sizes', JSON.stringify(postData.sizes));
        formDataToSend.append('image', formData.image);
        formDataToSend.append('describe', postData.describe); // Append the description

        axios.post('http://localhost:3001/api/v1/create-shoes', formDataToSend)
            .then((response) => {
                console.log('Phản hồi từ máy chủ:', response.data);
                // Xử lý phản hồi thành công nếu cần
            })
            .catch((error) => {
                console.error('Lỗi:', error);
                // Xử lý phản hồi lỗi nếu cần
            });
    };

    return (
        <div class="form-container">
            <form onSubmit={(e) => { e.preventDefault(); prepareDataForSubmit(); }} encType="multipart/form-data">
                <div class="form-row">
                    <label class="form-label">
                        Tên:
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} class="form-input" />
                    </label>

                    <label class="form-label">
                        Giá:
                        <input type="text" name="price" value={formData.price} onChange={handleInputChange} class="form-input" />
                    </label>
                </div>

                <div class="form-row">
                    <label class="form-label">
                        Thương hiệu:
                        <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} class="form-input" />
                    </label>

                    <label class="form-label">
                        Giảm giá:
                        <input type="text" name="discount" value={formData.discount} onChange={handleInputChange} class="form-input" />
                    </label>
                </div>


                <div class="form-column">
                    <label class="form-label">Size:</label>
                    <div class="size-checkboxes">
                        {renderSizeCheckboxes()}
                    </div>
                </div>
                <div class="form-column">
                    <label class="form-label">
                        Mô tả sản phẩm:
                        <textarea name="describe" value={formData.describe} onChange={handleInputChange} class="form-textarea"></textarea>
                    </label>
                </div>



                <div class="form-row">
                    <label class="form-label">
                        Ảnh:
                        <input type="file" name="image" accept="image/*" onChange={handleInputChange} class="form-input" />
                    </label>
                </div>

                <div class="form-row">
                    <button type="submit" class="submit-button">Gửi</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;