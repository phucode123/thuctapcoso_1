import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fakeAPI from '../../../../assect/fakeAPI';


const cx = classNames.bind(styles);

function Search({ className }) {
    const [searchTerm, setSearchTerm] = useState('');
    // const [isSearching, setIsSearching] = useState(false);

    const handleSearch = () => {
        // Xử lý tìm kiếm sản phẩm dựa trên giá trị searchTerm
        console.log('Tìm kiếm:', searchTerm);

        return fakeAPI.ListBooks.find((item) => {
            if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return item // trả về sách được tìm kiếm.
            }
        })

    };
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleIconClick = () => {
        // setIsSearching(true);
        const value =  handleSearch();

        console.log(value)
        // setIsSearching(false);
    };
    return (
        <div className={cx('wrapper', className)}>


            <input type="text"
                value={searchTerm}
                onChange={handleChange}
                className={cx('input')}
                placeholder="Tìm kiếm...">
            </input>

            <button onClick={handleIconClick} className={cx('btn-search')}>
                <i>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
            </button>
        </div>

    )
}




export default Search;