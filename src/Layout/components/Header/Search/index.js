import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faCamera, faCameraAlt, faCameraRotate, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import SuggestedProduct from './suggestedProducts';

const cx = classNames.bind(styles);

function Search({ className }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Gọi API
    const [shoesData, setShoesData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/get-shoes')
            .then((response) => {
                const data = response.data;
                setShoesData(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filteredItems = shoesData.filter((item) => {
                return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setItems(filteredItems);
            setIsShow(filteredItems.length > 0);
        } else {
            setItems([]);
            setIsShow(false);
        }
    }, [searchTerm, shoesData]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleIconClick = () => {
        // Xử lý sự kiện nhấp vào biểu tượng tìm kiếm nếu cần thiết
    };

    const handleImageSearch = () => {
        // Xử lý sự kiện tìm kiếm bằng hình ảnh
        // Gửi hình ảnh đã chọn đến API
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);

            // Gửi yêu cầu POST đến API với dữ liệu hình ảnh
            axios.post('http://localhost:3001/api/v1/post-image', formData)
                .then((response) => {
                    // Xử lý kết quả tìm kiếm
                    let data = [
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702093812716.png?alt=media&token=8f5defa1-e6c3-4e8d-b33b-39ecfdc3656c",
                        
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702093893159.png?alt=media&token=bc03ee39-d3db-4f6f-b3bf-653862635ffd",
                        
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702364068343.jpg?alt=media&token=498321bf-55a0-4780-bbe4-4798e6722f1e",
                        
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702364136820.jpg?alt=media&token=27b1f2cf-4159-40b7-9c2a-69c13cd6953e"
                      ]; // link ảnh lưu cứng
                    console.log(data);
                    // ...xu li gi do
                })
                .catch((error) => {
                    let data = [
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702093812716.png?alt=media&token=8f5defa1-e6c3-4e8d-b33b-39ecfdc3656c",
                        
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702093893159.png?alt=media&token=bc03ee39-d3db-4f6f-b3bf-653862635ffd",
                        
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702364068343.jpg?alt=media&token=498321bf-55a0-4780-bbe4-4798e6722f1e",
                        
                        "https://firebasestorage.googleapis.com/v0/b/ttcs-7bc51.appspot.com/o/images%2F1702364136820.jpg?alt=media&token=27b1f2cf-4159-40b7-9c2a-69c13cd6953e"
                      ]; // link ảnh lưu cứng
                    console.log(data);
                });
        }
    };

    const handleImageChange = (event) => {
        // Lấy hình ảnh đã chọn từ input
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div>
            <div className={cx('wrapper', className)}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    className={cx('input')}
                    placeholder="Tìm kiếm..."
                    autoFocus
                    required
                />
                <button onClick={handleIconClick} title={'Tìm kiếm'} className={cx('btn-search')}>
                    <i>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                </button>
                <button title={'Tìm kiếm bằng hình ảnh'} className={cx('btn-search_byimage')}>
                    <label htmlFor="imageInput" className="add_imageIcon">
                        <FontAwesomeIcon icon={faCamera} />
                    </label>
                    <input id="imageInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                </button>
                <button onClick={handleImageSearch} className={cx('btn-search_byimage')}>
                    Tìm kiếm
                </button>
            </div>

            {isShow && (
                <SuggestedProduct items={items}>
                    <div className="hide_form">
                        <button onClick={() => {
                            setIsShow(false);
                        }} className="hide_form_button">
                            Ẩn
                        </button>
                    </div>
                </SuggestedProduct>
            )}
        </div>
    );
}

function Title() {
    return <></>;
}

export default Search;