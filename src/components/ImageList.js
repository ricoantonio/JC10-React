import React, {Component} from "react"

//this.props.img untuk akses images dari app.js
// img = [{},{},{}...]


class ImageList extends Component{


    renderList=()=>{
        // this.props.data = [{},{},{}]
        // item ={}
        // hasil = [<img/>, <img/>, ...]
        let hasil=this.props.data.map((item, index)=>{
            return (
                <img
                    style={{width:"900px"}}
                    className="m-3" 
                    src={item.urls.regular} 
                    alt=""
                    key={index}
                />
            )
            
        })
        return hasil
    }

    render() {
        return (
            <div>
                <h1>Search Results</h1>
                <div className="text-center">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default ImageList

// {this.renderList()}
    //akan run function renderList, function tersebut akan meteturn array of images
    // kemudian apa yang si return akan di render bersamaan dengan kompponen yang lain