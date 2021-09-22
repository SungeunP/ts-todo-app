import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styles from 'components/header.module.scss';
import Button from '../styled-mui-components/Button';
import Tab, { TTab } from 'types/Tab';
import { Grid, IconButton, Input, InputBase, Popover, TextField, Typography } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import TitleEditor from './TitleEditor';
import IconEditor from './IconEditor';

interface IHeader {
  tab: TTab|null;
  onTabClick?: () => void;
  onEditTitle: (editedTitle: string) => void;
  onEditIcon: (editedIcon: string) => void;
}
const Header = ({
  tab,
  onTabClick,
  onEditTitle,
  onEditIcon,
}: IHeader) => {

  const [ titleAnchorEl, setTitleAnchorEl ] = useState(null)
  const [ iconAnchorEl, setIconAnchorEl ] = useState(null)

  const {
    icon,
    title,
  } = tab ?? {}

  // On click title
  const onClickTitle = (e: any) => {
    setTitleAnchorEl(e.currentTarget)
  }

  // On click icon
  const onClickIcon = (e: any) => {
    setIconAnchorEl(e.currentTarget)
  }
  
  // On `TitleEditor` closed
  const onCloseTitleEditor = () => {
    setTitleAnchorEl(null)
  }

  // On `IconEditor` closed
  const onCloseIconEditor = () => {
    setIconAnchorEl(null)
  }

  const showTitleEditor = Boolean(titleAnchorEl)
  const showIconEditor = Boolean(iconAnchorEl)

  return (
    <div className={styles.header}>
      <Button className={styles.menu} variant="contained" color="primary"
        onClick={onTabClick}>
        <MenuIcon style={{fontSize: '36px'}} />
      </Button>
      {tab ? (
        <div className={styles.title_wrap}>
          <IconButton className={styles.icon} color="primary"
            onClick={onClickIcon}>
            {icon}
          </IconButton>
          <IconEditor open={showIconEditor}
            defaultIcon={icon}
            anchorEl={iconAnchorEl}
            onClose={onCloseIconEditor}
            onConfirm={onEditIcon} />

          <Button className={styles.title} onClick={onClickTitle}>
            {title}
          </Button>
          <TitleEditor open={showTitleEditor}
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