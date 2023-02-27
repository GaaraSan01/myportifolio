import styled from "styled-components";

export const Project = styled.div`
    min-width: 310px;
    max-width: 310px;
    height: 335px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0px 0px 25px;
    background: var(--verde);
    border-radius: 20px;
    gap: 35px;
    margin: 10px;
    transition: .3s ease-in-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover{
        transform: translateX(.5px) scale(1.03);
    }
    
    div{
        width: 90%;
        height: 50px;
        padding: 15px;
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
        p{
            color: var(--azul);
            font-size: 14px;
        }
        h2{
            font-size: 26px;
            color: var(--azul);
        }
    }
`
