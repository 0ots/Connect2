import style from './labelTerceiroConnector.module.css'
export default function label(){
    return(
        <div className={style.container}>
            <span>
                <div className={style.primeiraLinha}>
                    <b className={style.connector}>#ArianGrandea</b>
                    <span className={style.quantidadePosts}>1KK de posts</span>
                </div>
                <span className={style.explicacaoConnector} id={style.idExplicacaoConnector}>Cantora lançou seu 7º álbum</span>
            </span>
        </div>
    )
}