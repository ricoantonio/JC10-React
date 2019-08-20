import React, {Component} from "react"

import SearchBar from "./SearchBar"
import ImageList from "./ImageList"

class App extends Component{
    render(){
        return (
        <div className="container">
            <SearchBar/>
            <ImageList/>
        </div>
        )
    }
}

export default App 


/*
    JSX adalah syntax yang disediakan oleh Javascript
    untuk memudahkan dev menyiusun html di Jacascript
*/