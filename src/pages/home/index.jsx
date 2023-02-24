//React dependences
import { useState, useEffect } from 'react'

//Components
import Card from '../../components/card'
import Menu from '../../components/header'
import { MiniCard } from '../../components/miniCard'
import { Card_Project } from '../../components/card_project'
import { Footer } from '../../components/footer'
import { Load } from '../../components/loading'

//Assets
import html5 from '../../assets/html-5.png'
import css3 from '../../assets/css-3.png'
import js from '../../assets/js.png'
import ts from '../../assets/typescript.png'
import react from '../../assets/react.png'
import node from '../../assets/nodeJS.png'
import next from '../../assets/next-js.svg'
import figma from '../../assets/figma.png'

//Styles
import GlobalStyle from '../../style/global'
import {
  ContentPrincipal,
  Conhecimentos,
  Copy,
  TitleStyle,
  GridStyle,
  Projetos,
  CarrosselImg,
  StyleHabilities,
  ContentHabilities
} from './style'

//Api
import { GetApi, GetProjects } from '../../api/_api'
import { Link } from 'react-router-dom'

export function Home() {
  //Mostrando resultados da API
  const [api, setApi] = useState([])
  const [projects, setProjects] = useState([])

  //Tratamento do Card Principal
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)


  //Tratamento dos Projetos da pagina Home
  const [loadingProjects, setLoadingProjects] = useState(true)
  const [isErrorProjects, setIsErrorProjects] = useState(false)

  const ProjectsApi = async () => {
    //Pegandos parte dos Projetos do github
    try {
      const getProjects = await GetProjects.get()
      const data = getProjects.data
      setProjects(data)
    } catch (error) {
      console.error(error)
      setIsErrorProjects(true)
    } finally {
      setLoadingProjects(false)
    }

  }

  const getPerson = () => {
    //Pegando as informações para o Card
    GetApi.get()
      .then(({ data }) => {
        setApi(data)
      })
      .catch((error) => {
        console.error(error)
        setIsError(true)
      })
      .finally(
        setLoading(false)
      )
  }

  useEffect(() => {
    getPerson()
    ProjectsApi()
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Menu />
      <ContentPrincipal>
        {
          loading && <Load />
        }
        {
          isError && (
            <div>
              <p>Não foi possivel carregar os dados...</p>
            </div>
          )
        }
        {!isError && <Card img={api.avatar_url} name={api.name} bio={api.bio} link={api.html_url} />}
        <Copy>
          <h1>I`m developer Front-End from Brazil</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis alias minus atque esse laboriosam tenetur pariatur odio debitis eum doloremque, officiis,
            reprehenderit quam quisquam error cum quos consectetur cupiditate rerum!
          </p>
          <Link to={"/contact"}>
            Entrar em Contato
          </Link>
        </Copy>
      </ContentPrincipal>
      <Conhecimentos>
        <TitleStyle>
          <h1>Conhecimentos</h1>
        </TitleStyle>

        <GridStyle>
          <MiniCard img={html5} word={'HTML5'} />
          <MiniCard img={css3} word={'CSS3'} />
          <MiniCard img={js} word={'JavaScript'} />
          <MiniCard img={ts} word={'TypeScript'} />
          <MiniCard img={react} word={'React'} />
          <MiniCard img={node} word={'NodeJS'} />
          <MiniCard img={next} word={'NextJS'} />
          <MiniCard img={figma} word={'Figma'} />
        </GridStyle>
      </Conhecimentos>
      <Projetos>
        <TitleStyle>
          <h1>Projetos</h1>
        </TitleStyle>
        <CarrosselImg>
          {loadingProjects && <Load />}
          {
            isErrorProjects && (
              <div>
                <p>Não foi possivel carregar os dados...</p>
              </div>
            )
          }
          {!isErrorProjects && projects.slice(0, 4).map(repos => {
            return <Card_Project
              key={repos.id}
              img={'test'}
              name={repos.name}
              linkProject={repos.html_url}
            />
          })}
        </CarrosselImg>
        <span>
          {!isErrorProjects && <Link to={"/project"}>Quero ver mais...</Link>}
        </span>
      </Projetos>
      <StyleHabilities>
        <ContentHabilities>
          <div>
            <h1>Principais Habilidades</h1>
          </div>
          <div>
            <ul>
              <li>Criatividade;</li>
              <li>Inteligencia Emocional;</li>
              <li>Aprendizado Continuo;</li>
              <li>Objetivo & Focado.</li>
            </ul>
          </div>
        </ContentHabilities>
      </StyleHabilities>

      <Footer />
    </div>
  )
}
