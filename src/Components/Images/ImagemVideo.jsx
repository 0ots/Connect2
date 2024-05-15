import style from './imagemVideo.module.css'
import Imagem from '../../Images/íconeVideo.png'
export default function imagem(){
    return(
        <img src={Imagem} className={style.video} alt='Image ícone vídeo'></img>
    )
}