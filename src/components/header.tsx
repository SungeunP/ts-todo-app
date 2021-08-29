import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './header.module.scss';
import Button from '../styled-mui-components/Button';

const Header = () => {

  return (
    <div className={styles.header}>
      <Button className={styles.menu} variant="contained" color="primary">
        <MenuIcon style={{fontSize: '36px'}} />
      </Button>
      <div className={styles.title_area}>
        <p className={styles.title}><span className="icon">💪</span> Daily tasks </p>
      </div>
    </div>
  )
}

export default Header