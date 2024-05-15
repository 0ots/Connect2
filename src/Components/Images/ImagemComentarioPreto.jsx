import style from './imagemComentarioPreto.module.css'
import Imagem from '../../Images/íconeComentárioPreto.png'
export default function imagem(){
    return(
        <div className={style.alinhar}>
            <img src={Imagem} className={style.comentario} alt='Image ícone comentario'></img>
            <span className={style.texto}>100K</span>
        </div>
    )
}