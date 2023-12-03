import React from "react";
import classNames from 'classnames/bind';
import styles from './Subtitle.module.scss'

const cx = classNames.bind(styles)

export default function Subtitle(props) {
  return <h2 className={cx('Container')}>{props.children}</h2>;
}
