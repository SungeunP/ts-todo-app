import { Button } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './header.scss'

const Header = () => {
  

  return (
    <div className="header">
      <Button>
        <MenuIcon />
      </Button>
    </div>
  )
}

export default Header