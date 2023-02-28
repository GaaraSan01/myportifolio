import styled, { css } from "styled-components"
export const StyleHeader = styled.header`
    height: 15vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        height: 60px;
        width: 45vw;
        background: #64BC9E;
        border-radius: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        h1{
            display: none;
        }
    }

    ul{
        display: flex;
        gap: 2vw;
        list-style: none;
        font-weight: 700;
    }
    li{
        cursor: pointer;
        color: var(--azul);
    }
    a{
        text-decoration: none;
        color: var(--azul);
    }
    @media(max-width: 978px){
        div{
            width: 90%;
            justify-content: space-around;
            h1{
                color: var(--azul);
                font-size: 30px;
                display: block;
            }
        }
        ul li{
            display: none;
        }
    }
`

export const Hamburguer = styled.span`
    cursor: pointer;
    span{
        width: 32px;
        height: 3px;
        background: var(--azul);
        border-radius: 2px;
        margin: 4px;
        transition: 0.3s;
        display: none;

        @media(max-width: 978px){
            display: block;
        }
    }
    color: var(--azul);
    font-size: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MenuResponsivo = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 14vh;
    right: 0px;
    left: 0px;
    margin: auto;
    width: 90%;
    background: rgba(100, 188, 158, 0.67);
    backdrop-filter: blur(10px);
    border-radius: 48px;
    z-index: 1;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
    transition: 0.6s;

    ul{;
        display: flex;
        flex-direction: column;
        list-style: none;
        text-align: center;
        gap: 40px;
        li{
            font-size: 20px;
            font-weight: 600;
            a{
                text-decoration: none;
                color: var(--azul);
            }
        }
    }

   ${({isVisible}) => isVisible && css`
        height: calc(100vh - 16vh);
        visibility: visible;
    `}
`