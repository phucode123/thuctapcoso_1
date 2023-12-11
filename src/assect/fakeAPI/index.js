import React, { useEffect, useState } from 'react';
import axios from "axios";


// function Test(){
//     const APIreal = 'https://ttcs-duongxuannhan2002s-projects.vercel.app/api/v1/get-shoes'
//     const [data, setData] = useState([])
    
//     // // useEffect(() => {
//     //     axios
//     //         .get(APIreal)
//     //         .then(response => {
//     //             console.log('haha');
//     //             setData(response.data.data);
//     //         })
//     //         .catch(error => {
//     //             console.error(error);
//     //         });
//     // // }, []);
//     console.log(data);
// }

// Test()



const sliderBar = [
    {
        id: 'XH',
        name: "Xu Hướng Mua Sắm",
        labels: [
            {
                id: 1,
                label: 'Xu hướng theo ngày'
            }, {
                id: 2,
                label: 'HOT - GIảm Sốc'
            }
        ]
    }, {
        id: "LOCAL",
        name: "Thương hiệu nổi bật",
        labels: [
            {
                id: 1,
                label: 'Adidas'
            }, {
                id: 2,
                label: 'Vans'
            }
        ]
    }, {
        id: "LANG",
        name: "Ngoại ngữ",
        labels: [
            {
                id: 1,
                label: 'Sách tiếng Anh'
            }, {
                id: 2,
                label: 'Sách tiếng Việt'
            }
        ]
    }, {
        id: "ALL",
        name: "Tất cả sản phẩm (test)",
        labels: []
    }

]

const Testusers = [
    {
        id: 1,
        lastName: 'Phú Thiên',
        avatar: "https://i.pinimg.com/736x/a4/47/85/a44785a139621e14d0e2367415290e40.jpg",
        purchased: [
            {

                id: 21,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'

            }, {
            }
        ],
       phone: '0123456789',
        userName: 'phu123',
        pass: '123',
    }, {
        id: 2,
        lastName: 'Lung Thị Linh',
        avatar: "https://i.pinimg.com/736x/a4/47/85/a44785a139621e14d0e2367415290e40.jpg",
        purchased: [
            {

                id: 21,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'

            }, {id: 22,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 2550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'
            },{

                id: 21,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'

            }, {id: 22,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 2550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'
            },{

                id: 21,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'

            }, {id: 22,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 2550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'
            },{

                id: 28,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'

            }, {id: 25,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 2550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'
            }
        ],
        phone: '09612345',
        userName: 'lunglinh123',
        pass: '123',
    }, {
        id: 3,
        lastName: 'Lung Văn Long',
        avatar: "https://i.pinimg.com/736x/a4/47/85/a44785a139621e14d0e2367415290e40.jpg",
        purchased: [
            {

                id: 22,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 150000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'

            }
        ],
        phone: '09612345',
        userName: 'Longlinh123',
        pass: '123',
    }, {
        id: 4,
        lastName: 'Triệu Văn Long',
        avatar: "https://i.pinimg.com/736x/a4/47/85/a44785a139621e14d0e2367415290e40.jpg",
        purchased: [
            {

                id: 21,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'

            }, {
                id: 22,
                image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
                name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
                price: 550000,
                sale: 10,
                score: 9,
                quantity: 40,
                local: 'NIKE'
            }
        ],
        phone: '0156789455',
        userName: 'Longlinh123',
        pass: '123',
    }
]


const ListBooks = [
    {
        id: 1,
        image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nike02/giay-nike-jordan-max-aura-5-nam-trang-den-01-1000x1000.jpg',
        name: 'GIÀY NIKE JORDAN MAX AURA 5 NAM - ĐEN TRẮNG',
        price: 1000000,
        sale: 5,
        score: 6.7,
        quantity: 100,
        local: 'NIKE',
        size: [
            47, 48, 49
        ]
    },
    {
        id: 2,
        image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk3/giay-nike-dunk-hi-retro-nam-nau-trang-01-800x800.jpg',

        name: 'GIÀY NIKE DUNK HI RETRO NAM - NÂU TRẮNG',
        price: 2590000,
        sale: 50,
        score: 7,
        quantity: 90,
        local: 'NIKE',


    },
    {
        id: 3,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',

        name: 'Giúp tôi trả lời những câu hỏi',
        price: 50000,
        sale: 2,
        score: 4,
        quantity: 90,
        local: 'NIKE'
    },
    {
        id: 4,
        image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk3/giay-nike-air-jordan-1-mid-se-nam-trang-nau-01-800x800.jpg',

        name: 'GIÀY NIKE AIR JORDAN 1 MID SE NAM - NÂU TRẮNG',
        price: 15000,
        sale: 9,
        score: 5,
        quantity: 95,
        local: 'NIKE',
    },
    {
        id: 5,
        image: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk3/giay-nike-jordan-one-take-4-pf-nam-trang-xanh-01-800x800.jpg',

        name: 'GIÀY NIKE JORDAN ONE TAKE 4 PF NAM - TRẮNG XANH',
        price: 20000,
        sale: 15,
        score: 9,
        quantity: 80,
        local: 'NIKE',
    },
    {
        id: 6,
        image: 'https://tse2.mm.bing.net/th?id=OIP.QFq4IGSqAQMHpYWrLmf9fAHaEK&pid=Api&P=0&h=220',
        name: 'Sản phẩm của tôi',
        price: 25000,
        sale: 12,
        score: 3,
        quantity: 60,
        local: 'adidas',
    },
    {
        id: 7,
        image: 'https://4.bp.blogspot.com/-tuh7bjsYzw0/WEs9b0EJMPI/AAAAAAAAACo/WLUEViwvfpwZrteP5HKtVXt7D2ILAGPtgCLcB/s1600/DetectiveConanLiveAction1-3box_-_A.jpg',

        name: 'Sản phẩm 4',
        price: 18000,
        sale: 7,
        score: 4,
        quantity: 70,
        local: 'adidas',
    },
    {
        id: 8,
        image: 'https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/Lizyna-3882666.jpg?r=1643273830031',
        name: 'Sản phẩm 5',
        price: 30000,
        sale: 20,
        score: 5,
        quantity: 50,
        local: 'adidas'
    },
    {
        id: 9,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',

        name: 'Sự tích cây vũ sữa',
        price: 22000,
        sale: 10,
        score: 4,
        quantity: 90,
        local: 'adidas'



    },
    {
        id: 10,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',

        name: 'Sản phẩm 7',
        price: 28000,
        sale: 8,
        score: 3,
        quantity: 75,
        local: 'adidas'

    },
    {
        id: 11,
        image: 'https://i.ytimg.com/vi/WBkzD6bW8bU/maxresdefault.jpg',
        name: 'Hai đứa trẻ',
        price: 19000,
        sale: 5,
        score: 4,
        quantity: 85,
        local: 'adidas'

    },
    {
        id: 12,
        image: 'https://i.pinimg.com/originals/a0/07/0f/a0070f982c1dfd1be481e524872c03b3.jpg',
        name: 'Cậu bé tặc răng',
        price: 27000,
        sale: 12,
        score: 5,
        quantity: 65,
        local: 'nike'


    },
    {
        id: 13,
        image: 'https://i.ytimg.com/vi/WBkzD6bW8bU/maxresdefault.jpg',
        name: 'Sản phẩm 10',
        price: 23000,
        sale: 9,
        score: 4,
        quantity: 70,
        local: 'adidas'

    }, {
        id: 14,
        image: 'https://bizweb.dktcdn.net/thumb/large/100/427/221/products/44577210-8934-4623-be7a-e46deb05dec8.jpg?v=1624436894967',
        name: 'GIẦY VẢI THƯỢNG ĐÌNH KK14-1',
        price: 100000,
        sale: 5,
        score: 6.7,
        quantity: 100,
        local: 'Thượng đình'
    },
    {
        id: 15,
        image: 'https://bizweb.dktcdn.net/100/427/221/products/83c720f0-5e7e-45c8-b6a6-1e86373cc55a.jpg?v=1624436843450',
        name: 'GIẦY VẢI THƯỢNG ĐÌNH HV 14-3',
        price: 100000,
        sale: 50,
        score: 7,
        quantity: 90,
        local: 'Thượng đình',
    },
    {
        id: 16,
        image: 'https://bizweb.dktcdn.net/100/427/221/products/356e5ab9-52a1-47c4-a084-e7c70360aa30.jpg?v=1625812639073',
        name: 'GIÀY BẢO HỘ LAO ĐỘNG TD9905',
        price: 500000,
        sale: 20,
        score: 4,
        quantity: 90,
        local: 'Thượng đình'
    },
    {
        id: 17,
        image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
        name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
        price: 500000,
        sale: 20,
        score: 4,
        quantity: 90,
        local: 'NIKE'
    },
    {
        id: 18,
        image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
        name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
        price: 500000,
        sale: 20,
        score: 4,
        quantity: 90,
        local: 'NIKE'
    },
    {
        id: 19,
        image: 'https://bizweb.dktcdn.net/100/427/221/products/e7f74e61-25c3-4ac5-80f1-75ff3eb70a2c.jpg?v=1626665495553',
        name: 'GIẦY VẢI THƯỢNG ĐÌNH KK14-2',
        price: 500000,
        sale: 20,
        score: 4,
        quantity: 90,
        local: 'Thượng Đình'
    },
    {
        id: 20,
        image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
        name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
        price: 500000,
        sale: 20,
        score: 4,
        quantity: 90,
        local: 'NIKE'
    },
    {
        id: 21,
        image: 'https://myshoes.vn/image/cache/catalog/2022/newbalance/6.5/giay-New-Balance-M-Flash-nam-den-full-01-800x800.jpg',
        name: 'GIÀY NEW BALANCE M FLASH NAM - ĐEN FULL',
        price: 550000,
        sale: 10,
        score: 9,
        quantity: 40,
        local: 'NIKE'
    }

]


export default {

    sliderBar,
    ListBooks,
    Testusers
}