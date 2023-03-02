import styled from "styled-components";


export const ContentContact = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
export const ContactInfos = styled.div`
    height: auto;
    padding: 20px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 48px;
    margin-top: 20px;

    @media(max-width: 1080px){
        flex-direction: column-reverse;
        gap: 40px;
    }
    @media(max-width: 445px){
        width: 100%;
        padding: 0;
    }
`

export const SpaceContent = styled.div`
    height: 90%;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1020px){
        width: 90%;
    }
    @media(max-width: 520px){
        width: 100%;
    }
`
export const AllContacts = styled.div`
    height: 70vh;
    max-width: 90%;
    min-width: 450px;
    background: url("https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80") no-repeat center center;
    border-radius: 30px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        height: 95%;
        width: 95%;
        min-width: 320px;
        padding: 20px;
        backdrop-filter: blur(25px) saturate(180%);
        -webkit-backdrop-filter: blur(25px) saturate(180%);
        background-color: rgba(17, 25, 40, 0.32);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        display: grid;
        place-items: center;
        
        h1{
            color: var(--white);
        }

        ul{
            list-style: none;
        }
        li{
            font-weight: 500;
            color: var(--white);
        }

        @media(max-width: 1115px){
            ul li{
                font-size: 16px;
            }
        }
        @media(max-width: 545px){
            ul li{
                font-size: 12px;
            }
            min-width: 300px;
        }
    }
    @media(max-width: 1020px){
        width: 90%;
    }
    @media(max-width: 545px){
        min-width: 100%;
        height: 60vh;
    }
`