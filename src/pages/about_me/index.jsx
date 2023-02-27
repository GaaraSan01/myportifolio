import Menu from "../../components/header"
import { Footer } from "../../components/footer"
//css
import GlobalStyle from "../../style/global"
import { ContentAbout, CopyAbout, DivAbout } from "./style"
import {TitleStyle} from "../home/style"

export const About = () => {
    return(
        <>
            <GlobalStyle />
            <Menu />
            <ContentAbout>
                <CopyAbout>
                    <TitleStyle color="white">
                        <h1>Sobre mim</h1>
                    </TitleStyle>
                    <DivAbout>
                        <p>
                            Olá! Sou Vinícius Henrique, um programador Front-End de Curitiba, PR. 
                            Desde cedo, sempre tive fascínio pela tecnologia e, há quase dois anos, 
                            tenho focado meus estudos em Desenvolvimento Web. <br />
                            Após ter enfrentado dificuldades ao desenvolver sites em WordPress, decidi aprofundar meus conhecimentos 
                            em programação para me tornar um profissional ainda mais capacitado e apto a oferecer soluções eficazes para meus clientes. 
                            Atualmente, estou comprometido com meu objetivo e continuo em busca de aprimoramento constante para me destacar no mercado de trabalho.
                            <br />
                            Se você está procurando um programador Front-End comprometido e dedicado, entre em contato comigo. 
                            Será um prazer ajudar a tornar seu projeto uma realidade!
                        </p>
                    </DivAbout>
                </CopyAbout>
            </ContentAbout>
            <Footer/>
        </>
    )
}