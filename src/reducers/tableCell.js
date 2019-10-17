import {
  SET_TABLE_ACTIVE_CELL,
  SET_TABLE_CELL,
  GET_CELLS_DATA
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

    case GET_CELLS_DATA:
      const cellsData = payload.map(cellID => {
        let value
        state.tableCells.forEach(cell => {
          if (cell.id === cellID) value = cell.value
        })
        return value
      })
      return { ...state, cellsData: cellsData }

    default:
      return { ...state }
  }
}
