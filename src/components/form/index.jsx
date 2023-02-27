import { FormStyle, DivForm } from "./style"


export const Form = () => {
    return(
        <FormStyle>
            <DivForm>
                <h1>Entrar em Contato</h1>
            </DivForm>
            <DivForm>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" />
            </DivForm>
            <DivForm>
                <label htmlFor="e-mail">E-mail:</label>
                <input type="text" name="e-mail" id="e-mail" />
            </DivForm>
            <DivForm>
                <label htmlFor="phrase">Assunto:</label>
                <textarea name="Assunto" id="phrase" cols="30" rows="2"></textarea>
            </DivForm>
            <DivForm>
                <button>Enviar</button>
            </DivForm>
        </FormStyle>
    )
}