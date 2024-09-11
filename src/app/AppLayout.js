import Header from '../components/Header/Header.js'
import Sidenav from '../components/Sidenav/Sidenav.js'
import { Outlet } from 'react-router-dom'
import './AppLayout.css'

function AppLayout() {
    return (
        <div className='App'>
            <Header />
            <section className='navmain'>
                <nav className='nav'>
                    <Sidenav />
                </nav>
                <main className='main'>
                    <Outlet />
                </main>
            </section>
        </div>
    )
}

export default AppLayout;