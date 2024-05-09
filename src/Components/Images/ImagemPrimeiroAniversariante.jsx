import style from './imagemPrimeiroAniversariante.module.css'
import Imagem from '../../Images/fotoPrimeiroAniversariante.png'
export default function imagem(){
    return(
        <div className={style.container}>
            <img src={Imagem} className={style.imagem} alt='Imagem Primeiro Anivesariante'></img>
            <span className={style.nomeAniversariante}>Letícia Silva</span>
        </div>
    )
}