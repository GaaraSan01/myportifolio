import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --azul: #1B1D39;
        --verde: #64BC9E;
        --white: #E6E6E6;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html{
        background: linear-gradient(246.5deg, #1B1D39 0%, #314D57 20.19%, #5EAF96 91.17%, #64BC9E 94.54%);
        background-repeat: repeat-x;
        height: auto;
    }

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        background: linear-gradient(120deg, black, var(--azul), black);
    }
    ::-webkit-scrollbar-thumb{
        background: #e6e6e6;
        border-radius: 50px;
    }
`
export default GlobalStyle