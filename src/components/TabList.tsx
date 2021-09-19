import React, { useEffect, useState } from 'react';
import styles from 'components/TabList.module.scss';
import { TTab } from 'types/Tab';
import Typography from '@material-ui/core/Typography'
import Button from 'styled-mui-components/Button';

interface ITabList {
  open: boolean;
  tabs: TTab[];
  onTabClick: (tab: TTab) => void;
}
const TabList = ({
  open,
  tabs,
  onTabClick,
}: ITabList) => {
  console.log('tabs :>> ', tabs);
  const _onTabClick = (id: number) => {
    const tab = tabs.find(_tab => _tab.id === id)
    if (tab) {
      onTabClick(tab)
    }
  }

  return (
    <ul className={`${styles.tabs} ${open ? styles.open : ''}`}>
      {tabs?.map(tab => (
        <TabItem {...tab} 
          onClick={_onTabClick} />
      ))}
    </ul>
  )
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

  const [ isHover, setIsHover ] = useState(false)

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