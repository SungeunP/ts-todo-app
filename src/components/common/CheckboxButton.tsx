import { Check } from '@material-ui/icons';
import React from 'react';
import Button from 'styled-mui-components/Button';

import styles from 'components/common/CheckboxButton.module.scss';

interface ICheckboxButton {
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

const CheckboxButton = ({checked, onChange}: ICheckboxButton) => {

  const buttonOnClicked = (e: any) => {
    e.stopPropagation()
    onChange && onChange(!checked)
  }

  return (
    <Button disableRipple className={styles.checkbox_btn} style={buttonStyle}
      onClick={buttonOnClicked}>
      <div className={styles.circle}></div>
      <Check className={`${styles.check} ${checked ? styles.show  : ''}`} color="primary" />
    </Button>
  )
}

export default CheckboxButton