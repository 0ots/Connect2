import style from './Reels.module.css'

import InputPostUsuario from '../Inputs/InputPostUsuario'
import LabelRecentes from '../Labels/LabelRecentes'
import AmountPost from '../Containers/AmountPost'

import ImagemConnectores from '../Images/ImagemConnectores'
import InputProcurarConnecotores from '../Inputs/InputProcurarConnectores'
import PrimeiroConnector from '../Labels/LabelPrimeiroConnector'
import SegundoConnector from '../Labels/LabelSegundoConnector'
import TerceiroConnector from '../Labels/LabelTerceiroConnector'
import QuartoConnector from '../Labels/LabelQuartoConnector'

export default function Reels() {
    return (
        <div >
            <div className={style.containerConnectores}>
                <div>
                    <ImagemConnectores />
                </div>
                <div className={style.divisoriadireita}> </div>
                <InputProcurarConnecotores />
                <PrimeiroConnector />
                <SegundoConnector />
                <TerceiroConnector />
                <QuartoConnector />
            </div>
            <div className={style.inputPostUsuario}>
                <InputPostUsuario />
            </div>
            <div className={style.labelRecentes}>
                <LabelRecentes />
            </div>
            <AmountPost />
        </div>

    )
}