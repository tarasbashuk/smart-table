import {SET_TABLE_CELL, UPDATE_TABLE_CELL} from '../actions/types'
const initialState = []

export default function(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        // case SET_TABLE_CELL:
        //     return [...state, payload]
        case SET_TABLE_CELL:
            const updatedTableCells = state.filter(cell => cell.id !== payload.id)
            return [...updatedTableCells, payload]

        default:
            return [...state]      
    }
}