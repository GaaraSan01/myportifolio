//Components
import Menu from "../../components/header"
import { Footer } from "../../components/footer"
import { Card_Project } from "../../components/card_project"
import {Load} from "../../components/loading"

//css
import { ContentProject, DivProjects, DivVerMais, VerMais } from "./style"
import GlobalStyle from "../../style/global"
import { TitleStyle } from "../home/style"

//api
import { GetProjects } from "../../api/_api"

//React
import { useState, useEffect } from "react"

export const Project = () => {

    const [apiProjects, setApiProjects] = useState([])
    const [total, setTotal] = useState(true)

    const handleClick = () => {
        setTotal(!total)
    }

    const getProjects = async () => {
        const projects = await GetProjects.get()
        const data = projects.data
        setApiProjects(data)
    }

    useEffect(() =>{
        getProjects()
    },[])

    return(
        <>
            <GlobalStyle />
            <Menu />
            <ContentProject>
                <TitleStyle>
                    <h1>Meus Projetos</h1>
                </TitleStyle>
                <DivProjects>
                    {!apiProjects && <Load/>}
                    {total && apiProjects.slice(0,3).map((repos) =>{
                       return <Card_Project key={repos.id} img={"test"} name={repos.name} linkProject={repos.html_url}/>
                    })}
                    {!total && apiProjects.map((repos) => {
                        return <Card_Project key={repos.id} img={"test"} name={repos.name} linkProject={repos.html_url}/>
                    })}
                </DivProjects>
                <DivVerMais>
                    <VerMais onClick={handleClick}>{total ? "Ver mais..." : "Ver menos..."}</VerMais>
                </DivVerMais>
            </ContentProject>
            <Footer/>
        </>
    )
}