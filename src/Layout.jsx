import { Outlet } from 'react-router-dom'
import NavBar from './layout/NavBar'
import SideNav from './layout/SideNav'

const Layout = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                <SideNav />
                <div style={{ display: "flex", flex: "1", borderLeft: "1px solid #E5E7EB" }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout