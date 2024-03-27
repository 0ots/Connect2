import style from './labelExplicacaoEsqueceuSenha.module.css'

export default function label(){
    return(
        <h2 className={style.explicacaoEsqueceuSenha} id={style.idExplicacaoEsqueceuSenha}>Por favor, forneça seu e-mail para verficação</h2>
    )
}