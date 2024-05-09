import style from './labelSegundoConnector.module.css'
export default function label(){
    return(
        <div className={style.container}>
            <span>
                <div className={style.primeiraLinha}>
                    <b className={style.connector}>#Messi</b>
                    <span className={style.quantidadePosts}>1,2KK de posts</span>
                </div>
                <span className={style.explicacaoConnector} id={style.idExplicacaoConnector}>Lionel Messi é eleito o melhor do mundo pela 8ª vez</span>
            </span>
        </div>
    )
}