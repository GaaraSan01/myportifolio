import styled from 'styled-components'

export const ContentPrincipal = styled.div`
    margin: auto;
    min-height: 80vh;
    width: 90%;
    border-radius: 45px;
    background: var(--verde);
    display: flex;
    
    align-items: center;
    justify-content: space-around;
    padding: 0 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media(max-width: 1100px){
        width: 95%;
    }
    @media(max-width: 885px){
        padding: 0 25px;
    }
    @media(max-width: 820px){
        flex-direction: column;
        padding: 20px;
    }
`
export const Copy = styled.div`
    max-width: 600px;
    min-width: 150px;
    height: auto;
    padding: 30px;

    h1{
        font-weight: 700;
        font-size: 36px;
        line-height: 49px;
        color: var(--azul);
        margin: 30px 0;
    }
    p{
        margin-bottom: 32px;
        text-align: justify;
    }

    a{
        padding: 10px 20px;
        color: var(--azul);
        background: transparent;
        border: 1px solid var(--azul);
        border-radius: 10px;
        text-decoration: none;
        font-weight: 700;
        transition: 0.3s ease-in-out;
    }
    a:hover{
        color: var(--verde);
        background: var(--azul);
    }

    @media(max-width: 986px){
        h1{
            font-size: 28px;
        }
        p{
            font-size: 14px;
        }
    }
    @media(max-width: 820px){
        padding: 10px;
    }
`

export const Conhecimentos = styled.section`
    min-height: 55vh;
    width: 100%;
    padding: 25px 0;
`
export const TitleStyle = styled.div`
    height: 15vh;
    width: 90%;
    margin: auto;
    padding-top: 50px;

    color: var(--azul);
    h1{
        position: absolute;
        font-weight: 700;
        font-size: 36px;
        line-height: 49px;
    }
    h1::after{
        position: absolute;
        bottom: 0;
        left: 0;

        content: "";
        height: 4px;
        width: 70%;
        border-radius: 2px;
        background-color: var(--azul);
    }
`
export const GridStyle = styled.div`
    height: auto;
    width: 90%;
    margin: 35px auto;
    gap: 20px 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
    justify-items: center;
    align-items: center;
`
export const Projetos = styled.section`
    max-height: 80vh;
    width: 100%;
    padding: 25px 0;
    margin-bottom: 15vh;

    span{
        display: block;
        width: 90%;
        height: auto;
        margin: auto;
    }
`
export const CarrosselImg = styled.div`
    width: 90%;
    display: flex;
    border-radius: 20px;
    margin: 32px auto;
    height: 372px;
    left: 96px;
    top: 1509px;
    overflow-x: scroll;
    ::-webkit-scrollbar-track{
        background: transparent;
    }
    ::-webkit-scrollbar-thumb{
        background: var(--azul);
        border-radius: 25px;
    }
    ::-webkit-scrollbar{
        height: 7px;
    }
`

export const StyleHabilities = styled.section`
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentHabilities = styled.div`
    min-height: 80%;
    width: 90%;
    background: var(--azul);
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        width: 45%;;
        -height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
    }
    h1{
        font-size: 40px;
    }
    ul li{
        font-size: 20px;
    }
    @media(max-width: 660px){
        h1{
            font-size: 30px;
        }
        ul li{
            font-size: 16px;
        }
    }
    @media(max-width: 500px){
        flex-direction: column;
    }
`