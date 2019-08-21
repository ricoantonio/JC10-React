import React, {Component} from "react"
import axios from "axios"


import SearchBar from "./SearchBar"
import ImageList from "./ImageList"

class App extends Component{

    state={
        images: []
    }

    // function yang akan mengambil keyword dari searchbar untuk merequest gambar
    onSearchSubmit=(keyword)=>{
        // request gambar
        axios.get(
            "https://api.unsplash.com/search/photos",
            {
                headers:{
                Authorization: `Client-ID 1397d76dfac35cff5e48fafcb967040783dd3f8fecf3f7d5c9257d891f41636b`
                },
                params: {
                    query : keyword
                }
            }
        ).then((res)=>{
            // jika berhasil
            //update state untuk property images, di isi dengan hsil search gamber 
            this.setState({images:res.data.results})
            
        }).catch((err)=>{
            // jika gagal
            console.log(err.massage);
            
        })
    }

    render(){
        return (
        <div className="container">
            <SearchBar asd = {this.onSearchSubmit} />
            <ImageList data = {this.state.images} />
        </div>
        )
    }
}

export default App 


/*
    JSX adalah syntax yang disediakan oleh Javascript
    untuk memudahkan dev menyiusun html di Jacascript
*/