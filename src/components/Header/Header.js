import logo from '../../logo.svg'
import './Header.css'
import { BiSearchAlt } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";

function Header() {
    return (
        <header>
            <div className='navmenu-logobox'>
                <RiMenuFill className='nav-menu' />
                <figure className='logo-box'>
                    <img src={require("../../images/reddit-icon-transparentt.png")} alt='The reddit logo' />
                    <figcaption>redditclient</figcaption>
                </figure>
            </div>
            <search className='search-box'>
                <BiSearchAlt className='icon' />
                <input className='searchInput'></input>
            </search>
            <div className='login-box'>
                <button>login</button>
                <button>ttt</button>
            </div>
        </header>
    )
}

export default Header;