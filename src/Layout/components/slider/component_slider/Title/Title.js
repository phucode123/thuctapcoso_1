import classNames from 'classnames/bind';
import styles from './Title.module.scss'

const cx = classNames.bind(styles)

export default function Title(props) {
  return <h1 className={cx('Container')}>{props.children}</h1>;
}
