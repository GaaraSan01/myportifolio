import styled from "styled-components";


export const ContentContact = styled.section`
    height: auto;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 15px;
`
export const ContactInfos = styled.div`
    height: 90vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 48px;
`

export const SpaceContent = styled.div`
    height: 90%;
    width: 45%;
    display: grid;
    place-items: center;
`
export const AllContacts = styled.div`
    height: 70vh;
    width: 90%;
    background: url("https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80") no-repeat center center;
    border-radius: 30px;
    padding: 25px;
    display: grid;
    place-items: center;

    div{
        height: 95%;
        width: 95%;
        backdrop-filter: blur(25px) saturate(180%);
        -webkit-backdrop-filter: blur(25px) saturate(180%);
        background-color: rgba(17, 25, 40, 0.32);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        display: grid;
        place-items: center;
        color: var(--azul);
    }
`