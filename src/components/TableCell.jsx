import React, { useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
// TODO delete if not use, also async module fo babel
// import { subscribeActionAfter } from "redux-subscribe-action"

import { setTableCell, setTableActiveCell, getCellsArrayData } from "../actions/tableCell"
import getFormatedInputValue from "../helpers/getFormatedInputValue"
import { getInputFunctionResult } from "../helpers/formFunctionExecution"

const TableCell = ({ id, cellsData, setTableCell, setTableActiveCell, getCellsArrayData }) => {
  let [inputValue, setInputValue] = useState("")
  const onChange = e => {
    setInputValue(e.target.value)
  }

  const onBlur = () => {
    const formatedInput = getFormatedInputValue(inputValue)
    console.log(formatedInput)

    if (formatedInput.cellsArray) {
      getCellsArrayData(formatedInput.cellsArray)
      const result = getInputFunctionResult(inputValue, cellsData)
      setInputValue(inputValue)
      setTableCell({
        id,
        value: result,
        type: formatedInput.type
      })

    } else {    
      setInputValue(formatedInput.value)
      setTableCell({
        id,
        value: formatedInput.value,
        type: formatedInput.type
      })}

    
  }
  const onKeyEnter = e => {
    if (e.key === "Enter") {
      const formatedInput = getFormatedInputValue(inputValue)
      setInputValue(formatedInput.value)
      setTableCell({
        id,
        value: formatedInput.value,
        type: formatedInput.type
      })
      setTableActiveCell(id)
    }
  }
  const onFocus = () => {
     if (inputValue === "") {
      setInputValue("")
      setTableCell({
        id,
        value: "",
        type: "emptyString"
      })
    }
    setTableActiveCell(id)
    const formatedInput = inputValue.replace(/\s/g, "")
    setInputValue(formatedInput)
  }



  return (
    <td>
      <input
        type='text'
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
  setTableCell: PropTypes.func.isRequired,
  setTableActiveCell: PropTypes.func.isRequired,
  getCellsArrayData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  activeCell: state.tableCell.activeCell,
  cellsData: state.tableCell.cellsData
})

export default connect(
  mapStateToProps,
  { setTableCell, setTableActiveCell, getCellsArrayData }
)(TableCell)
