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
                            Após desenvolver alguns sites em WordPress, encontrei algumas dificuldades em executar tarefas mais complexas. 
                            Isso despertou em mim uma vontade ainda maior de aprimorar minhas habilidades 
                            em programação e me tornar um profissional renomado nessa área.
                            <br />
                            Continuo comprometido com meu objetivo e buscando constantemente me atualizar e aprimorar minhas habilidades como programador Front-End, 
                            a fim de oferecer as melhores soluções para meus clientes e projetos.
                        </p>
                    </DivAbout>
                </CopyAbout>
            </ContentAbout>
            <Footer/>
        </>
    )
}
