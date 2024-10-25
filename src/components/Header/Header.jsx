import './Header.css'
import { BiSearchAlt } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Header() {
    const [ searchTerm, setSearchTerm ] = useState('')
    const navigate = useNavigate();
    
    const onClick = (e) => {
        e.preventDefault();
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate({
            pathname: "/search",
            search: `?q=${searchTerm}`
        })
    }
    
    return (
        <header>
            <div className='navmenu-navlink'>
                <RiMenuFill className='nav-menu' />
                <Link className='nav-link' to='/'>
                    <figure className='logo-caption'>
                        <img
                            src={require('../../images/reddit-icon-transparentt.png')}
                            alt='The reddit logo'
                        />
                        <figcaption className='caption'><span className='span'>reddit</span>Client</figcaption>
                    </figure>
                </Link>
            </div>
            <form className='search-form' role='search' onSubmit={handleSearch}>
                <BiSearchAlt className='icon' />
                <input className='searchInput' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
            </form>
            <div className='login-box'>
                <button onClick={onClick}>login</button>
                <button>ttt</button>
            </div>
        </header>
    )
}

export default Header;