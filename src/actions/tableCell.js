import {SET_TABLE_CELL, UPDATE_TABLE_CELL} from '../actions/types'


export const setTableCell = tableCell =>  dispatch => {
        
    dispatch({
            type: SET_TABLE_CELL,
            payload: tableCell
        })
}