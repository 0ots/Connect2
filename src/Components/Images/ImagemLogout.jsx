import style from './imagemLogout.module.css'
import ImagemLogout from '../../Images/íconeLogout.png'
export default function imagem(){
    return(
        <img src={ImagemLogout} className={style.Logout} alt='Imagem Logout'></img>
    )
}