import React,{useState} from "react";


const Navbar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchClick = (e) => {
        e.preventDefault();
        if (searchTerm) {
            onSearch(searchTerm);
        }
    };

    return (

        <nav className="navbar navbar-light" style={{ backgroundColor: " #e3f2fd" }}>
            <div className="container-fluid">
                <b><a className="navbar-brand">Skycast</a></b>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="text" placeholder="Search location " aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className="btn btn-outline-success" type="submit" onClick={handleSearchClick}>Search</button>
                </form>
            </div>
        </nav>

    )


}


export default Navbar