import styled from "styled-components";

export const Project = styled.div`
    max-width: 310px;
    height: 335px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 25px;
    background: var(--verde);
    border-radius: 20px;
    gap: 35px;
    margin: 10px;
    transition: .3s ease-in-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img{
        
        width: 310px;
        height: 335px;
        left: 102px;
        top: 275px;
    }
    :hover{
        transform: translateX(.5px) scale(1.03);
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
