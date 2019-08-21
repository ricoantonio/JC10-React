import React, {Component} from "react"

import SearchBar from "./SearchBar"
import ImageList from "./ImageList"

class App extends Component{

    state={
        iamges: []
    }

    fnFromApp=()=>{
        alert("ini dibuat di App.js")
    }

    render(){
        return (
        <div className="container">
            <SearchBar asd = {this.fnFromApp} />
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