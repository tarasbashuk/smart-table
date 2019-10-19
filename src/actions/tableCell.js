import {
  SET_TABLE_CELL,
  SET_TABLE_ACTIVE_CELL,
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

