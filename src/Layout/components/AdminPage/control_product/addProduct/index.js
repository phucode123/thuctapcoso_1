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
            <div key={size}>
                <label>
                    <input
                        type="checkbox"
                        name="sizes"
                        value={size}
                        checked={formData.quantities[size] !== undefined}
                        onChange={handleInputChange}
                    />
                    {` Size ${size}`}
                </label>
                {formData.quantities[size] !== undefined && (
                    <input
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

        const sizesArray = formData.sizes
            .filter((size) => formData.quantities[size] !== undefined)
            .map((size, index) => ({
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
        };

        const formDataToSend = new FormData();
        formDataToSend.append('name', postData.name);
        formDataToSend.append('price', postData.price);
        formDataToSend.append('brand', postData.brand);
        formDataToSend.append('discount', postData.discount);
        formDataToSend.append('sizes', JSON.stringify(postData.sizes));
        formDataToSend.append('image', formData.image);

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
        <div className="form-container">
            <form onSubmit={(e) => { e.preventDefault(); prepareDataForSubmit(); }} encType="multipart/form-data" className='full-height'>
                <div className='container_input'>
                    <div className="form-group">
                        <label htmlFor="name">Tên:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Giá:</label>
                        <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="brand">Thương hiệu:</label>
                        <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="discount">Giảm giá:</label>
                        <input type="text" id="discount" name="discount" value={formData.discount} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Size:</label>
                    {renderSizeCheckboxes()}
                </div>

                <div className="form-group">
                    <label htmlFor="image">Ảnh:</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleInputChange} />
                </div>

                <button type="submit">Gửi</button>
            </form>
        </div>
    );
};

export default AddProduct;