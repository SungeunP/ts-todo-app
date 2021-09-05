import React, { useState } from 'react';
import TodoList from './todoList';

import styles from 'components/body.module.scss';
import AddTodoButton from './AddTodoButton';
import AddTodo from './AddTodo';
import Todo, { ITodo } from 'Todo';

const DEFAULT_TODOS: ITodo[] = [
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
]
const Body = () => {
  
  const [ todos, setTodos ] = useState(DEFAULT_TODOS)
  const [ showAddTodo, setAddTodo ] = useState(false)

  const AddBtnClicked = () => {
    setAddTodo(true)
  }

  const onTodoCreated = (todo: ITodo) => {
    if (todos) {
      setTodos(todos.concat([todo]))
    }
    
    setTimeout(() => { // Must be fix (state not updated issue)
      setAddTodo(false)
    }, 100)
  }
  const onCancel = () => {
    setAddTodo(false)
  }

  return (
    <div className={styles.body}>
      <TodoList items={todos} />
      <AddTodoButton onClick={AddBtnClicked} />

      <AddTodo show={showAddTodo}
        onCreate={onTodoCreated}
        onCancel={onCancel} />
    </div>
  )
}

export default Body