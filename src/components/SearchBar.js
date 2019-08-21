import React, {Component} from "react"
import axios from "axios"



class SearchBar extends Component{

    state={
        keyword:""
    }

    onSubmitForm=(e)=>{
        e.preventDefault()

        // this.props. untuk mengabil suatu hal dari file lain yang terkait
        this.props.asd()

        axios.get(
            "https://api.unsplash.com/search/photos",
            {
                headers:{
                Authorization: `Client-ID 1397d76dfac35cff5e48fafcb967040783dd3f8fecf3f7d5c9257d891f41636b`
                },
                params: {
                    query : this.state.keyword
                }
            }
        ).then((res)=>{
            // jika berhasil
            console.log(res.data.results);
            
        }).catch((err)=>{
            // jika gagal
            console.log(err.massage);
            
        })
    }

    onChangeText=(e)=>{
        // Menyimpan text dari user di state.keyword
        this.setState({keyword: e.target.value}) 
    }

    render() {
        return (
            <div>
                <h3 className="text-center mt-3">Search Image</h3>
                <form className="form-group mt-5 row" onSubmit={this.onSubmitForm}>
                    <input className="form-control btn-light" 
                        onChange={this.onChangeText}
                        placeholder="search..." 
                        type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar


// onSubmit, ketika text input diEnter
    // e.preventDefault() akan menghentikan halaman agar tidak refresh
// onChange, ketika ada perubahan di tag input text
    // event.target.value, adalah property yang berisi teks yang kita ketik 
// this.setState merupakan finction untuk mengubah data pada state
    // setState akan memnerima saru buah parameter yaitu object{}

// axios.get().then().catch()
    // .then() akan menerima function yang akan dijalankan jika berhasil melakukan request
        // (res)=>{} res berisi respon dari database
    // .catch() akan menerima function yang akan dijakankan jika gagal request
        // (err)=>{} err akan berisi pesan error

// axios.get("",{}.then(()=>{})).catch(()=>{})