import React, { useEffect, useState } from 'react';
import {
  Popover,
  InputBase
} from '@material-ui/core'
import Button from 'styled-mui-components/Button'
import {
  Check
} from '@material-ui/icons'
import styles from 'components/TitleEditor.module.scss'

interface ITitleEditor {
  open: boolean;
  anchorEl: Element|null;
  defaultTitle?: string;
  onClose: () => void;
  onConfirm: (editedTitle: string) => void;
}
const TitleEditor = ({
  open,
  anchorEl = null,
  defaultTitle = "",
  onClose,
  onConfirm,
}: ITitleEditor) => {

  const [ editingTitle, setEditingTitle ] = useState(defaultTitle)
  const onChangeEditingTitle = (e: any) => {
    const { value } = e.currentTarget
    console.log('value :>> ', value);
    setEditingTitle(value)
  }
  
  // Update `editingTitle` state when update props
  useEffect(() => {
    setEditingTitle(defaultTitle)
  }, [defaultTitle])

  // On close popover
  const _onClose = () => {
    onClose()
  }
  
  // On click confirm button
  const onConfirmBtnClicked = () => {
    onConfirm(editingTitle)
    _onClose()
  }

  const onInputKeyPress = (e: any) => {
    console.log('e.key :>> ', e.key);
    if (e.key === 'Enter') { // On enter
      onConfirmBtnClicked()
    }
  }

  const placeHolder = editingTitle ? editingTitle : 'Input text to update!'

  return (
    <Popover className={styles.popover_content} open={open} 
      marginThreshold={0} // Remove margins
      onClose={_onClose}
      anchorEl={anchorEl}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
      <InputBase
        autoFocus={true}
        value={editingTitle}
        onChange={onChangeEditingTitle}
        onKeyPress={onInputKeyPress}
        className={styles.edit_title}
        placeholder={placeHolder}
      />
      <Button className={styles.confirm_button}
        onClick={onConfirmBtnClicked}>
        <Check color="primary" style={{fontSize: '36px'}} />
      </Button>
    </Popover> 
  )
}

export default TitleEditor;