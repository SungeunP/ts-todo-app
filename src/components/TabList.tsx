import React, { useEffect, useState } from 'react';
import styles from 'components/TabList.module.scss';
import TTab from 'types/Tab';
import Typography from '@material-ui/core/Typography'

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
    <li className={`${styles.tab} ${isHover ? styles.hover : ''}`} 
      onClick={() => onClick(id)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className={styles.icon}>{icon}</div>
      
      <Typography className={styles.title} variant="h5">{title}</Typography>  
    </li>
  )
}

export default TabList