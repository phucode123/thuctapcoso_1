import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowsRotate,
    faCaretDown,
    faCloudUpload,
    faEye,
    faHouse,
    faSignal,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
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
             label: 'Sách HOT - GIảm Sốc'
          }
       ]
    }, {
       id: "LOCAL",
       name: "Thương hiệu nổi bật",
       labels: [
          {
             id: 1,
             label: 'Thiên Long'
          }, {
             id: 2,
             label: 'Kim Đồng'
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

 const user_test = {
    id : 1,
    lastName: 'Phú Thiên',
    avatar:  "https://i.pinimg.com/736x/a4/47/85/a44785a139621e14d0e2367415290e40.jpg"     

}

const ListBooks = [
    {
        id: 1,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',
        name: 'DORAEMON và Vương quốc tu hú',
        price: 100000,
        sale: 5,
        score: 6.7,
        quantity: 100,
        language: 'Vietnam',
        author: 'KIMDONG'
    },
    {
        id: 2,
        image: 'https://4.bp.blogspot.com/-tuh7bjsYzw0/WEs9b0EJMPI/AAAAAAAAACo/WLUEViwvfpwZrteP5HKtVXt7D2ILAGPtgCLcB/s1600/DetectiveConanLiveAction1-3box_-_A.jpg',

        name: 'Thám tử lừng danh CONAN',
        price: 150000,
        sale: 3,
        score: 7,
        quantity: 90,
        author: 'KIMDONG',
        language: 'English'


    },
    {
        id: 3,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',

        name: 'Giúp tôi trả lời những câu hỏi',
        price: 50000,
        sale: 2,
        score: 4,
        quantity: 90,
        language: 'English',
        author: 'PHUTHIEN'
    },
    {
        id: 4,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',

        name: 'Cô dê chú rẩu',
        price: 15000,
        sale: 9,
        score: 5,
        quantity: 95,
        author: '',
        language: 'English'
    },
    {
        id: 5,
        image: 'https://s.memehay.com/files/posts/20200826/cc18b1286a76df16337a70412901584cmeo-mat-nguoi-buon-ngu.jpg',

        name: 'Con mèo mướp',
        price: 20000,
        sale: 15,
        score: 9,
        quantity: 80,
        author: 'PHUTHIEN',
        language: 'English'
    },
    {
        id: 6,
        image: 'https://tse2.mm.bing.net/th?id=OIP.QFq4IGSqAQMHpYWrLmf9fAHaEK&pid=Api&P=0&h=220',
        name: 'Sản phẩm của tôi',
        price: 25000,
        sale: 12,
        score: 3,
        quantity: 60,
        author: 'PHUTHIEN',
        language: 'China'
    },
    {
        id: 7,
        image: 'https://4.bp.blogspot.com/-tuh7bjsYzw0/WEs9b0EJMPI/AAAAAAAAACo/WLUEViwvfpwZrteP5HKtVXt7D2ILAGPtgCLcB/s1600/DetectiveConanLiveAction1-3box_-_A.jpg',

        name: 'Sản phẩm 4',
        price: 18000,
        sale: 7,
        score: 4,
        quantity: 70,
        author: '',
        language: 'China'
    },
    {
        id: 8,
        image: 'https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/Lizyna-3882666.jpg?r=1643273830031',
        name: 'Sản phẩm 5',
        price: 30000,
        sale: 20,
        score: 5,
        quantity: 50,
        author: '',
        language: 'English'
    },
    {
        id: 9,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',

        name: 'Sự tích cây vũ sữa',
        price: 22000,
        sale: 10,
        score: 4,
        quantity: 90,
        author: 'KIMDONG',
        language: 'China'

    },
    {
        id: 10,
        image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-nobita-doremon-cao-boi_054126468.jpg',

        name: 'Sản phẩm 7',
        price: 28000,
        sale: 8,
        score: 3,
        quantity: 75,
        author: '',
        language: 'VietNam'
    },
    {
        id: 11,
        image: 'https://i.ytimg.com/vi/WBkzD6bW8bU/maxresdefault.jpg',
        name: 'Hai đứa trẻ',
        price: 19000,
        sale: 5,
        score: 4,
        quantity: 85,
        author: '',
        language: 'VietNam'
    },
    {
        id: 12,
        image: 'https://i.pinimg.com/originals/a0/07/0f/a0070f982c1dfd1be481e524872c03b3.jpg',
        name: 'Cậu bé tặc răng',
        price: 27000,
        sale: 12,
        score: 5,
        quantity: 65,
        author: 'KIMDONG',
        language: 'VietNam'

    },
    {
        id: 13,
        image: 'https://i.ytimg.com/vi/WBkzD6bW8bU/maxresdefault.jpg',
        name: 'Sản phẩm 10',
        price: 23000,
        sale: 9,
        score: 4,
        quantity: 70,
        author: 'KIMDONG'
        ,
        language: 'English'
    }

]

export default {
    sliderBar,
    ListBooks
}