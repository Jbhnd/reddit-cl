import Header from '../components/Header/Header'
import Sidenav from '../components/Sidenav/Sidenav'
import { Outlet } from 'react-router-dom'
import './AppLayout.css'

function AppLayout() {
    return (
        <div className='App'>
            <Header />
            <nav className='nav'>
                <Sidenav />
            </nav>
            <section className='page'>
                <Outlet />
            </section>
        </div>
    )
}

export default AppLayout;