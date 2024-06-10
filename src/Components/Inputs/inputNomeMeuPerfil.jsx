import style from './inputNomeMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Nome</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Pedro'/>
            </div>
        </div>

    )
}