import React, { useEffect, useState } from 'react';
import styles from 'components/SideBar.module.scss';

interface ISideBar {
  children?: any;
  open: boolean;
  onClose?: () => void;
}
const SideBar = ({
  children,
  open,
  onClose,
}: ISideBar) => {

  
  const [ _open, setOpen ] = useState(false)
  const [ runAnimation, setRunAnimation ] = useState(false)
  const ANIMATION_MS = 200

  useEffect(() => {
    if (open) {
      setOpen(true)
    } else {
      setRunAnimation(false)
      setTimeout(() => {
        setOpen(false)
      }, ANIMATION_MS)
    }
  }, [open])

  useEffect(() => {
    if (_open) {
      setRunAnimation(true)
    } 
  }, [_open])

  const _onClose = () => {
    onClose && onClose()
  }

  return _open ? (
    <div className={`${styles.side_bar} ${_open ? styles.show : ''} ${runAnimation ? styles.open : ''}`}
      onClick={_onClose}>
      {children}
    </div>
  ) : null
  
}

export default SideBar
