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
import react from  '../../assets/react.png'
import node from '../../assets/nodeJS.png'
import next from '../../assets/next-js.svg'
import figma from '../../assets/figma.png'

//Styles
import GlobalStyle from '../../style/global'
import { ContentPrincipal, 
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

export function Home() {
  const [api, setApi] = useState([])
  const [projects, setProjects] = useState([])

  //Pegando dados de projetos
   const ProjectsApi = async () => {
      const getProjects = await GetProjects.get()
      const data =  getProjects.data
      setProjects(data)
    }

  useEffect(() => {

    //Pegando dados Principais
    GetApi.get().then(({data}) => {
      setApi(data)
      console.log(data)
    })
    ProjectsApi()
  }, []) 
  console.log()
  return (
    <div>
      <GlobalStyle />
      <Menu />
      <ContentPrincipal>
        {!api && <Load />}
        {api && <Card img={api.avatar_url} name={api.name} bio={api.bio} link={api.html_url}/>}
        <Copy>
            <h1>I`m developer Front-End from Brazil</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Facilis alias minus atque esse laboriosam tenetur pariatur odio debitis eum doloremque, officiis, 
              reprehenderit quam quisquam error cum quos consectetur cupiditate rerum!
            </p>
            <a href="">
              Entrar em contato
            </a>
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
            {
              projects.slice(0,4).map(repos => <Card_Project key={repos.id} img={'test'} name={repos.name} linkProject={repos.html_url}/>)
            }
          </CarrosselImg>
          <span>
           {api && <a href={api.html_url} target="_blank">Quero ver mais...</a>}
           {!api && <p>Carregando...</p>}
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
