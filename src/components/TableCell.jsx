import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setTableCell, setTableActiveCell } from '../actions/tableCell'

import getFormatedInputValue from '../helpers/getFormatedInputValue'

const TableCell = ({ id, tableCells, setTableCell, setTableActiveCell }) => {
    let cellDataFromProps = {
        value: '',
    }

    if (tableCells.length > 0) {
        tableCells.forEach(cell => {
            if (cell.id === id) {
                cellDataFromProps = cell
            }
        })
    }

    useEffect(() => {
        const formatedInput = getFormatedInputValue(
            cellDataFromProps.value,
            tableCells
        )
        if (
            cellDataFromProps.type === 'function' &&
            !(cellDataFromProps.functionResult === formatedInput.functionResult)
        ) {
            setInputValue(formatedInput.functionResult)

            setTableCell({
                id,
                value: cellDataFromProps.value,
                type: formatedInput.type,
                functionResult: formatedInput.functionResult,
                typeOfResult: formatedInput.typeOfResult,
            })
        }
    }, [tableCells])

    let [inputValue, setInputValue] = useState(cellDataFromProps.value)

    const setFormatedInput = formatedInput => {
        if (formatedInput.type === 'function') {
            setInputValue(formatedInput.functionResult)

            setTableCell({
                id,
                value: inputValue,
                type: formatedInput.type,
                functionResult: formatedInput.functionResult,
                typeOfResult: formatedInput.typeOfResult,
            })
        } else {
            setInputValue(formatedInput.value)
            setTableCell({
                id,
                value: formatedInput.value,
                type: formatedInput.type,
                functionResult: formatedInput.value,
                typeOfResult: formatedInput.typeOfResult,
            })
        }
    }

    const onChange = e => {
        setInputValue(e.target.value)
    }

    const onBlur = () => {
        const formatedInput = getFormatedInputValue(inputValue, tableCells)

        setFormatedInput(formatedInput)
    }

    const onKeyEnter = e => {
        if (e.key === 'Enter') {
            const formatedInput = getFormatedInputValue(inputValue, tableCells)
            setFormatedInput(formatedInput)
            onFocus()
        }
    }
    const onFocus = () => {
        if (inputValue === '') {
            setInputValue('')
        } else if (cellDataFromProps.type === 'function') {
            setInputValue(cellDataFromProps.value)
        } else {
            const formatedInput = inputValue.toString().replace(/\s/g, '')
            setInputValue(formatedInput)
        }

        setTableActiveCell(id)
    }

    return (
        <td>
            <input
                type="text"
                id={id}
                value={inputValue}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={onKeyEnter}
                onFocus={onFocus}
            />
        </td>
    )
}
TableCell.propTypes = {
    id: PropTypes.string.isRequired,
    tableCells: PropTypes.array.isRequired,
    setTableCell: PropTypes.func.isRequired,
    setTableActiveCell: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tableCells: state.tableCell.tableCells,
    activeCell: state.tableCell.activeCell,
    cellsData: state.tableCell.cellsData,
})

export default connect(
    mapStateToProps,
    { setTableCell, setTableActiveCell }
)(TableCell)
