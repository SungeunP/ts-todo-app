import React from 'react';
import { IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
// import ListItem from '../styled-mui-components/ListItem';
import CheckboxButton from './common/CheckboxButton';
import styles from 'components/todoList.module.scss'
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles'
import Todo from 'Todo';

const dummy_data = [
  {
    id: 0,
    title: '저녁에 운동하기',
    completed: true,
  },
  {
    id: 1,
    title: '유튜브 영상 보기',
    completed: false,
  },
  {
    id: 2,
    title: '방 청소하기',
    completed: false,
  },
]

interface ITodoList {
  items: Todo[];
  onEdit?: any;
}
const TodoList = ({
  items,
  onEdit,
}: ITodoList) => {

  const onClickItem = (id: number) => {
    onEdit(id)
  }

  return (
    <List className={styles.list}>
      {items.map( item => (
        <Item {...item} onClick={onClickItem} />
      ))}
    </List>
  )
}

interface ListItemInterface {
  id: number;
  title: string;
  completed: boolean;
  onClick: any;
}
const Item = ({
  id,
  title,
  completed,
  onClick,
}: ListItemInterface) => {

  const _onClick = () => {
    onClick(id)
  }
  
  return (
    <ListItem onClick={_onClick} button>
      <ListItemIcon>
        <CheckboxButton checked={completed} />
      </ListItemIcon>
      <ListItemText
        primary={<ListItemTypo text={title}/>}
      />
      <ListItemSecondaryAction>
        <IconButton color="primary"><Delete className={styles.item_secondary_icon}/></IconButton>
      </ListItemSecondaryAction>
      {/* <div className={styles.check}>
        <RadioButtonUncheckedSharp style={{fontSize: '3rem'}}/>
      </div>
      <div className={styles.content}>
        {title}
      </div>
      <div className={styles.action_area}>

      </div> */}
    </ListItem>
  )
}

interface ListItemTypeInterface {
  text: string;
}
const ListItemTypoStyle = {

}
const _ListItemType = ({text}: ListItemTypeInterface) => {
  return (
    <Typography className={styles.item_content} variant="h5" color="primary">{text}</Typography>
  )
}
const ListItemTypo = withStyles(ListItemTypoStyle)(_ListItemType)

export default TodoList