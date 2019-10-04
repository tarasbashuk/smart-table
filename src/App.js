import React, { Component } from 'react'
// import { Provider } from "react-redux"
import Header from './Header.jsx'

// import store from "./store";

import "./styles/style.css";

class App extends Component {
    render() { 
        return (  
            // <Provider store={store}>
                <div>
                    <h1>It Works!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, vel!</p>
                    <Header></Header>
                </div>
           // </Provider>
        )
    }
}
 
export default App;
