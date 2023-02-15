import { Cards } from "./style"

export const MiniCard = ({img, word}) => {
    return(
        <>
            <Cards>
                <img src={img} alt="" />
                <p>{word}</p>
            </Cards>
        </>
    )
}