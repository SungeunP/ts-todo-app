import React, { useState } from 'react';
import TodoList from './todoList';

import styles from 'components/body.module.scss';
import AddTodoButton from './AddTodoButton';
import Todo, { ITodo } from 'Todo';
import TodoDialog, { TodoDialogTypes } from './TodoDialog';

const DEFAULT_TODOS: ITodo[] = [
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
]
const Body = () => {
  
  const [ todos, setTodos ] = useState(DEFAULT_TODOS)
  const [ showTodoDialog, setShowTodoDialog ] = useState<boolean>(false)
  const [ editingTodo, setEditingTodo ] = useState<Todo|null>(null)

  // On add-todo button clicked
  const AddBtnClicked = () => {
    setShowTodoDialog(true)
  }

  // On todo created in todo-dialog
  const onTodoCreated = (todo: ITodo) => {
    if (todos) {
      setTodos(todos.concat([todo]))
    }
    
    setTimeout(() => { // Must be fix (state not updated issue)
      setShowTodoDialog(false)
    }, 100)
  }

  // On dialog canceled
  const onCancel = () => {
    setShowTodoDialog(false)
  }

  const setEdit = (id: number) => {
    const targetTodo = todos.find(todo => (todo.id === id))
    
    if (targetTodo) {
      setEditingTodo(targetTodo)
      setShowTodoDialog(true)
    } else {
      alert('Oops, somethings wrong')
    }
  }

  const dialogType = editingTodo ? TodoDialogTypes.Edit : TodoDialogTypes.Create
  const dialogDefaultText = editingTodo ? editingTodo.title : undefined

  return (
    <div className={styles.body}>
      <TodoList items={todos}
        onEdit={setEdit} />
      <AddTodoButton onClick={AddBtnClicked} />

      <TodoDialog show={showTodoDialog}
        type={dialogType}
        defaultText={dialogDefaultText}
        onCreate={onTodoCreated}
        onCancel={onCancel} />
    </div>
  )
}

export default Body