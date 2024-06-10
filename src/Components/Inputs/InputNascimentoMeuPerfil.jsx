import style from './inputNascimentoMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Nascimento</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='06/01/1994'/>
            </div>
        </div>

    )
}