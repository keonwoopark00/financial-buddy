import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Header.module.css';
import NavigationItems from './NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

const header = props => {
    return (
        <header className={classes.Header}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default header;