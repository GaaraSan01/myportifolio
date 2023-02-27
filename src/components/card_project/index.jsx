import { Project } from "./style"


export const Card_Project = ({name, phrases, linkProject}) => {
    return(
        <>
            <Project>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <p>{phrases}</p>
                </div>
                <div><a href={linkProject} target="_blanc">Ver no Github</a></div>
            </Project>
        </>
    )
}
/**
 * Usar target="_blanc" para abrir o link em outra guia;
 * Usar a chamada da api "homepage" quando fazer a hospedagem pela vercel
 */