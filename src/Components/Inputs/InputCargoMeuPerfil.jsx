import style from './inputCargoMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Cargo</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Gerente de Projetos'/>
            </div>
        </div>

    )
}