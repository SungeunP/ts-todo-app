import { Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField, Typography } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import React from 'react';
import Button from 'styled-mui-components/Button';

// import styles from 'components/SettingDialog.module.scss'

interface ISettingDialog {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}
const SettingDialog = ({
  open,
  onConfirm,
  onClose,
}: ISettingDialog) => {

  const _onClose = () => {
    onClose()
  }

  const _onConfirm = () => {
    onConfirm()
  }

  return (
    <Dialog open={open}
      fullWidth={true}
      onClose={_onClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <Typography> Currently cannot customize todo app 😴 </Typography>
        <Typography> ts-todo-app v0.1.0  </Typography>
        {/* <Typography> </Typography> */}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={_onConfirm}>
          <Check />
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SettingDialog