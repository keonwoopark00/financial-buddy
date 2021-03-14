import React from 'react';
import classes from './Logo.module.css';
import moneyLogo from '../../logo.svg';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={moneyLogo} alt="Money Logo" />
        </div>
    );
};

export default logo;