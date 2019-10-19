import {
  SET_TABLE_ACTIVE_CELL,
  SET_TABLE_CELL
} from "../actions/types"

const initialState = {
  tableCells: [],
  cellsData: [],
  activeCell: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_TABLE_ACTIVE_CELL:
      return {
        ...state,
        activeCell: state.tableCells.find(cell => payload === cell.id)
      }

    case SET_TABLE_CELL:
      const updatedTableCells = state.tableCells.filter(
        cell => cell.id !== payload.id
      )
      return { ...state, tableCells: [...updatedTableCells, payload] }

    default:
      return { ...state }
  }
}
