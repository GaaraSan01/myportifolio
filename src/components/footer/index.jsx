import { StyleFooter } from "./style"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"

export const Footer = () => {
    return(
        <StyleFooter>
            <ul>
                <li><a href="https://github.com/GaaraSan01" target="_blanc"><FaGithub/></a> </li>
                <li> <a href="https://www.instagram.com/vinih.io/" target="_blanc"><FaInstagram/></a> </li>
                <li> <a href="https://www.linkedin.com/in/vin%C3%ADcius-henrique-machado-598435247/" target="_blanc"><FaLinkedin/></a> </li>
            </ul>
            <p>
                &copy;Vinícius H.
            </p>
        </StyleFooter>
    )
}