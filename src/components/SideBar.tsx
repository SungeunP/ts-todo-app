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

  const [ displayNone, setDisplayNone ] = useState(!open)
  const ANIMATION_MS = 200

  useEffect(() => {
    if (open) {
      setDisplayNone(false)
    } else {
      setTimeout(() => {
        console.log('displayNone set to false', displayNone)
        setDisplayNone(true)
      }, ANIMATION_MS)
    }
  }, [open])

  const _onClose = () => {
    onClose && onClose()
  }
  console.log('displayNone :>> ', displayNone);
  return (
    <div className={`${styles.side_bar} ${open ? styles.show : ''} ${displayNone ? styles.none : ''}`}
      onClick={_onClose}>
      {children}
    </div>
  )
}

export default SideBar
