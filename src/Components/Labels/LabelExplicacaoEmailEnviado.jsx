import style from './labelExplicacaoEmailEnviado.module.css'

export default function label(){
    return(
        <h2 className={style.explicacaoEmailEnviado} id={style.idExplicacaoEmailEnviado}>Por favor, siga as orientações no e-mail para recuperar acesso a sua conta</h2>
    )
}