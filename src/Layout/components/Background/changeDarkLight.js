import React, { useState, useContext } from 'react';
import styles from './changeDarkLight.module.scss'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { mainContext } from '../../DefaultLayout';

// caí này để đổi màu nền thành màu đen(giao diện tối)

const cx = classNames.bind(styles);

function Iconlight() {
    const [isOn, setOn] = useState(false);
    const {setBackground, background} = useContext(mainContext)

    const handleClick = () => {
        setOn(!isOn);
      setBackground(!background)
    };
    

    return (
        <div>

            <i onClick={handleClick} className={cx('btn-light')}   >
                
                {<FontAwesomeIcon icon={faLightbulb} color={isOn ? 'grey' : '#ff9601'} />}
 
 
            </i>

        </div>
    );
}

export default Iconlight;