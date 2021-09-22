import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Tab, { TTab } from 'types/Tab';

import styles from 'components/CreateTabDialog.module.scss'
import IconEditor from './IconEditor';

interface ICreateTabDialog {
  open: boolean;
  onClose: () => void;
  onCreate: (tab: TTab) => void;
}
const CreateTabDialog = ({
  open,
  onClose,
  onCreate,
}: ICreateTabDialog) => {

  
  const [ iconEditorAnchor, setIconEditorAnchor ] = useState(null)
  const DEFAULT_ICON = "🖤"
  const [ icon, setIcon ] = useState("🖤")
  const DEFAULT_TITLE = ""
  const [ title, setTitle ] = useState(DEFAULT_TITLE)
  const initializeStates = () => {
    setIcon(DEFAULT_ICON)
    setTitle(DEFAULT_TITLE)
  }

  const onInput = (e: any) => {
    const { value } = e.target
    setTitle(value)
  }

  // On confirm button clicked
  const onConfirm = () => {
    if (title.trim() === "") {
      return
    }
    const createdTab = new Tab(icon, title, [])
    onCreate(createdTab)
  }

  const onClickIconBtn = (e: any) => {
    setIconEditorAnchor(e.target)
  }

  const onConfirmIconEditor = (icon: string) => {
    setIcon(icon)
    initializeStates()
  }

  const onTitleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onConfirm()
    }
  }

  const _showIconEditor = Boolean(iconEditorAnchor)

  return (
    <Dialog open={open} fullWidth
      onClose={onClose}>
      <DialogTitle style={{paddingBottom: '12px'}}>Add tab</DialogTitle> {/* Reduce padding of bottom */}
      <DialogContent className={styles.dialog_content}>
        <IconButton className={styles.icon} color="primary"
          onClick={onClickIconBtn}>
          {icon}
        </IconButton>
        <TextField autoFocus className={styles.title} label="Tab title" variant="standard"
          value={title}
          onInput={onInput}
          onKeyPress={onTitleKeyPress} />
        <IconEditor open={_showIconEditor}
          anchorEl={iconEditorAnchor}
          onClose={() => {setIconEditorAnchor(null)}}
          onConfirm={onConfirmIconEditor} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          CREATE
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateTabDialog