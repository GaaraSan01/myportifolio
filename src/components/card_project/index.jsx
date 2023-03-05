import { Project } from "./style"
import {FaGreaterThan, FaCode} from "react-icons/fa"


export const Card_Project = ({ name, phrases, linkProject, deploy }) => {
    return (
        <>
            <Project>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <p>{phrases}</p>
                </div>
                <div>
                    <a href={linkProject} target="_blanc"><FaCode/> Código</a>
                    {deploy === null && null}
                    {deploy === "" && null}
                    {deploy && <a href={deploy} target="_blanc"><FaGreaterThan/> Deploy</a>}
                </div>
            </Project>
        </>
    )
}
/**
 * Usar target="_blanc" para abrir o link em outra guia;
 * Usar a chamada da api "homepage" quando fazer a hospedagem pela vercel
 */