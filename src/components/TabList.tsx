import React, { useEffect } from 'react';
import styles from 'components/TabList.module.scss';
import Button from '../styled-mui-components/Button';
import TTab from 'types/Tab';

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
    
    return undefined
  }

  return (
    <ul className={`${styles.tabs} ${open ? styles.open : ''}`}>
      {tabs?.map(tab => (
        <TabItem {...tab} onClick={_onTabClick} />
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
}: IGroup) => (
  <li className={styles.tab} onClick={() => onClick(id)}>
    <div className={styles.icon}>{icon}</div>
    <p className={styles.title}>{title}</p>  
  </li>
)

export default TabList