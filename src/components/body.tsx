import React from 'react';
import TodoList from './todoList';

import styles from './body.module.scss';

const Body = () => {
  
  

  return (
    <div className={styles.body}>
      <TodoList />
    </div>
  )
}

export default Body