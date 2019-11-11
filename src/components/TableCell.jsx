import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setTableCell, setTableActiveCell } from '../actions/tableCell'
import { showURLPreview } from '../actions/URLPreview'


import getFormatedInputValue from '../helpers/getFormatedInputValue'

const TableCell = ({ id, tableCells, setTableCell, setTableActiveCell, showURLPreview }) => {
    let cellDataFromProps = {
        value: '',
    }

    // Get data from store for specifiс cell

    if (tableCells.length > 0) {
        tableCells.forEach(cell => {
            if (cell.id === id) {
                cellDataFromProps = cell
            }
        })
    }

    // Update the result of the function if the cells that the function refers to have changed data
    useEffect(() => {
        const formatedInput = getFormatedInputValue(
            cellDataFromProps.value,
            tableCells,
            id
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

    // Update cell's data in store

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
            if(formatedInput.typeOfResult === "URLString") {
                console.log("formatedInput", formatedInput.functionResult)
                showURLPreview(formatedInput.functionResult)
            }
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

    // Input handler

    const onChange = e => {
        setInputValue(e.target.value)
    }

    // On blur function get data from user, got function result if it needs, formatted input and set input value
    const onBlur = () => {
        const formatedInput = getFormatedInputValue(inputValue, tableCells, id)
        setFormatedInput(formatedInput)
    }

    // The same behavior as at on blur

    const onKeyEnter = e => {
        if (e.key === 'Enter') {
            const formatedInput = getFormatedInputValue(inputValue, tableCells, id)
            setFormatedInput(formatedInput)
            onFocus()
        }
    }

    // If it's a function it will  insert in input value a body of function, not an result
    // or just format the value for convenience. Also set current active cell to display address
    // of the cell and result in separate component

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
})

export default connect(
    mapStateToProps,
    { setTableCell, setTableActiveCell, showURLPreview }
)(TableCell)
