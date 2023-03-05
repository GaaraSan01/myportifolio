import { StyleHeader, Hamburguer, MenuResponsivo } from "./style";
import {FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Menu() {
    const [open, setOpen] = useState(false)

    const handleHamburger = () => {
        setOpen(!open)
    }

    useEffect(() => {
        document.body.style.overflowY = open ? "hidden" : "auto"
    },[open])

    return (
        <>
            <StyleHeader>
                <div>
                    <h1><Link to={"/"}>VH</Link></h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/project">Projetos</Link></li>
                        <li> <Link to="/contact">Contatos</Link></li>
                        <li><Link to="/about">Sobre mim</Link></li>
                    </ul>
                    <Hamburguer onClick={handleHamburger} isVisible={open}>
                        {open && <FaTimes/>}
                        {!open && <><span /><span /><span /></>}
                    </Hamburguer>
                </div>
            </StyleHeader>
            <MenuResponsivo isVisible={open}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/project">Projects</Link></li>
                    <li> <Link to="/contact">Contacts</Link></li>
                    <li><Link to="/about">About me</Link></li>
                </ul>
            </MenuResponsivo>
        </>
    )
}