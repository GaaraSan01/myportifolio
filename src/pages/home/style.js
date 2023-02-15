import styled from 'styled-components'

export const ContentPrincipal = styled.div`
    margin: auto;
    height: 80vh;
    width: 90%;
    border-radius: 45px;
    background: var(--verde);
    display: flex;
    
    align-items: center;
    justify-content: space-around;
    padding: 0 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    height: 90vh;
    width: 100%;
    padding: 25px 0;

    span{
        display: block;
        width: 90%;
        height: auto;
        margin: auto;
    }

    a{
        padding: 10px 20px;
        color: var(--verde);
        background: var(--azul);
        border-radius: 10px;
        text-decoration: none;
        font-weight: 700;
        transition: 0.3s ease-in-out;
    }
    a:hover{
        color: var(--azul);
        background: transparent;
        border: 1px solid var(--azul);
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
`
export const Habilidades = styled.section`
    height: 90vh;
    width: 100%;
    padding: 25px 0;
    display: flex;
    align-items: center;
`
export const HabContent = styled.div`
    margin: auto;
    width: 90%;
    min-height: 448px;
    border-radius: 52px;
    background: var(--azul);
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TituloHab = styled.h1`
    color: var(--verde);
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
`

export const CopyHabi = styled.ul`
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 38px;
    color: var(--verde);
`