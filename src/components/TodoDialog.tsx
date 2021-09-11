import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import styles from 'components/TodoDialog.module.scss';
import Todo from 'types/Todo';

export enum TodoDialogTypes {
  Create = "CREATE",
  Edit = "EDIT",
}
interface TodoDialogInterface {
  show: boolean;
  type?: TodoDialogTypes;
  todo?: Todo|null; // Binding when `editing type`
  defaultText?: string;
  onCreate?: any;
  onUpdate?: any;
  onEdit?: any;
  onCancel?: any;
}
const TodoDialog = ({
  show,
  type = TodoDialogTypes.Create,
  todo,
  defaultText = "",
  onCreate,
  onUpdate,
  onCancel,
}: TodoDialogInterface) => {
  
  const [ title, setTitle ] = useState(defaultText)
  const [ showWarn, setShowWarn ] = useState(false)

  useEffect(() => {
    setTitle(defaultText)
  }, [defaultText])

  // Do create
  const createTodo = (_title: string) => {
    if (_title === "") { // Check blank
      setShowWarn(true)
      return
    }
    if (todo) { // In editing state
      onUpdate && onUpdate({...todo,
        title: _title,
      })
    } else {
      const createdItem = new Todo(_title, false)
      onCreate && onCreate(createdItem)
    }
    _onCancel()
  }

  // On canceled
  const _onCancel = (e?: any) => {
    onCancel && onCancel()
    // setTitle("")
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

  // Decision displayed word in title prefix of dialog
  const displayedTitlePrefix = type === TodoDialogTypes.Create ? "Create" : "Edit"
  const displayedConfirmBtnText = type === TodoDialogTypes.Create ? "Create" : "Update"

  return (
    <Dialog className={styles.add_todo}
      fullWidth={true}  
      open={show}
      onClose={_onCancel}>
      <DialogTitle>{displayedTitlePrefix} todo</DialogTitle>
      <DialogContent style={{padding: "0px 24px 8px"}}> {/* Remove top padding */}
        <TextField autoFocus className={styles.input_todo} label="Title" placeholder="Write todo!"
          value={title}
          defaultValue={defaultText}
          onKeyDown={onKeyDown}
          onChange={onChange} />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={_onCancel}>
          Cancel
        </Button> */}
        <Button variant="contained" color="primary" onClick={onConfirm}>
          {displayedConfirmBtnText}
        </Button>
      </DialogActions>
      <Snackbar open={showWarn} message="Todo is empty!" autoHideDuration={2000} onClose={snackbarOnClose} />
    </Dialog>
  )
}

export default TodoDialog