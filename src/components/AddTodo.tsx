import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Snackbar } from '@material-ui/core';
import React, { useState } from 'react';

import styles from 'components/AddTodo.module.scss';
import Todo from 'Todo';

interface AddTodoInterface {
  show: boolean;
  onCreate?: any;
  onCancel?: any;
}
const AddTodo = ({
  show,
  onCreate,
  onCancel,
}: AddTodoInterface) => {

  const [ title, setTitle ] = useState("")
  const [ showWarn, setShowWarn ] = useState(false)

  // Do create
  const createTodo = (_title: string) => {
    if (_title === "") { // Check blank
      setShowWarn(true)
      return
    }
    const createdItem = new Todo(_title, false)
    onCreate && onCreate(createdItem)
    _onCancel()
  }

  // On canceled
  const _onCancel = (e?: any) => {
    onCancel && onCancel()
    setTitle("")
  }

  // On confirm
  const onConfirm = (e: object) => {
    createTodo(title)
  }

  // Input on change
  const onChange = (e: any) => {
    const { value } = e.target
    setTitle(value)
  }

  // Snackbar on close
  const snackbarOnClose = () => {
    setShowWarn(false)
  }

  const onKeyDown = (e: any) => {
    const { key } = e
    if (key === "Enter") {
      createTodo(title)
    }
  }

  return (
    <Dialog className={styles.add_todo}
      fullWidth={true}  
      open={show}
      onClose={_onCancel}>
      <DialogTitle>Create todo</DialogTitle>
      <DialogContent style={{padding: "0px 24px 8px"}}> {/* Remove top padding */}
        <TextField autoFocus className={styles.input_todo} label="Title" placeholder="Write todo!"
          value={title}
          onKeyDown={onKeyDown}
          onChange={onChange} />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={_onCancel}>
          Cancel
        </Button> */}
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Create
        </Button>
      </DialogActions>
      <Snackbar open={showWarn} message="Todo is empty!" autoHideDuration={2000} onClose={snackbarOnClose} />
    </Dialog>
  )
}

export default AddTodo