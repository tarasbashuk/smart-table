import React, { useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { setTableCell } from "../actions/tableCell"
import getFormatedInputValue from "../helpers/getFormatedInputValue"

const TableCell = ({ id, setTableCell }) => {
  let [inputValue, setInputValue] = useState("")

  const onChange = e => {
    setInputValue(e.target.value)
  }

  const onBlur = () => {
    const formatedInput = getFormatedInputValue(inputValue)
    setInputValue(formatedInput.value)
    setTableCell({
      id,
      value: formatedInput.value,
      type: formatedInput.type
    })
  
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
    }
  }
  const onFocus = () => {
    if (inputValue === "") {
      setInputValue("")
      return
    }
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

export default connect (null, {setTableCell}) (TableCell)
