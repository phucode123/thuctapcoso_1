import React, { useState, createContext, useEffect } from 'react';

import { faDeleteLeft, faUpDown, faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

import ListProduct from './ListProduct';
import './trend.css'
import axios from 'axios';
import Loading from '../../../library/Loading';
import MinMaxList from './PriceMinMax';

export default function TrendMain() {
    // xử lý data api
    const [shoesData, setShoesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        console.log('alo');
        axios.get('http://localhost:3001/api/v1/get-shoes')
            .then((response) => {
                const data = response.data;
                setShoesData(data.data);
                setIsLoading(false);
                // console.log(data);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
                // alert('loi tum lum')
            });
    }, []);


    let quality = 16
    //xử lý checkbox 
    const [selectedValues, setSelectedValues] = useState([]);
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter((val) => val !== value));
        }
    };
    // xử lý option
    const [selectedOption, setselectedOption] = useState([]);
    const handleSelectChange = (event) => {
        const { value } = event.target;

        setselectedOption([value]);
    };
    let keyProduct = selectedValues.concat(selectedOption)
    // console.log(keyProduct)
    // const [ListProductSelected, setListProductSelected] = useState([])
    let ListProductSelected = makeList(keyProduct, shoesData, minPrice, maxPrice)
    const localList = [
        {
            id: 0,
            nameLocal: 'Adidas',
            image: 'https://myshoes.vn/image/cache/data/logo/adidas-42x42w.png'
        }, {
            id: 1,
            nameLocal: 'Vans',
            image: 'https://vanhoaduongpho.com/storage/news/y-nghia-logo-cua-nhan-giay-truot-van-vans-va-lich-su-hinh-thanh-thiet-ke-1608014869.jpg'
        }, {
            id: 2,
            nameLocal: 'Nike',
            image: 'https://myshoes.vn/image/cache/data/logo/nike-42x42w.png'
        }, {
            id: 3,
            nameLocal: 'Thượng Đình',
            image: 'https://icolor.vn/wp-content/uploads/2021/04/Bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-%E2%80%93-Logo-C%C3%B4ng-ty-Gi%E1%BA%A7y-Th%C6%B0%E1%BB%A3ng-%C4%90%C3%ACnh-6-768x742.jpg'
        }
    ]
    // const imageSelected = [
    // ]

    // const handleFilter = () => {
    //     filterMinMax(ListProductSelecteds)
    //     // const filtered = products.filter(
    //     //     (product) =>
    //     //         product.price >= parseFloat(minPrice) &&
    //     //         product.price <= parseFloat(maxPrice)
    //     // );
    //     // setFilteredProducts(filtered);
    // };
    return (
        <div class="container_wrapper">
            <div class="row">
                <div class="module-filter col-md-2">
                    <h3 className='header_navbar_left'>

                        <span className='text_header_left'>Tìm kiếm theo</span>
                        <button className="button_reset btn" >
                            <FontAwesomeIcon className='icon_delete' icon={faDeleteLeft} />
                            <span>Xoá</span>
                        </button>
                    </h3>
                    <Module nameNav={'Danh mục'}>
                        {localList.map((local) => {
                            return (
                                <>
                                    <label id={local.id}>
                                        <input type="checkbox" value={local.nameLocal}
                                            checked={selectedValues.includes(local.nameLocal)}
                                            onChange={handleCheckboxChange} class="radio" />
                                        <span class="radio-label">Giày {local.nameLocal}</span>
                                    </label>
                                </>
                            )
                        })

                        }
                        <label>
                            <input type="checkbox" name="" class="radio" />
                            <span class="radio-label">Tất cả</span>
                        </label>
                    </Module>
                    <Module nameNav={'Nhãn hàng'}>
                        <div class="filter-local">
                            <label>
                                {/* <input type="checkbox" data-filter-trigger="" name="m" value="14" /> */}
                                <img src="https://myshoes.vn/image/cache/data/logo/nike-42x42w.png" srcset="https://myshoes.vn/image/cache/data/logo/nike-42x42w.png 1x, https://myshoes.vn/image/cache/data/logo/nike-84x84w.png 2x" width="42" height="42" alt="Nike" title="Nike" class="img-responsive" />
                                <span class="links-text">Nike</span><span class="count-badge ">473</span>
                            </label>
                        </div>
                    </Module>
                    <Module nameNav={'Khoảng giá bạn muốn'}>
                        <MinMaxList minPrice={minPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
                        {/* <button onClick={handleFilter}>Lọc</button> */}
                    </Module>
                </div>
                <div class="col-md-10">
                    <div class="products-filter">
                        <div class="select-group">
                            <div class="input-group sort-by">
                                <label class="input-group-addon" for="input-sort">Sắp xếp theo:</label>
                                <select id="input-sort" class="form-control" onChange={handleSelectChange} >
                                    <option value='default' >Mặc định</option>
                                    <option value='AZ' >Tên (A - Z)</option>
                                    <option value='ZA' >Tên (Z - A)</option>
                                    <option value='increase' >Giá (Thấp &gt; Cao)</option>
                                    <option value='reduce' >Giá (Cao &gt; Thấp)</option>
                                </select>
                                <FontAwesomeIcon className='icondown icon_delete' icon={faChevronDown} />
                            </div>

                        </div>
                    </div>
                    <div className='container_product'>
                        {isLoading ? <Loading /> : (
                            <ListProduct ListProduct={ListProductSelected} quality={quality} />
                        )}



                    </div>
                </div>
            </div>
        </div >
    )
}

// function filterMinMax(minPrice, maxPrice) {
//     let testList = []

//     if (minPrice && maxPrice) {
//         testList = testList.filter(
//             (product) =>
//                 product.price >= parseFloat(minPrice) &&
//                 product.price <= parseFloat(maxPrice)
//         );
//     }
//     return testList
// }

function makeList(keyProduct, listOld, minPrice, maxPrice) {

    let testList = []
    let listNew = listOld
    const localList = [
        {
            id: 0,
            nameLocal: 'Adidas',
            useName: 'Adidas',
            image: 'https://myshoes.vn/image/cache/data/logo/adidas-42x42w.png'
        }, {
            id: 1,
            useName: 'Vans',
            nameLocal: 'Vans',
            image: 'https://vanhoaduongpho.com/storage/news/y-nghia-logo-cua-nhan-giay-truot-van-vans-va-lich-su-hinh-thanh-thiet-ke-1608014869.jpg'
        }, {
            id: 2,
            nameLocal: 'Nike',
            useName: 'Nike',
            image: 'https://myshoes.vn/image/cache/data/logo/nike-42x42w.png'
        }, {
            id: 3,
            nameLocal: 'Thượng Đình',
            useName: 'Thuongdinh',
            image: 'https://icolor.vn/wp-content/uploads/2021/04/Bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-%E2%80%93-Logo-C%C3%B4ng-ty-Gi%E1%BA%A7y-Th%C6%B0%E1%BB%A3ng-%C4%90%C3%ACnh-6-768x742.jpg'
        }
    ]

    const auThor = function ProductsByAuthor(products, nameAuthor) {
        return products.filter(item => {

            if (item.brand.toLowerCase() === nameAuthor.toLowerCase()) {
                return item
            }
        })
    }

    let test = keyProduct.filter((item) => {
        return localList.filter((product) => {
            if (item === product.nameLocal) {
                console.log(product.nameLocal + item)
                listNew = auThor(listOld, item)
                testList = testList.concat(listNew)
                return testList
            }
        })
    })
    testList = testList.length === 0 ? listOld : testList

    if (minPrice && maxPrice) {
        testList = testList.filter(
            (product) =>
                product.price >= parseFloat(minPrice) &&
                product.price <= parseFloat(maxPrice)
        );
    }

    const sortedbyId = function sortProducts(testList) {
        const sortedProducts = [...testList].sort((a, b) => a.id - b.id);
        return sortedProducts
    }
    return sortedbyId(testList)
    // return testList
}

function Module({ nameNav, children }) {
    const [isShow, setisShow] = useState(true)
    function handersetShow() {
        setisShow(!isShow)
    }
    return (<div className='module-body'>
        <h3 className='button title_button' onClick={handersetShow}><span>{nameNav}</span><FontAwesomeIcon className='icon_arrow' icon={faArrowDown} /></h3>
        <div className='container_list'>
            <ul className={`List ${isShow ? 'true' : ''}`}>
                {children}
            </ul>
        </div>
    </div>)
}