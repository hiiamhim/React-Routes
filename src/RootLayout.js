import MainNavigation from "./components/MainNavigation"
import {Outlet} from "react-router-dom"
const RootLayout=props=>{
    return <>
    <MainNavigation></MainNavigation>
    <main >
    <Outlet />
    </main>
    </>
}

export default RootLayout