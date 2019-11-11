import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import makeTable from '../helpers/makeTable'

import ResultCell from './ResultCell'
import URLPreviewModal from './URLPreviewModal'



const MainTable = ({showURLPreview}) => {
    
    const table = makeTable(35)

    return ( 
        <div >
            <table>
                <thead>
                    <ResultCell/>    
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
            {showURLPreview && <URLPreviewModal/>}
            
        </div>
     )
}

MainTable.propTypes = {
    showURLPreview: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    showURLPreview: state.URLPreview.showURLPreview,
})
 
export default connect(mapStateToProps, null) (MainTable)

