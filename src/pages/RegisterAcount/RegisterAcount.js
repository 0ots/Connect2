import style from './registerAcount.module.css'
import TituloCrirConta from '../../Components/Labels/LabelTituloCriarConta'
import ExplicaoCriarContaParte1 from '../../Components/Labels/LabelExplicacaoCriarContaParte1'
import ExplicaoCriarContaParte2 from '../../Components/Labels/LabelExplicacaoCriarContaParte2'

import InputFoto from '../../Components/Inputs/InputFoto'

import InputNome from '../../Components/Inputs/InputNome'
import InputEmail from '../../Components/Inputs/InputEmail'
import InputSenha from '../../Components/Inputs/InputSenha'
import ConfirmarSenha from '../../Components/Inputs/InputConfirmarSenha'
import DataNascimento from '../../Components/Inputs/InputDataNascimento'

import ButtonRegistrar from '../../Components/Button/ButtonRegistrar'

import VoltarTelaLogin from '../../Components/Labels/LabelVoltarLogin'


export default function Registrar(){
    return (
        <>
            <div className={style.container}>
                <div>
                    <TituloCrirConta/>
                </div>
                <div className={style.teste}>
                    <div>
                        <ExplicaoCriarContaParte1/>
                    </div>
                    <div>
                        <ExplicaoCriarContaParte2/>
                    </div>
                </div>
                    <div className={style.containerUserDatas}>
                        <div className={style.UserPhoto}>
                            <div>
                                <InputFoto/>
                            </div>
                        </div>
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
                        <div className={style.userData}>
                            <ButtonRegistrar/>
                        </div>
                        </div>
                    </div>
                    <div id={style.idVoltarTelaLogin}>
                            <VoltarTelaLogin/>
                    </div>
            </div>
        </>
    )
}