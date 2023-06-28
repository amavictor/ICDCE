import {NavigationBar, NavLinks} from "./Navbar.styles";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {NavLink} from "react-router-dom";
export const Navbar = () => {
    return (
        <NavigationBar>
            <h1>SCIMA</h1>
            <ul>
                <NavLinks to={"/about-us"}>About us</NavLinks>
                <NavLinks to={"/about-us"}>Join us</NavLinks>
                <NavLinks to={"/about-us"}>Contact us</NavLinks>
            </ul>

        </NavigationBar>
    )
}