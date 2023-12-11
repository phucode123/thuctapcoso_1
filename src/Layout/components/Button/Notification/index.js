import styles from './notification.module.scss'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Notification_item() {
    return (
        <div>
            <i style={{cursor : 'pointer'}} className={cx('btn_icon')}   >
                {<FontAwesomeIcon icon={faBell} />}
            </i>

        </div>


    )



}
export default Notification_item;
