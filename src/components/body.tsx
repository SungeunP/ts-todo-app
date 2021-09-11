import React, { useState } from 'react';
import TodoList from './todoList';

import styles from 'components/body.module.scss';
import AddTodoButton from './AddTodoButton';
import Todo, { ITodo } from 'types/Todo';
import TodoDialog, { TodoDialogTypes } from './TodoDialog';
import { Snackbar } from '@material-ui/core';

interface IBody {
  todos: Todo[]|null;
  // editingTodo: Todo|null;
  // setEditingTodo?: any;
  // onTodoChecked?: any;
  onTodoDeleted: (id: number) => void;
  onTodoEdited: (todo: Todo) => void;
  onTodoCreated: (todo: Todo) => void;
}
const Body = ({
  todos,
  // editingTodo,
  // setEditingTodo,
  // onTodoChecked,
  onTodoDeleted,
  onTodoEdited,
  onTodoCreated,
}: IBody) => {

  const [ editingTodo, setEditingTodo ] = useState<Todo|null>(null)

  const [ showTodoDialog, setShowTodoDialog ] = useState<boolean>(false)

  const [ showWarn, setShowWarn ] = useState(false)


  // On add-todo button clicked
  const AddBtnClicked = () => {
    setEditingTodo(null)
    setShowTodoDialog(true)
  }

  // On dialog canceled
  const onCancel = () => {
    setShowTodoDialog(false) // Dialog off
  }

  const _setEditingTodo = (id: number) => {
    if (todos) {
      const targetTodo = todos.find(todo => (todo.id === id))
      
      if (targetTodo) {
        setEditingTodo(targetTodo)
        setShowTodoDialog(true)
      } else {
        setShowWarn(true)
      }
    }
  }

  // On snackbar closed
  const snackbarOnClose = () => {
    setShowWarn(false)
  }

  // On todo created
  const _onTodoCreated = (todo: Todo) => {
    onTodoCreated(todo)

    setTimeout(() => { // Must be fix (state not updated issue)
      setShowTodoDialog(false)
    }, 100)
  }

  const _onTodoEdited = (todo: Todo) => {
    onTodoEdited(todo)
  }

  // On todo checked
  const onTodoChecked = (id: number, checked: boolean) => {
    if (todos) {
      const targetTodo = todos.find(todo => (todo.id === id))
      if (!targetTodo) {
        console.error('onTodoChecked - todo not finded!!')
        return
      }
  
      const assignedTodo = {...targetTodo,
        completed: checked
      }
      onTodoEdited(assignedTodo)
    }
  }

  const dialogType = editingTodo ? TodoDialogTypes.Edit : TodoDialogTypes.Create
  const dialogDefaultText = editingTodo ? editingTodo.title : undefined

  return (
    <div className={styles.body}>
      <TodoList items={todos}
        onEdit={_setEditingTodo}
        onCheckChange={onTodoChecked}
        onDelete={onTodoDeleted} />
      <AddTodoButton onClick={AddBtnClicked} />

      <TodoDialog show={showTodoDialog}
        type={dialogType}
        todo={editingTodo}
        onUpdate={_onTodoEdited}
        defaultText={dialogDefaultText}
        onCreate={_onTodoCreated}
        onCancel={onCancel} />

      <Snackbar open={showWarn} message="Oops, somethings wrong" autoHideDuration={2000} onClose={snackbarOnClose}  />
    </div>
  )
}

export default Body