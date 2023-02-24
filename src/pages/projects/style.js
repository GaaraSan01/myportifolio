import styled from "styled-components"

export const ContentProject = styled.section`
    min-height: 85vh;
    width: 100%;
`
export const DivProjects = styled.div`
    margin: 30px auto;
    height: auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    justify-items: center;
    align-items: center;
    gap: 10px;
`
export const DivVerMais = styled.div`
    height: 20px;
    margin: 20px auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: var(--white);
        font-weigth: 600;
    }
`

export const VerMais = styled.button`
    padding: 10px 20px;
    border: none;
    color: var(--verde);
    background: var(--azul);
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
    transition: 0.3s ease-in-out;

    :hover{
        color: var(--azul);
        background: transparent;
        border: 1px solid var(--azul);
    }
`