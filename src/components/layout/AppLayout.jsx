import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import PageHeader from "./PageHeader";
function AppLayout(){
    return(
        <>
        <Outlet/>
        <NavBar/>
        </>

    )
}
export default AppLayout;