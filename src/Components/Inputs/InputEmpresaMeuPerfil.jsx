import style from './inputEmpresaMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Empresa</span>
            <div className={style.containerInput}>
                <input type="text" className={style.input} value='Google'/>
            </div>
        </div>
    )
}