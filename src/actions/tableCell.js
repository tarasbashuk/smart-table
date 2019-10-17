import {
  SET_TABLE_CELL,
  SET_TABLE_ACTIVE_CELL,
  GET_CELLS_DATA
} from "../actions/types"

export const setTableCell = tableCell => dispatch => {
  dispatch({
    type: SET_TABLE_CELL,
    payload: tableCell
  })
}

export const setTableActiveCell = id => dispatch => {
  dispatch({
    type: SET_TABLE_ACTIVE_CELL,
    payload: id
  })
}

export const getCellsArrayData = cellsArray => dispatch => {
  dispatch({
    type: GET_CELLS_DATA,
    payload: cellsArray
  })
}
