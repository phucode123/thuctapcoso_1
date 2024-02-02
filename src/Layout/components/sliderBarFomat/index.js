import React, { useState } from 'react';
import styles from './sliderBar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Item_product from '../../library/product/item_product';

const cx = classNames.bind(styles);

//  Author
// console.log(Author+' '+tabs)
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

function Swiper({ selectedId, onSelected, tabs , nameHeader}) {

    

    return (
        <div>
            <div className={cx('row')}><div className={cx("title_icon")}>

                <div className={cx("tabslider_title")}>
                    <img className={cx('title_icon')} src='https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_dealhot.png'>
                    </img>
                    <span className={cx('ml-5', 'd-inline-block')}>{nameHeader}</span>
                </div>
            </div>
            </div>
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



function SlideContainer({ selectedId, tabs }) {
    let limit = 1
    return (
        <div className={cx('wrapper')}>
            <div className={cx("container_tab")}>
                <div className={cx("row")}>

                    {tabs[selectedId].slider.map((product) => {
                        
                        if (limit <= 4) {
                            limit++
                            return <Item_product product={product} />
                        }
                    }
                    )}

                </div>
                <li className={cx("girdslider-menu-item", "center")} >
                    <Link >XEM THÊM</Link>
                </li>


            </div>
        </div>

    );
}


function SliderBar({ tabs , nameHeader}) {
    const [selectedId, setSelectedId] = useState(0);
    function handleSelected(id) {
        setSelectedId(id);
    }
    return (

        <div className={cx('pt-5')}>

        <div className={cx("event_card")}>
            <Swiper selectedId={selectedId} onSelected={handleSelected} tabs={tabs} nameHeader= {nameHeader}/>
            <SlideContainer selectedId={selectedId} tabs={tabs} />
        </div>

        </div>


    )
}


export default SliderBar;