import style from './imagemDislikePreto.module.css'
import Imagem from '../../Images/íconeDislikePreto.png'
export default function imagem(){
    return(
        <div className={style.alinhar}>
            <img src={Imagem} className={style.dislike} alt='Image ícone dislike'></img>
            <span className={style.texto}>10K</span>
        </div>
        
    )
}