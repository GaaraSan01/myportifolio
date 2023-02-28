import styled from "styled-components"

export const ContentAbout = styled.section`
    min-height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CopyAbout = styled.div`
    min-height: 70vh;
    width: 90%;
    background: var(--azul);
    border-radius: 48px;
    margin-top: 10vh;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const DivAbout = styled.div`
    min-height: 300px;
    width: 90%;
    margin: 5vh auto;
    padding: 15px;
    p{
        text-align: justify;
        color: var(--white);
    }
    @media(max-width: 414px){
        p{
            text-align: start;
        }
    }
`