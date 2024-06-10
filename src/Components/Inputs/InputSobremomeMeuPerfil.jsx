import style from './inputSobremomeMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Sobrenome</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Silva'/>
            </div>
        </div>

    )
}