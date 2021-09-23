import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import styles from 'components/TodoDialog.module.scss';
import Todo from 'types/Todo';
import { getWording, wording_type } from 'Wording';

export enum TodoDialogTypes {
  Create = "CREATE",
  Edit = "EDIT",
}
interface TodoDialogInterface {
  open: boolean;
  type?: TodoDialogTypes;
  todo?: Todo|null; // Binding when `editing type`
  defaultText?: string;
  onCreate?: any;
  onUpdate?: any;
  onEdit?: any;
  onCancel?: any;
}
const TodoDialog = ({
  open,
  type = TodoDialogTypes.Create,
  todo,
  defaultText = "",
  onCreate,
  onUpdate,
  onCancel,
}: TodoDialogInterface) => {

  const {
    title: _title = "Write title",
  } = todo ? todo : {}
  const isCreateMode = type === TodoDialogTypes.Create // Is create mode
  
  const [ title, setTitle ] = useState(defaultText) // Current editing `title` state
  const [ showWarn, setShowWarn ] = useState(false) // Show restriction snack-bar state
  const [ inputPlaceholder, setInputPlaceholder ] = useState("") // Placeholder value for input field  state

  // Fetch palceholder wording when state `open` is true
  useEffect(() => {
    if (!open) { // Set `inputPlaceholder` state to blank('') after 200ms for animation
      setTimeout(() => {
        setInputPlaceholder("") 
      }, 200)
    } else { // Set `inputPlaceholder` state to by `isCreateMode` flag 
      setInputPlaceholder(isCreateMode ? getWording(wording_type.create_todo) : _title)
    }
  }, [open])

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

  // Displayed word in title prefix of dialog
  const displayedTitlePrefix = isCreateMode ? "Create" : "Edit"
  const displayedConfirmBtnText = isCreateMode ? "Create" : "Update"

  return (
    <Dialog className={styles.add_todo}
      fullWidth={true}
      open={open}
      onClose={_onCancel}>
      <DialogTitle>{displayedTitlePrefix} todo</DialogTitle>
      <DialogContent style={{padding: "0px 24px 8px"}}> {/* Remove top padding */}
        <TextField autoFocus className={styles.input_todo} label="Title" placeholder={inputPlaceholder}
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