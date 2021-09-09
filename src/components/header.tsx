import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styles from 'components/header.module.scss';
import Button from '../styled-mui-components/Button';
import { Tab } from 'App';

interface IHeader {
  tab: Tab|null;
}
const Header = ({
  tab,
}: IHeader) => {

  return (
    <div className={styles.header}>
      <Button className={styles.menu} variant="contained" color="primary">
        <MenuIcon style={{fontSize: '36px'}} />
      </Button>
      {/* <div className={styles.title_area}> */}
      <span className={styles.title}><span className="icon">💪</span> Daily tasks </span>
      {/* </div> */}
    </div>
  )
}

export default Header