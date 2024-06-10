import style from './inputSobreVoceMeuPerfil.module.css'

export default function label(){
    return(
        <div className={style.container}>
            <span className={style.labelNome}>Sobrenome</span>
            <div className={style.containerInput}>
                <textarea className={style.sobre} name="" id="" maxLength="192" placeholder='Conte algo sobre você!'></textarea>
            </div>
        </div>

    )
}