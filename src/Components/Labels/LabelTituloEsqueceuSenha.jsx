import style from './labelTituloEsqueceuSenha.module.css'

export default function label(){
    return(
        <h1 className={style.tituloEsqueceuSenha} id={style.idTituloEsqueceuSenha}>Esqueceu sua senha?</h1>    
    )
}