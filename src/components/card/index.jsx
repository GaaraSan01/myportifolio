import { CardPerson } from "./style"

export default function Card({img, name, bio, link}) {
    return(
        <CardPerson>
            <img src={img}/>
            <h1>
                {name}
            </h1>
            <p>
                {bio}
            </p>
            <a href={link}>Sabia Mais...</a>
        </CardPerson>
    )
}