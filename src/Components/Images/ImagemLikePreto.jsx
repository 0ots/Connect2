import style from './imagemLikePreto.module.css'
import Imagem from '../../Images/íconeLikePreto.png'
export default function imagem(){
    return(
        <div className={style.alinhar}>
            <img src={Imagem} className={style.like} alt='Image ícone Like'></img>
            <span className={style.texto}>197K</span>
        </div>

    )
}