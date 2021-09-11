import React from 'react';
import styles from 'components/GroupList.module.scss';
import Button from '../styled-mui-components/Button';
import TTab from 'types/Tab';

interface ITabList {
  tabs: TTab[];
  onTabClick: (tab: TTab) => void;
}
const TabList = ({
  tabs,
  onTabClick,
}: ITabList) => {
  
  const _onTabClick = (id: number) => {
    
    return undefined
  }

  return (
    <ul className="menu">
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
  <li className="menu" onClick={() => onClick(id)}>
    <div className="icon">{icon}</div>
    <p className="title">{title}</p>  
  </li>
)

export default TabList