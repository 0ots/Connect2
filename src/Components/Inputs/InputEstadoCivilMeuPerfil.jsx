import style from './inputEstadoCivilMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Estado Cívil</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Solteiro'/>
            </div>
        </div>

    )
}