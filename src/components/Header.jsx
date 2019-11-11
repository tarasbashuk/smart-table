import React from 'react'

import injectSheet from 'react-jss'
import styles from './styles/HeaderStyles'

const Header = ({classes}) => {
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Smart table</h1>
            <h2>This ecxel like simple web application</h2>
            <p>
                You can add different types of data in cells: numbers, string,
                money number (with $ sign in the end).
            </p>
            <p>
                You can use =SUM(), =AVERAGE(), =CONCAT() and =HYPER()
                functions. You couldn't get sum and average from differents type
                of data.
            </p>
            <p>
                Functions recalculate result when data in cells changed and can
                refers to result from other functions (the same type of data
                only).
            </p>
        </div>
    )
}

export default injectSheet(styles)(Header) 
