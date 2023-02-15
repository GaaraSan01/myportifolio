import styled from "styled-components"
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
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
`