import React, {Component} from "react"

//this.props.img untuk akses images dari app.js
// img = [{},{},{}...]


class ImageList extends Component{


    renderList=()=>{
        // this.props.data = [{},{},{}]
        // item ={}
        // hasil = [<img/>, <img/>, ...]
        let hasil=this.props.data.map((item)=>{
            return <img src={item.urls.regular} alt=""/>
        })
        return hasil
    }

    render() {
        return (
            <div>
                <h1>Search Results</h1>
                {this.renderList()}
            </div>
        )
    }
}

export default ImageList

// {this.renderList()}
    //akan run function renderList, function tersebut akan meteturn array of images
    // kemudian apa yang si return akan di render bersamaan dengan kompponen yang lain