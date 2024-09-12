
import Footer from "../Footer/index.footer";
import Navbar from "../Navbar/index.navbar";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>

        </>
    )


}

export default Layout