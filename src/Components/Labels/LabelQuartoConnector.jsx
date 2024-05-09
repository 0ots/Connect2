import style from './labelQuartoConnector.module.css'
export default function label(){
    return(
        <div className={style.container}>
            <span>
                <div className={style.primeiraLinha}>
                    <b className={style.connector}>#Tattoos</b>
                    <span className={style.quantidadePosts}>769 posts</span>
                </div>
                <span className={style.explicacaoConnector} id={style.idExplicacaoConnector}>Veja as tatuagens em alta nesta semana</span>
            </span>
        </div>
    )
}