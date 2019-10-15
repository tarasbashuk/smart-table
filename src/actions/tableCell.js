import {SET_TABLE_CELL, GET_TABLE_CELL} from '../actions/types'


export const setTableCell = tableCell =>  dispatch => {
        
    dispatch({
            type: SET_TABLE_CELL,
            payload: tableCell
        })
}

export const getTableCell = id =>  dispatch => {
        
    dispatch({
            type: GET_TABLE_CELL,
            payload: id
        })
}