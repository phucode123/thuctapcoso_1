import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { faCamera, faCameraAlt, faCameraRotate, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import SuggestedProduct from './suggestedProducts';

const cx = classNames.bind(styles);

function Search({ className }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([]);
    const [isShow, setIsShow] = useState(false);

    // call API
    const [shoesData, setShoesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/get-shoes')
            .then((response) => {
                const data = response.data;
                setShoesData(data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
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
    }

    const handleIconClick = () => {
        // Handle search icon click event if needed
    };


    const OnclickSearchImage =() =>{
        //xử lí tìm kiếm hình ảnh ở đây nha Nhân
    }

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
                <button onClick={handleIconClick}  title={'Tìm kiếm'} className={cx('btn-search')}>
                    <i>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                </button>
                <button onClick={OnclickSearchImage} title={'Tìm kiếm bằng hình ảnh'} className={cx('btn-search_byimage ')}>
                    <i className='add_imageIcon'>
                        <FontAwesomeIcon icon={faCamera} />
                    </i>
                </button>
            </div>

            
            {isShow && (
                <SuggestedProduct items={items}>
                    <div className="hide_form">
                        <button onClick={() => {
                            setIsShow(false)
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
    return (<>

    </>)
}

export default Search;