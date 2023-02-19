import styled from "styled-components";

export const Cards = styled.div`
    width: 236px;
    height: 102px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;

    background: var(--verde);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 42px;
        color: var(--azul);
    }

    :hover{
        background: var(--white);
        box-shadow: 0 0px 15px var(--white);
        transform: translateX(.5px) scale(1.05);
    }

    @media(max-width: 550px){
        width: 100%;
    }
`