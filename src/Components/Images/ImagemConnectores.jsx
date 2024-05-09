import style from './imagemConnectores.module.css'
import Imagem from '../../Images/íconeConnectores.png'
export default function imagem(){
    return(
        <div className={style.container}>
            <img src={Imagem} className={style.imagem} alt="Imagem Connectores" />
            <span className={style.connectores}>Connectores</span>
        </div>
    )
}