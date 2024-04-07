import style from './development.module.css'

import IconConstruction from '../../Components/Icons/IconDevelopment'
import TituloDevelopment from '../../Components/Labels/LabelTituloDevelopment'

import VoltarTelaLogin from '../../Components/Labels/LabelVoltarLogin'

export default function development(){
    return (
        <>
            <body className={style.development}>
                <div className={style.container}>
                    <div className={style.iconDevolopment}>
                        <IconConstruction/>
                    </div>
                    <div className={style.tituloDevelopment}>
                        <TituloDevelopment/>
                    </div>
                    <div className={style.voltarLogin}>
                        <VoltarTelaLogin/>
                    </div>
                </div>
            </body>
        </>
    )
}