import style from './inputPostUsuario.module.css'
import FotoUsuarioLogado from '../../Components/Images/FotoUsuarioLogado'
import ButaoPostar from '../../Components/Button/ButtonPostarPost'

export default function label(){
    return(
        <div className={style.divInputPostPai}>
            <div className={style.containerFotoAreaPost}>
                <div className={style.fotoUsuario}>
                    <FotoUsuarioLogado/>
                </div>
                <div>
                    <textarea id={style.areaTextoPost} placeholder='O que você gostaria de compartilhar?' name="texto" maxlength="200" rows="4" cols="50"></textarea>
                </div>
            </div>

            <div className={style.divisoria}>

            </div>

            <div className={style.containerOpcoesPost}>
                <div className={style.botaoPostar}>
                    <ButaoPostar/>
                </div>
            </div>

        </div>
    )
}