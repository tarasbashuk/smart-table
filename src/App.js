import React, { Component } from 'react'
import { Provider } from "react-redux"
import Header from './components/Header.jsx'
import MainTable from './components/MainTable.jsx'


import store from "./store";

import "./styles/style.css";

class App extends Component {
    render() { 
        return (  
            <Provider store={store}>
                <div>
                    <Header>
                    </Header>
.                    <MainTable></MainTable>
                </div>
           </Provider>
        )
    }
}
 
export default App;
