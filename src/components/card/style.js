import styled from "styled-components"

export const CardPerson  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 10px;
    
    height: 85%;
    min-width: 350px;
    max-width: 32vw;
    background: #1B1D39;
    color: white;
    border-radius: 48px;

    h1{
        user-select: none;
        font-weight: 500;
    }

    img{
        width: 166px;
        height: 166px;
        border-radius: 50%;
    }

    p{
        color: #f1f1f1;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: justify;
        user-select: none;
    }

    a{
        text-align: center;
        padding: 10px;
        width: 100%;
        text-decoration: none;
        color: #1B1D39;
        font-weight: bold;
        background: #64BC9E;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
    }

    a:hover{
        border: 1px solid #64BC9E;
        color: #64BC9E;
        background: transparent;
    }
    @media(max-width: 820px){
        max-width: 70vw;
        padding: 50px;
    }
`