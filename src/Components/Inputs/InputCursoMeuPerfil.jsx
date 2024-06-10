import style from './inputCursoMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Curso</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Análise de Sistemas'/>
            </div>
        </div>

    )
}