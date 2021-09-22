import React, { useEffect, useState } from 'react';
import styles from 'components/TabList.module.scss';
import Tab, { TTab } from 'types/Tab';
import Typography from '@material-ui/core/Typography'
import Button from 'styled-mui-components/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@material-ui/core';
import CreateTabDialog from './CreateTabDialog';

interface ITabList {
  open: boolean;
  tabs: TTab[];
  onTabClick: (tab: TTab) => void;
  onTabCreate: (tab: TTab) => void;
}
const TabList = ({
  open,
  tabs,
  onTabClick,
  onTabCreate,
}: ITabList) => {

  const [ showCreateTab, setShowCreateTab ] = useState(false)

  // On tab clicked
  const _onTabClick = (id: number) => {
    const tab = tabs.find(_tab => _tab.id === id)
    if (tab) {
      onTabClick(tab)
    }
  }

  // On add-tab button clicked
  const onClickAddTab = (e: any) => {
    e.stopPropagation()
    setShowCreateTab(true)
  }

  // On CreateTabDialog closed
  const onCloseCreateTab = () => {
    setShowCreateTab(false)
  }

  const _onTabCreate = (tab: TTab) => {
    onTabCreate(tab)
    setShowCreateTab(false)
  }
  
  return (<>
    <Button className={styles.add_tab} variant="contained" color="primary"
      onClick={onClickAddTab}>
      <Typography variant="h5">➕ add tab</Typography>
    </Button>
    <ul className={`${styles.tabs} ${open ? styles.open : ''}`}>
      {tabs?.map(tab => (
        <TabItem {...tab} 
          onClick={_onTabClick} />
      ))}
    </ul>

    <CreateTabDialog open={showCreateTab}
      onClose={onCloseCreateTab}
      onCreate={_onTabCreate} />
  </>)
}

interface IGroup extends TTab {
  // setTitle?: any;
  onClick: (id: number) => void;
}
const TabItem = ({
  id,
  icon,
  title,
  onClick,
}: IGroup) => {

  const [isHover, setIsHover] = useState(false)

  return (
    <Button className={`${styles.tab} ${isHover ? styles.hover : ''}`} variant="contained" color="primary"
      onClick={() => onClick(id)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className={styles.label_wrap}>
        <div className={styles.icon}>{icon}</div>
        <Typography className={styles.title} variant="h5">{title}</Typography>
      </div>
    </Button>
  )
}

export default TabList