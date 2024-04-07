import style from './labelExplicacaoContaCriada.module.css'

export default function label(){
    return (
        <h2 className={style.explicacaoContaCriada} id={style.idExplicacaoContaCriada}>Por favor, realize o login para continuar</h2>
    )
}