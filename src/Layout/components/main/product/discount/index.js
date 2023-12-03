import React, { useState } from 'react';
import './discount.css';


// const cx = classNames.bind(styles);

const tabs = [
    { id: 0, title: "Tất cả" },
    { id: 1, title: "Mã giảm giá" },
    { id: 2, title: "Mã vận chuyển" }
  ];
  
  const slides = [
    [
      {
        id: 0,
        fill: "#FFB323",
        urlImg:
          "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_promotion.svg?q=10341",
        title: "MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K",
        content: "MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K"
      },
      {
        id: 1,
        fill: "#23C16B",
        urlImg:
          "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_freeship.svg?q=10341",
        title: "MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K",
        content: "MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K"
      },
      {
        id: 2,
        fill: "#48A7F8",
        urlImg:
          "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_ewallet.svg?q=10341",
        title: "MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K",
        content: "MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K"
      }
    ],
    [
      {
        id: 0,
        fill: "#FFB323",
        urlImg:
          "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_promotion.svg?q=10341",
        title: "MÃ FREESHIP 10K",
        content: "MÃ FREESHIP 10K"
      },
      {
        id: 1,
        fill: "#23C16B",
        urlImg:
          "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_freeship.svg?q=10341",
        title: "MÃ FREESHIP 10K",
        content: "MÃ FREESHIP 10K"
      }
    ],
    [
      {
        id: 0,
        fill: "#FFB323",
        urlImg:
          "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_promotion.svg?q=10341",
        title: "SACOMBANK: HOÀN",
        content: "SACOMBANK: HOÀN"
      },{
        id: 1,
        fill: "#FFB323",
        urlImg:
          "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_promotion.svg?q=10341",
        title: "MBBANK: HOÀN 2 tỷ",
        content: "MBBANK: HOÀN 2 tỷ"
      }
    ]
  ];
  function SlideItem({ fill, urlImg, title, content }) {
    return (
      <div className="slide_item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="350"
          height="104"
          viewBox="0 0 524 145.001"
          class="svg-bg"
        >
          <path
            id="Frame_voucher_Web"
            d="M110,144H12A12,12,0,0,1,0,132V12A12,12,0,0,1,12,0h98a12.02,12.02,0,0,0,12,11.971A12.02,12.02,0,0,0,134,0H511a12,12,0,0,1,12,12V132a12,12,0,0,1-12,12H134v-.03a12,12,0,0,0-24,0V144Z"
            transform="translate(0.5 0.5)"
            fill="#fff"
            stroke="rgba(0,0,0,0)"
            stroke-miterlimit="10"
            stroke-width="1"
          ></path>
        </svg>
        <div className="slide_content">
          <div className="slide_content_left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104.554"
              height="125.395"
              viewBox="0 0 104.554 125.395"
              class="cart2-svg-icon"
            >
              <path
                id="Frame_icon_web"
                d="M95.424,124.4H47.593l-33.592,0a12,12,0,0,1-12-12V12A12,12,0,0,1,14,0H80.785l.255,0H95.424a10.364,10.364,0,0,0,10.129,10.165l-.005,4.374a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.814v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.911v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9V55.22a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.813V71.5a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9v2.324a2.907,2.907,0,1,0,0,5.814V95.9a2.907,2.907,0,1,0,0,5.814v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.916,2.916,0,0,0,2.915,2.911l0,3.987A10.328,10.328,0,0,0,95.423,124.2c0,.065,0,.131,0,.2h0Z"
                transform="translate(-1.501 0.499)"
                fill={fill}
                stroke="rgba(0,0,0,0)"
                stroke-miterlimit="10"
                stroke-width="1"
              ></path>
            </svg>
            <img class="icon-type" src={urlImg} />
          </div>
  
          <div className="slide_content_right">
            <div className="slide_right_header">{title}</div>
            <div className="slide_right_content">{content}</div>
          </div>
        </div>
      </div>
    );
  }
  
  function TabsItem({ num, selectedId, onSelected, children }) {
    const isActive = selectedId === num;
    return (
      <li
        className={`tabs_item ${isActive ? "active" : ""}`}
        onClick={() => onSelected(num)}
      >
        {children}
        <div className="tabs_border"></div>
      </li>
    );
  }
  function Swiper({ selectedId, onSelected }) {
    return (
      <div>
        <div className="tabslider_title">Mã giảm giá</div>
        <ul className="tabs">
          {tabs.map((tab, i) => (
            <TabsItem
              key={tab.id}
              selectedId={selectedId}
              num={tab.id}
              onSelected={onSelected}
            >
              {tab.title}
            </TabsItem>
          ))}
        </ul>
      </div>
    );
  }
  function SlideContainer({ selectedId }) {
    return (
      <div className="slide_container">
        {slides[selectedId].map((slide) => (
          <SlideItem
            key={slide.id}
            fill={slide.fill}
            urlImg={slide.urlImg}
            title={slide.title}
            content={slide.content}
            selectedId={selectedId}
          />
        ))}
      </div>
    );
  }
  
  function Listdiscount() {
    const [selectedId, setSelectedId] = useState(0);
  
    function handleSelected(id) {
      setSelectedId(id);
    }
    return (
      <div className="event_card">
        <Swiper selectedId={selectedId} onSelected={handleSelected} />
        <SlideContainer selectedId={selectedId} />
      </div>
    );
  }
  



export default Listdiscount
