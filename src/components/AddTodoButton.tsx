import { Add } from '@material-ui/icons';
import React from 'react';

import styles from 'components/AddTodoButton.module.scss';
import { Fab } from '@material-ui/core';

interface AddTodoButtonInterface {
  onClick: any;
}
const AddTodoButton = ({
  onClick
}: AddTodoButtonInterface) => {

  const _onClick = () => {
    onClick()
  }

  return (
    <Fab className={styles.add_button} onClick={_onClick} aria-label="create todo">
      <Add />
    </Fab>
  )
}

export default AddTodoButton