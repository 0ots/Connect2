import style from './imagemLeituraVoz.module.css'
import ImagemLeituraVoz from '../../Images/íconeLeituraVoz.png'
export default function imagem(){
    return(
        <div>
            <img src={ImagemLeituraVoz} className={style.leituraVoz} alt='Imagem Leitura Voz' title='Leitura de Voz'></img>
        </div>
    )
}