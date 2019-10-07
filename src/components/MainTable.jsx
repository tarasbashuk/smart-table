import React from 'react'
import PropTypes from 'prop-types'
import TableCell from './TableCell'

import makeTable from '../helpers/makeTable'


const MainTable = () => {
   
    const table = makeTable(25)

    return ( 
        <div className="container">
            <table>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
     )
}
 
export default MainTable;

