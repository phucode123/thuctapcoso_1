import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faCamera, faCameraAlt, faCameraRotate, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import SuggestedProduct from './suggestedProducts';

const cx = classNames.bind(styles);

function Search({ className }) {
  // <<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [listImage, setListImage] = useState()



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
  // >>>>>>> 83f10aa4a6140024fcfc86a79dabd8a2d87cd39f

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

  // <<<<<<< HEAD
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleIconClick = () => {
    // Xử lý sự kiện nhấp vào biểu tượng tìm kiếm nếu cần thiết
  };

  const handleImageSearch = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      setIsLoading(true);
      axios.post('http://localhost:3001/api/v1/post-image', formData)
        .then((response) => {
          const data = response.data.data;
          setListImage(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // Khi xử lý hoàn tất, đặt isLoading thành false
          setIsLoading(false);
        });
    }
  };

  // Sử dụng useEffect để theo dõi sự thay đổi trong listImage và cập nhật items tương ứng
  useEffect(() => {
    if (listImage && listImage.length > 0) {
      setItems(shoesData.filter((item) => listImage.includes(item.image)));
      setIsShow(true);
    }
  }, [listImage, shoesData]);


  const handleImageChange = (event) => {
    // Lấy hình ảnh đã chọn từ input
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <div className={cx('search-container')}>
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
          <button title={'Tìm kiếm'} className={cx('btn-search')}>
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

        {isLoading && <p>Vui lòng chờ...</p>}
      </div>

      {isShow && !isLoading && (
        <SuggestedProduct items={items}>
          <div className="hide_form">
            <button onClick={() => setIsShow(false)} className="hide_form_button">
              Ẩn
            </button>
          </div>
        </SuggestedProduct>
      )}
      {isShow && isLoading && (
        <SuggestedProduct items={[]}>
          <div className="loading-placeholder">
            <p>Vui lòng chờ...</p>
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