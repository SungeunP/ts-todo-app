import { Check, RadioButtonUncheckedRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Button from '../../styled-mui-components/Button';

import styles from './CheckboxButton.module.scss';
console.log('styles :>> ', styles);

interface CheckboxButton {
  checked?: boolean;
  onChange?: Function;
}

const buttonStyle = {
  minWidth: '50px',
  width: '50px',
  height: '50px',
  padding: '0px',
  borderRadius: '50%',
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
    <Button disableRipple className={styles.checkbox_btn} style={buttonStyle} onClick={buttonOnClicked}>
      <div className={styles.circle}></div>
      {/* <RadioButtonUncheckedRounded color="primary" /> */}
      {/* {_checked && ( */}
        <Check className={`${styles.check} ${_checked ? styles.show  : ''}`} color="primary" />
      {/* )} */}
    </Button>
  )
}

export default CheckboxButton