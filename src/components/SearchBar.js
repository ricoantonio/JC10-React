import React, {Component} from "react"

class SearchBar extends Component{

    onSubmitForm=(e)=>{
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h3 className="text-center mt-3">Search Image</h3>
                <form className="form-group mt-5 row" onSubmit={this.onSubmitForm}>
                    <input className="form-control btn-light" 
                        onChange={ (e)=>{console.log(e.target.value)} }
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