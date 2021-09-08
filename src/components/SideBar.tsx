import React from 'react';
import styles from 'components/SideBar.module.scss';
import Button from '../styled-mui-components/Button';

interface ISideBar {
  open: boolean;
}
const SideBar = ({
  open,
}: ISideBar) => {

  
  
  return (
    <div className={`${styles.side_bar} ${open ? styles.show : ''}`}>
      
    </div>
  )
}

export default SideBar