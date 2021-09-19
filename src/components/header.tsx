import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styles from 'components/header.module.scss';
import Button from '../styled-mui-components/Button';
import Tab, { TTab } from 'types/Tab';
import { Grid, IconButton, Input, InputBase, Popover, TextField, Typography } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import TitleEditor from './TitleEditor';

interface IHeader {
  tab: TTab|null;
  onTabClick?: () => void;
  onEditTitle: (editedTitle: string) => void;
}
const Header = ({
  tab,
  onTabClick,
  onEditTitle,
}: IHeader) => {

  const [ titleAnchorEl, setTitleAnchorEl ] = useState(null)

  const {
    icon,
    title,
  } = tab ?? {}

  const onClickTitle = (e: any) => {
    setTitleAnchorEl(e.currentTarget)
  }
  
  const onCloseTitleEditor = () => {
    setTitleAnchorEl(null)
  }

  const open = Boolean(titleAnchorEl)

  return (
    <div className={styles.header}>
      <Button className={styles.menu} variant="contained" color="primary"
        onClick={onTabClick}>
        <MenuIcon style={{fontSize: '36px'}} />
      </Button>
      {tab ? (
        <div className={styles.title_wrap}>
          <IconButton className={styles.icon} color="primary">{icon}</IconButton>
          
          <Button className={styles.title} onClick={onClickTitle}>
            {title} 
          </Button>
          <TitleEditor open={open}
            defaultTitle={title}
            anchorEl={titleAnchorEl}
            onClose={onCloseTitleEditor}
            onConfirm={onEditTitle} />
        </div>
      ) : (
        <p> Try create group! </p>
      )}
    </div>
  )
}

export default Header