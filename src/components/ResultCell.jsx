import React from "react"
import { connect } from "react-redux"
// import PropTypes from "prop-types"

const ResultCell = ({ activeCell }) => {
  let result = "", id = ""

  if (activeCell)  {
    result = activeCell.functionResult
    id = activeCell.id
} 

  return (
    <tr>
      <th></th>
      <th>Current cell:</th>
      <th>{id}</th>
      <th>Current result: </th>
      <th colSpan="7">{result}</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  )
}

// ResultCell.propTypes = {
//   activeCell: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  activeCell: state.tableCell.activeCell
})

export default connect(
  mapStateToProps,
  null
)(ResultCell)
