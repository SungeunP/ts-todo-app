import React from 'react';
import styles from 'components/SideBar.module.scss';
import Button from '../styled-mui-components/Button';

interface ISideBar {
  children?: any;
  open: boolean;
  onClose?: any;
}
const SideBar = ({
  children,
  open,
  onClose,
}: ISideBar) => {
  
  return (
    <div className={`${styles.side_bar} ${open ? styles.show : ''}`}
      onClick={onClose}>
      {children}
    </div>
  )
}

export default SideBar