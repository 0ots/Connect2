import style from './imagemSegundoAniversariante.module.css'
import Imagem from '../../Images/fotoSegundoAniversariante.png'
export default function imagem(){
    return(
        <div className={style.container}>
            <img src={Imagem} className={style.imagem} alt='Imagem Segundo Anivesariante'></img>
            <span className={style.nomeAniversariante}>Pedro Mesquita</span>
        </div>
    )
}