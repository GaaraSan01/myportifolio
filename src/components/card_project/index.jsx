import { Project } from "./style"

export const Card_Project = ({img, phrase, linkProject}) => {
    return(
        <>
            <Project>
                <img src={img} alt="" />
                <h2>{phrase}</h2>
                <a href={linkProject} target="_blanc">Ver no Github</a>
            </Project>
        </>
    )
}
/**
 * Usar target="_blanc" para abrir o link em outra guia;
 * Usar a chamada da api "homepage" quando fazer a hospedagem pela vercel
 */