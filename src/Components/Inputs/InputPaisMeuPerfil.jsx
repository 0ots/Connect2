import style from './inputPaisMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>País</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Brasil'/>
            </div>
        </div>

    )
}