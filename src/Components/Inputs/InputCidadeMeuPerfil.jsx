import style from './inputCidadeMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Cidade</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Belo Horizonte'/>
            </div>
        </div>

    )
}