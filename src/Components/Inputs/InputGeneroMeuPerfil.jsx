import style from './inputGeneroMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Gênero</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Masculino'/>
            </div>
        </div>

    )
}