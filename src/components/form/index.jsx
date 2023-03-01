import { FormStyle, DivForm } from "./style"

//Components React
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"


export const Form = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const sendEmail = (event) => {
        event.preventDefault()
        const templatParams = {
            to_name: name,
            e_mail: email,
            message: message
        }

        emailjs.send("service_xgx8onc", "template_0v9dncg", templatParams, "uGY3ymnMzJ9pHQilO")
        .then((response) => {
            console.log("Enviado com sucesso!", response.status, response.text)
        })
        .catch((error) => console.error(error))
    }

    return (
        <FormStyle onSubmit={sendEmail}>
            <DivForm>
                <h1>Entrar em Contato</h1>
            </DivForm>
            <DivForm>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(props) => setName(props.target.value)}
                />
            </DivForm>
            <DivForm>
                <label htmlFor="e-mail">E-mail:</label>
                <input
                    type="text"
                    name="e-mail"
                    id="e-mail"
                    onChange={(props) => setEmail(props.target.value)}
                />
            </DivForm>
            <DivForm>
                <label htmlFor="phrase">Assunto:</label>
                <textarea
                    name="Assunto"
                    id="phrase"
                    cols="30"
                    rows="2"
                    onChange={(props) => setMessage(props.target.value)}
                ></textarea>
            </DivForm>
            <DivForm>
                <button>Enviar</button>
            </DivForm>
        </FormStyle>
    )
}