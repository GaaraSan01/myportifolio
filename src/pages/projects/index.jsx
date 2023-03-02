//Components
import Menu from "../../components/header"
import { Footer } from "../../components/footer"
import { Card_Project } from "../../components/card_project"
import { Load } from "../../components/loading"

//css
import { ContentProject, DivProjects, DivVerMais, VerMais } from "./style"
import GlobalStyle from "../../style/global"
import { TitleStyle } from "../home/style"

//api
import { GetProjects } from "../../api/_api"

//React
import { useState, useEffect } from "react"

export const Project = () => {
    //Pegando mostrando dados da API
    const [apiProjects, setApiProjects] = useState([])

    //Tratamente dos Resultados
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    //Ver mais...
    const [total, setTotal] = useState(true)

    const handleClick = () => {
        setTotal(!total)
    }

    const getProjects = async () => {
        //Pegando os projetos
        try {
            const projects = await GetProjects.get()
            const data = projects.data
            setApiProjects(data)
        } catch (error) {
            console.log(error.message)
            setIsError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <>
            <GlobalStyle />
            <Menu />
            <ContentProject>
                <TitleStyle color="white">
                    <h1>Meus Projetos</h1>
                </TitleStyle>
                <DivProjects>
                    {loading && <Load />}
                    {!isError && total && apiProjects.slice(0, 3).map((repos) => {
                        return <Card_Project key={repos.id} name={repos.name} phrases={repos.description} linkProject={repos.html_url} />
                    })}
                    {!isError && !total && apiProjects.map((repos) => {
                        return <Card_Project key={repos.id} name={repos.name} phrases={repos.description} linkProject={repos.html_url} />
                    })}
                </DivProjects>
                <DivVerMais>
                    {loading && (
                        <p>Carregando...</p>
                    )}
                    {isError && (
                        <p>Error ao carregar os projetos...</p>
                    )}
                    {!loading && !isError && (
                        <VerMais onClick={handleClick}>
                            {total ? "Ver mais..." : "Ver menos..."}
                        </VerMais>
                    )}
                </DivVerMais>
            </ContentProject>
            <Footer />
        </>
    )
}