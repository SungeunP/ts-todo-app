import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styles from 'components/header.module.scss';
import Button from '../styled-mui-components/Button';
import Tab from 'types/Tab';
import { IconButton } from '@material-ui/core';

interface IHeader {
  tab: Tab|null;
  onMenuClick?: any;
}
const Header = ({
  tab,
  onMenuClick,
}: IHeader) => {

  const {
    icon,
    title,
  } = tab ?? {}

  return (
    <div className={styles.header}>
      <Button className={styles.menu} variant="contained" color="primary"
        onClick={onMenuClick}>
        <MenuIcon style={{fontSize: '36px'}} />
      </Button>
      {tab ? (<>
        <IconButton className={styles.icon} color="primary">{icon}</IconButton>
        <span className={styles.title}>{title}</span>
      </>) : (
        <p> Try create group! </p>
      )}
    </div>
  )
}

export default Header