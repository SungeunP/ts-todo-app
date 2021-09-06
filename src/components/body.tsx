import React, { useState } from 'react';
import TodoList from './todoList';

import styles from 'components/body.module.scss';
import AddTodoButton from './AddTodoButton';
import Todo, { ITodo } from 'Todo';
import TodoDialog, { TodoDialogTypes } from './TodoDialog';
import { Snackbar } from '@material-ui/core';

const DEFAULT_TODOS: ITodo[] = [
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
  new Todo('저녁에 운동하기', false),
  new Todo('유튜브 영상 보기', false),
  new Todo('방 청소하기', false),
]

const Body = () => {
  
  // todos
  const [ todos, setTodos ] = useState(DEFAULT_TODOS)
  const updateCheckedTodo = (id: number, checked: boolean) => { // Update current checked todo
    setTodos(todos.map(todo => {
      if (id === todo.id) {
        todo.updateCompleted(checked)
      }
      return todo
    }))
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => (todo.id !== id)))
  }

  const [ showTodoDialog, setShowTodoDialog ] = useState<boolean>(false)
  const [ editingTodo, setEditingTodo ] = useState<Todo|null>(null)

  const [ showWarn, setShowWarn ] = useState(false)

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
    if (editingTodo) { // Release current editing todo
      setEditingTodo(null)
    }
    setShowTodoDialog(false) // Dialog off
  }

  const setEdit = (id: number) => {
    const targetTodo = todos.find(todo => (todo.id === id))
    
    if (targetTodo) {
      setEditingTodo(targetTodo)
      setShowTodoDialog(true)
    } else {
      setShowWarn(true)
    }
  }

  // On snackbar closed
  const snackbarOnClose = () => {
    setShowWarn(false)
  }

  // On todo check changed
  const onCheckedChange = (id: number, value: boolean) => {
    updateCheckedTodo(id, value)
  }

  // On todo delete
  const onDelete = (id: number) => {
    deleteTodo(id)
  }

  const dialogType = editingTodo ? TodoDialogTypes.Edit : TodoDialogTypes.Create
  const dialogDefaultText = editingTodo ? editingTodo.title : undefined

  return (
    <div className={styles.body}>
      <TodoList items={todos}
        onEdit={setEdit}
        onCheckChange={onCheckedChange}
        onDelete={onDelete} />
      <AddTodoButton onClick={AddBtnClicked} />

      <TodoDialog show={showTodoDialog}
        type={dialogType}
        defaultText={dialogDefaultText}
        onCreate={onTodoCreated}
        onCancel={onCancel} />
      <Snackbar open={showWarn} message="Oops, somethings wrong" autoHideDuration={2000} onClose={snackbarOnClose}  />
    </div>
  )
}

export default Body