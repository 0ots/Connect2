import style from './accountCreated.module.css'

import IconSucesso from '../../Components/Icons/IconSucesso'

import TituloCriarConta from '../../Components/Labels/LabelContaCriada'
import ExplicacaoContaCriada from '../../Components/Labels/LabelExplicacaoContaCriada'
import VoltarTelaLogin from '../../Components/Labels/LabelVoltarLogin'

export default function PasswordReset(){
    return(
        <body className={style.accountCreated}>
            <div className={style.container}>
                <div className={style.iconSucesso}>
                    <IconSucesso/>
                </div>
                <div className={style.tituloContaCriada}>
                    <TituloCriarConta/>
                </div>
                <div className={style.explicacaoContaCriada}>
                    <ExplicacaoContaCriada/>
                </div>
                <div className={style.voltarLogin}>
                    <VoltarTelaLogin/>
                </div>
            </div>
        </body>
    )
}