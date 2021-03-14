import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Financial Buddy</NavigationItem>
        <NavigationItem link="/tax">Tax Calculator</NavigationItem>
        <NavigationItem link="/tip">Tip Calculator</NavigationItem>
        <NavigationItem link="/currency">Currency Exchanger</NavigationItem>
      </ul>
    );
  }
  
  export default navigationItems;