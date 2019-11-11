import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import injectSheet from 'react-jss'
import styles from './styles/ResultCellStyles'

const ResultCell = ({ classes, activeCell }) => {
    let result = '',
        id = ''

    if (activeCell) {
        result = activeCell.functionResult
        id = activeCell.id
    }

    return (
        <tr className={classes.topRow}>
            <th></th>
            <th className = {classes.resultCaption}>Current cell:</th>
            <th className = {classes.resultCell}>{id}</th>
            <th colSpan="2" className = {classes.resultCaption}>Current result: </th>
            <th colSpan="7" className = {classes.resultCell}>{result}</th>
        </tr>
    )
}

ResultCell.propTypes = {
    activeCell: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    activeCell: state.tableCell.activeCell
})

export default connect(
    mapStateToProps,
    null
)(injectSheet(styles)(ResultCell))
