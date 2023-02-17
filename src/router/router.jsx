import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Home} from "../pages/home"
import { About } from "../pages/about_me"
import {Contact} from "../pages/contact"
import { Project } from "../pages/projects"
 
export const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}