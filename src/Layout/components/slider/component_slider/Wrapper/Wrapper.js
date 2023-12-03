import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss'

const cx = classNames.bind(styles)

export default function Wrapper(props) {
  return <div className={cx('Container')}>{props.children}</div>;
}
