import React, { useEffect, useState } from 'react';
import {
  Popover,
  InputBase,
  Grid,
  IconButton,
  TextField
} from '@material-ui/core'
import Button from 'styled-mui-components/Button'
import {
  Check
} from '@material-ui/icons'
import styles from 'components/IconEditor.module.scss'

const DEFAULT_ICONS = [
  '💪',
  '📖',
  '🎮',
  '🎨',
  '📈',
  '😥',
  '⚽',
  '🖤',
  '📷',
  '🥼',
  '🎈',
  '✨',
  '🎃',
]

interface IIconEditor {
  open: boolean;
  anchorEl: Element|null;
  defaultIcon?: string;
  onClose: () => void;
  onConfirm: (editedIcon: string) => void;
}
const IconEditor = ({
  open,
  anchorEl = null,
  defaultIcon = "",
  onClose,
  onConfirm,
}: IIconEditor) => {

  // All icons
  const [ icons, setIcons ] = useState<string[]>([])

  // Current selected icon in icon-picker
  const [ editingIcon, setEditingIcon ] = useState(defaultIcon)
  // Current inputed icon
  const [ inputedIcon, setInputedIcon ] = useState("")

  // Fetch icons
  useEffect(() => {
    setTimeout(() => {
      setIcons(DEFAULT_ICONS)
    }, 300)
  }, [])

  // Update `editingIcon` state when update props
  useEffect(() => {
    setEditingIcon(defaultIcon)
  }, [defaultIcon])

  // Update state `editingIcon` when matched each `inputedIcon`, `editingIcon`
  // if not matched, state `editingIcon` set to props `defaultIcon`
  useEffect(() => {
    if (inputedIcon) {
      const findIcon = icons?.find(icon => icon === inputedIcon)
      if (findIcon) {
        setEditingIcon(findIcon)
      }
    } else {
      setEditingIcon(defaultIcon)
    }
  }, [inputedIcon])

  // On close popover
  const _onClose = () => {
    onClose()
    setEditingIcon(defaultIcon)
  }

  // On icon-picker clicked
  const onClickIconPicker = (clickedIcon: string) => {
    setEditingIcon(clickedIcon)
    onConfirm(clickedIcon)
    _onClose()
  }

  // On input field input
  const onInput = (e: any) => {
    const { value } = e.target
    if (value.length <= 2) {
      setInputedIcon(value)
    }
  }
  
  // On input field keypress
  const onInputKeyPress = (e: any) => {
    const { key } = e
    if (key === 'Enter' && inputedIcon.trim() !== "") {
      onConfirmBtnClicked()
    }
  }

  // On click confirm button
  const onConfirmBtnClicked = () => {
    onConfirm(inputedIcon.trim() !== "" ? inputedIcon : editingIcon)
    _onClose()
    const isNewIcon = !(icons?.find(icon => icon === inputedIcon))
    if (isNewIcon) {
      setIcons([inputedIcon].concat(icons))
    }
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
      <div className={styles.popover_wrap}>
        <div className={styles.icon_picker}>
          {icons?.map(icon => (
            <IconButton className={`${styles.icon} ${icon === editingIcon ? styles.selected : ''}`}
              onClick={() => onClickIconPicker(icon)}>
              {icon}
            </IconButton>
          ))
          }
        </div>
        <div className={styles.input_icon}>
          <TextField className={styles.input}
            placeholder="Input emoji"
            value={inputedIcon}
            onInput={onInput}
            onKeyPress={onInputKeyPress} />
          <Button className={styles.confirm_button} variant="contained" color="primary"
            onClick={onConfirmBtnClicked}>
            <Check />
          </Button>
        </div>
      </div>
    </Popover> 
  )
}

export default IconEditor;