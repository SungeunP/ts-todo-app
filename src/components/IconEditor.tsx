import React, { useEffect, useState } from 'react';
import {
  Popover,
  InputBase
} from '@material-ui/core'
import Button from 'styled-mui-components/Button'
import {
  Check
} from '@material-ui/icons'
import styles from 'components/IconEditor.module.scss'

interface IIconEditor {
  open: boolean;
  anchorEl: Element|null;
  defaultIcon?: string;
  onClose: () => void;
  onConfirm: (editedTitle: string) => void;
}
const IconEditor = ({
  open,
  anchorEl = null,
  defaultIcon = "",
  onClose,
  onConfirm,
}: IIconEditor) => {

  const [ editingIcon, setEditingIcon ] = useState(defaultIcon)
  
  // Update `editingIcon` state when update props
  useEffect(() => {
    setEditingIcon(defaultIcon)
  }, [defaultIcon])

  // On close popover
  const _onClose = () => {
    onClose()
  }
  
  // On click confirm button
  const onConfirmBtnClicked = () => {
    onConfirm(editingIcon)
    _onClose()
  }


  return (
    <Popover className={styles.popover_content} open={open} 
      marginThreshold={0} // Remove margins
      onClose={_onClose}
      anchorEl={anchorEl}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
    </Popover> 
  )
}

export default IconEditor;