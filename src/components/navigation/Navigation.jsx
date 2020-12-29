import React, { useState } from 'react';
import { classNamesFunction } from '@fluentui/react';
import AppBar from './components/app-bar';
import Drawer from './components/drawer';

const classNames = classNamesFunction();
const styles = {
  root: {
    position: 'fixed',
    zIndex: 1002,
    left: 0,
    top: 0,
  },
};

export default function Navigation() {
  const classes = classNames(styles);
  const [navPaneOpened, setOpened] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar toggleDrawer={() => setOpened(true)} />
      <Drawer isOpen={navPaneOpened} toggleDrawer={() => setOpened((prev) => !prev)} />
    </div>
  );
}
