import style from './Post.module.css'
import ImagemOpcoesPost from '../../Components/Images/ImagemOpcoesPost'
import ImagemLike from '../../Components/Images/ImagemLikePreto'
import ImagemDislike from '../../Components/Images/ImagemDislikePreto'
import ImagemComentario from '../../Components/Images/ImagemComentarioPreto'


export default function input(props) {
    console.log({
        "aaaa" : props
    });
    return (
        <div className={style.containerPai}>
            <div className={style.informacoesPost}>
                <div className={style.FotoUsuarioLogado}>
                    <img src={props.post.profile_image_url} className={style.fotoUsuarioLogado} id={style.idFotoUsuario} alt='foto de perfil do usuario que postou a mensagem.'
                    width={60} weigth={60}
                    ></img>
                </div>
                <div className={style.nomeCidadeUsuario}>
                    <div className={style.primeiraLinha}>
                        <div className={style.nomeUsuario}>
                            {props.post.name}
                        </div>
                        <div className={style.dataPost}>
                            {props.post.date}
                        </div>
                    </div>
                    <div className={style.cidadeUsuario}>
                        Em {props.post.place.city} - {props.post.place.city}, {props.post.place.country}
                    </div>
                </div>
            </div>
            <div className={style.conteudoPost}>
                <div className={style.mesmaLinha}>
                    <div className={style.conteudo}>
                        {props.post.message}
                    </div>
                    <div className={style.opcoesPost}>
                        <ImagemOpcoesPost />
                    </div>
                </div>
                <div className={style.divisoriaPost}>

                </div>
            </div>
            <div className={style.connectoresBotoes}>
                <div className={style.connectores}>
                    {props.post.tags.toString().replace(/,/g, " ")}
                </div>
                <div className={style.botoes}>
                    <div className={style.like}>
                        <ImagemLike />
                    </div>
                    <div className={style.comentario}>
                        <ImagemDislike />
                    </div>
                    <div className={style.dislike}>
                        <ImagemComentario />
                    </div>
                </div>
            </div>
        </div>
    )
}