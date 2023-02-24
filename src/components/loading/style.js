import styled from "styled-components";

export const DivLoad = styled.div`
    height: 200px;
    width: 300px;
    margin: auto;

    display: grid;
    place-items: center;
`

export const StyledLoad = styled.div`
    height: 60px;
    width: 60px;
    background: transparent;
    border: 5px solid #64BC9E;
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: loading 2s linear infinite;


    @keyframes loading{
        0%{
            transform: rotate(0deg);
            border: 5px solid #f1f1f1;
            border-top: 5px solid transparent;
        }
        100%{
            transform: rotate(360deg);
            border: 5px solid #64BC9E;
            border-top: 5px solid transparent;
        }
    }
`
    
