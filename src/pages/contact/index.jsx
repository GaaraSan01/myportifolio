//Components
import Menu from "../../components/header"
import { Footer } from "../../components/footer"
import { Form } from "../../components/form"

//Css
import GlobalStyle from "../../style/global"
import { ContentContact, ContactInfos, SpaceContent, AllContacts } from "./style"



export const Contact = () => {
    return(
        <>
            <GlobalStyle />
            <Menu/>
            <ContentContact>
                <ContactInfos>
                    <SpaceContent>
                        <AllContacts>
                            <div>
                                <h1>Hellow World</h1>
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