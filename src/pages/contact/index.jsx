//Components
import Menu from "../../components/header"
import { Footer } from "../../components/footer"

//Css
import GlobalStyle from "../../style/global"
import { ContentContact } from "./style"



export const Contact = () => {
    return(
        <>
            <GlobalStyle />
            <Menu/>
            <ContentContact>
                <h1>Testando 123</h1>
            </ContentContact>
            <Footer />
        </>
    )
}