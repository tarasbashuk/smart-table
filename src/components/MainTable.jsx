import React from 'react'
// import PropTypes from 'prop-types'

import makeTable from '../helpers/makeTable'
import ResultCell from './ResultCell'


const MainTable = () => {
    
    const table = makeTable(15)

    return ( 
        <div className="container">
            <table>
                <thead>
                    <ResultCell/>    
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
     )
}
 
export default MainTable

