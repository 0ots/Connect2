import style from './inputUniversidadeMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Universidade</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='UNA'/>
            </div>
        </div>

    )
}