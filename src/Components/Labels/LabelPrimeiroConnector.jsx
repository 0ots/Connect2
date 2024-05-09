import style from './labelPrimeiroConnector.module.css'
export default function label(){
    return(
        <div className={style.container}>
            <span>
                <div className={style.primeiraLinha}>
                    <b className={style.connector}>#SuperBowl</b>
                    <span className={style.quantidadePosts}>700K de post</span>
                </div>
                <span className={style.explicacaoConnector} id={style.idExplicacaoConnector}>Os Chiefs são os grandes vencedores do SuperBowl</span>
            </span>
        </div>
    )
}