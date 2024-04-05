import style from './registerAcount.module.css'

import LogoEmpresaLogar from '../../Components/Images/LogoEmpresaLogar'

import TituloCrirConta from '../../Components/Labels/LabelTituloCriarConta'
import ExplicaoCriarConta from '../../Components/Labels/LabelExplicacaoCriarConta'

import InputFoto from '../../Components/Inputs/InputFoto'

import InputNome from '../../Components/Inputs/InputNome'
import InputEmail from '../../Components/Inputs/InputEmail'
import InputSenha from '../../Components/Inputs/InputSenha'
import ConfirmarSenha from '../../Components/Inputs/InputConfirmarSenha'
import DataNascimento from '../../Components/Inputs/InputDataNascimento'

import Termos from '../../Components/Labels/LabelContrato'

import ButtonRegistrar from '../../Components/Button/ButtonRegistrar'

import VoltarTelaLogin from '../../Components/Labels/LabelVoltarLogin'


export default function Registrar(){
    return (
        <>
        <body id={style.bodyRegisterAcount}>
        <div className={style.container}>
            <div className={style.logoEmpresa}>
                <LogoEmpresaLogar/>
            </div>
                <div className={style.tituloCriarConta}>
                    <TituloCrirConta/>
                </div>
                <div className={style.agradecimento}>
                    <div>
                        <ExplicaoCriarConta/>
                    </div>
                </div>
                    <div className={style.containerUserDatas}>
                        <div className={style.UserPhoto}>
                            <div>
                                <InputFoto/>
                            </div>
                        </div>
                        <div className={style.centralizacao2}>
                            <div className={style.UserDatas}> 
                                <div className={style.userData}>
                                    <InputNome/>
                                </div>
                            <div className={style.userData}>
                                <InputEmail/>
                            </div>
                            <div className={style.userData}>
                                <InputSenha/>
                            </div>
                            <div className={style.userData}>
                                <ConfirmarSenha/>
                            </div>
                            <div className={style.userData}>
                                <DataNascimento/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.utilidades}>
                        <div className={style.centralizacao}>
                            <Termos/>
                        </div>
                        <div className={style.centralizacao} id={style.botaoRegistrar}>
                            <ButtonRegistrar/>
                        </div>
                        <div className={style.centralizacao} id={style.idVoltarLogin}>
                            <VoltarTelaLogin/>
                        </div>
                    </div>
            </div>
        </body>
            
        </>
    )
}