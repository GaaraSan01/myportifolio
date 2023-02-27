import styled from "styled-components";

export const FormStyle = styled.form`
    height: 70vh;
    min-width: 420px;
    background: var(--azul);
    border-radius: 30px;
    display: grid;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 1020px){
       min-width: 500px;
    }
    @media(max-width: 540px){
        min-width: 350px;
    }
    @media(max-width: 465px){
        width: 100%;
    }
`
export const DivForm = styled.div`
    min-height: 80px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1{
        color: var(--white);
        text-align: center;
    }
    label{
        color: var(--white);
        font-weight: 600;
    }
    input{
        line-height: 28px;
        border: 2px solid transparent;
        border-bottom-color: var(--verde);
        padding: .2rem 0;
        outline: none;
        background-color: transparent;
        color: var(--white);
        transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    input:focus, input:hover {
        outline: none;
        padding: .2rem 1rem;
        border-radius: 1rem;
        border-color: var(--verde);
    }
    textarea{
        min-width: 290px;
        max-width: 300px;
        min-height: 50px;
        max-height: 100px;
        line-height: 28px;
        border: 2px solid transparent;
        border-bottom-color: var(--verde);
        color: var(--white);
        padding: .2rem 0;
        outline: none;
        background-color: transparent;
        transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    textarea:focus, textarea:hover {
        outline: none;
        padding: .2rem 1rem;
        border-radius: 1rem;
        border-color: var(--verde);
    }
    button{
        padding: 10px 20px;
        border: none;
        color: var(--azul);
        background: var(--verde);
        border-radius: 10px;
        text-decoration: none;
        font-weight: 700;
        transition: 0.3s ease-in-out;

        :hover{
            color: var(--white);
            background: transparent;
            border: 1px solid var(--white);
        }
    }
`