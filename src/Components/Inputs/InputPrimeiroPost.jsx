import style from './inputPrimeiroPost.module.css'
import FotoUsuarioLogado from '../../Components/Images/FotoUsuarioLogado'
import ImagemOpcoesPost from '../../Components/Images/ImagemOpcoesPost'
import ImagemLike from '../../Components/Images/ImagemLikePreto'
import ImagemDislike from '../../Components/Images/ImagemDislikePreto'
import ImagemComentario from '../../Components/Images/ImagemComentarioPreto'
export default function input(){
    return(
        <div className={style.containerPai}>
            <div className={style.informacoesPost}>
                <div className={style.FotoUsuarioLogado}>
                    <FotoUsuarioLogado/>
                </div>
                <div className={style.nomeCidadeUsuario}>
                    <div className={style.primeiraLinha}>
                        <div className={style.nomeUsuario}>
                            Pedro Silva
                        </div>
                        <div className={style.dataPost}>
                            12/03/2024 às 22:10
                        </div>
                    </div>
                    <div className={style.cidadeUsuario}>
                        Em Belo Horizonte - MG
                    </div>
                </div>
            </div>
            <div className={style.conteudoPost}>
                <div className={style.mesmaLinha}>
                    <div className={style.conteudo}>
                        O Kansas City Chiefs vence seu 4º título de SuperBowl!<br></br>
                        Patrick Mahomes será o maior jogador da história. <br></br>
                        A dinastia Chiefs está apenas começando.
                    </div>
                    <div className={style.opcoesPost}>
                        <ImagemOpcoesPost/>
                    </div>
                </div>
                <div className={style.divisoriaPost}>

                </div>
            </div>
            <div className={style.connectoresBotoes}>
                <div className={style.connectores}>
                    #SuperBowl #NFL #KansasCityChiefs
                </div>
                <div className={style.botoes}>
                    <div className={style.like}>
                        <ImagemLike/>
                    </div>
                    <div className={style.comentario}>
                        <ImagemDislike/>
                    </div>
                    <div className={style.dislike}>
                        <ImagemComentario/>
                    </div>
                </div>
                </div>

        </div>
    )
}