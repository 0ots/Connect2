import style from './inputEstadoMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Estado</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='MG'/>
            </div>
        </div>

    )
}