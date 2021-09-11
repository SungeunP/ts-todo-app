import React from 'react';
import { IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import CheckboxButton from './common/CheckboxButton';
import styles from 'components/todoList.module.scss'
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles'
import Todo from 'types/Todo';

interface ITodoList {
  items: Todo[]|null;
  onEdit?: any;
  onCheckChange: any;
  onDelete: any;
}
const TodoList = ({
  items,
  onEdit,
  onCheckChange,
  onDelete,
}: ITodoList) => {

  return (
    <List className={styles.list}>
      {items ? items.map( item => (
        <Item {...item}
          onClick={onEdit}
          onCheckChange={onCheckChange}
          onDelete={onDelete} />
      )) : (
        <Typography variant='h5' >No todos</Typography>
      )}
    </List>
  )
}

interface ListItemInterface {
  id: number;
  title: string;
  completed: boolean;
  onClick: any;
  onCheckChange: any;
  onDelete: any;
}
const Item = ({
  id,
  title,
  completed,
  onClick,
  onCheckChange,
  onDelete,
}: ListItemInterface) => {

  const _onClick = () => {
    onClick(id)
  }
  
  const onClickDelete = () => {
    onDelete(id)
  }

  const _onCheckChange = (value: boolean) => {
    onCheckChange(id, value)
  }

  return (
    <ListItem onClick={_onClick} button>
      <ListItemIcon>
        <CheckboxButton onChange={_onCheckChange} checked={completed} />
      </ListItemIcon>
      <ListItemText
        primary={<ListItemTypo text={title}/>}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={onClickDelete} color="primary">
          <Delete className={styles.item_secondary_icon}/>
        </IconButton>
      </ListItemSecondaryAction>
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