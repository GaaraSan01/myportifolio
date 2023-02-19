import styled from "styled-components";

export const StyleFooter = styled.footer`
    height: 25vh;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background: var(--azul);

    ul{
        display: flex;
        list-style: none;
        gap: 15px;
    }

    li{
        font-size: 27px;
    }
    a{
        text-decoration: none;
        color: var(--white);
        transition: 0.3s ease-in-out;
        padding-botton: 10px;
    }
    a:hover{
        color: var(--verde);
        cursor: pointer;
    }

    p{
        color: var(--verde);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
    }
`