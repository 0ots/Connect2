import style from './linkSended.module.css'

import IconEmailEnviadoComSucesso from '../../Components/Icons/IconEmailEnviado'
import EmailEnviado from '../../Components/Labels/LabelEmailEnviadoComSucesso'
import ExplicacaoEmailEnviado from '../../Components/Labels/LabelExplicacaoEmailEnviado'
import LabelVoltarLogin from '../../Components/Labels/LabelVoltarLogin'

export default function LinkSend(){
    return (
        <>
        <body className={style.linkSended}>
            <div className={style.container}>
                <div className={style.iconEmailEnviado}>
                    <IconEmailEnviadoComSucesso/>
                </div>
                <div className={style.tituloEmailEnviado}>
                    <EmailEnviado/>
                </div>
                <div className={style.explicacaoEmailEnviado}>
                    <ExplicacaoEmailEnviado/>
                </div>
                <div className={style.voltarLogin}>
                    <LabelVoltarLogin/>
                </div>
            </div>
        </body>
        </>
    )
}