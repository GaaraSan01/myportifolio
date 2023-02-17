import { StyleHeader } from "./style";
import { Link } from "react-router-dom";


export default function Menu(){
    return(
        <StyleHeader>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/project">Projects</Link></li>
                    <li> <Link to="/contact">Contacts</Link></li>
                    <li><Link to="/about">About me</Link></li>
                </ul>
            </div>
      </StyleHeader>
    )
}