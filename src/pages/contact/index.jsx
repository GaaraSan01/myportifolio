//Components
import Menu from "../../components/header"
import { Footer } from "../../components/footer"
import { Form } from "../../components/form"
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa"
//Css
import GlobalStyle from "../../style/global"
import { ContentContact, ContactInfos, SpaceContent, AllContacts } from "./style"
import {TitleStyle} from "../home/style"



export const Contact = () => {
    return(
        <>
            <GlobalStyle />
            <Menu/>
            <ContentContact>
                <TitleStyle color="white">
                    <h1>Contatos</h1>
                </TitleStyle>
                <ContactInfos>
                    <SpaceContent>
                        <AllContacts>
                            <div>
                                <h1>Hellow World</h1>
                                <ul>
                                    <li><FaWhatsapp /> Celular/Whatspp: (41)9 8747-8023;</li>
                                    <li><FaInstagram /> Instagram: @vinih.io;</li>
                                    <li><FaGithub /> GitHub: @GaaraSan01;</li>
                                </ul>
                            </div>
                        </AllContacts>
                    </SpaceContent>
                    <SpaceContent>
                        <Form />
                    </SpaceContent>
                </ContactInfos>
            </ContentContact>
            <Footer />
        </>
    )
}