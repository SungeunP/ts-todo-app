import React from 'react';
import styles from './todoList.module.scss'

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

const TodoList = () => {

  return (
    <ul className="list">
      {dummy_data.map( item => (
        <ListItem {...item} />
      ))}
    </ul>
  )
}

interface ListItemInterface {
  id: number;
  title: string;
  completed: boolean;
}
const ListItem = ({
  id,
  title,
  completed,
}: ListItemInterface) => {
  
  return (
    <li className="item">
      
    </li>
  )
}

export default TodoList