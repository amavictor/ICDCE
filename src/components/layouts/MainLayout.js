import {Navbar} from "../navbar/Navbar";
import {Footer} from "../footer/Footer";

export const MainLayout =({children})=>{
    return(
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}