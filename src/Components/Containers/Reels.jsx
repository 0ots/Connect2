import style from './Reels.module.css'

import InputProcurar from '../Inputs/InputProcurarConexxao'
import InputPostUsuario from '../Inputs/InputPostUsuario'
import LabelRecentes from '../Labels/LabelRecentes'
import AmountPost from '../Containers/AmountPost'


export default function Reels() {
    return (
        <div className={style.container}>
            <div className={style.inputProcurar}>
                <InputProcurar/>
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