import React, { useState } from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Header from '../components/Navigations/Header';
import SideDrawer from '../components/Navigations/SideDrawer/SideDrawer';

const Layout = props => {
    // state to manage side drawer visibility
    const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

    // when toggle side drawer => open side drawer if closed / close if open
    const sideDrawerToggleHandler = () => {
        setIsSideDrawerVisible(!isSideDrawerVisible);
    }

    const sideDrawerClosedHandler = () => {
        setIsSideDrawerVisible(false);
    }

    return (
        <Auxiliary>
            <Header drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer open={isSideDrawerVisible} closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default Layout;