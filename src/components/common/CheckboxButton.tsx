import { Check, RadioButtonUncheckedSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Button from '../../styled-mui-components/Button';

import styles from './CheckboxButton.module.scss';

interface CheckboxButton {
  checked?: boolean;
  onChange?: Function;
}
const IconStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  fontSize: '3rem',
}
const CheckboxButton = ({checked, onChange}: CheckboxButton) => {

  const [ _checked, setChecked ] = useState(checked)

  useEffect(() => {
    onChange && onChange(_checked)
  }, [_checked])

  const buttonOnClicked = (e: any) => {
    setChecked(!_checked)
  }

  return (
    <Button className={styles.checkbox_btn} onClick={buttonOnClicked}>
      <RadioButtonUncheckedSharp/>
      {_checked && (
        <Check/>
      )}
    </Button>
  )
}

export default CheckboxButton