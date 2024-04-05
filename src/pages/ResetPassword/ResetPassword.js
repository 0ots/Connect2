import style from './resetpassword.module.css'

import TituloEsqueceuSenha from '../../Components/Labels/LabelTituloEsqueceuSenha'
import ExplicacaoEsqueceuSenha from '../../Components/Labels/LabelExplicacaoEsqueceuSenha'
import InputEmail from '../../Components/Inputs/InputEmail'
import ButtonRecuperarSenha from '../../Components/Button/ButtonRecuperarSenha'
import LabelVoltarLogin from '../../Components/Labels/LabelVoltarLogin'
import IconLockRecuperarSenha from '../../Components/Icons/IconLockRecuperarSenha'

function ResetPassword() {
  return (
    <>
    <body id={style.bodyResetpassword}>
        <div className={style.container}>
          <div className={style.informacoes}>
            <div className={style.logoRecuperarSenha}>
                <IconLockRecuperarSenha/>
            </div>
            <div className={style.tituloEsqueceuSenha}>
                <TituloEsqueceuSenha/>
            </div>
            <div className={style.explicacaoEsqueceuSenha}>
                <ExplicacaoEsqueceuSenha/>
            </div>
            <div className={style.inputRecuperarSenha}>
                <InputEmail/>
            </div>
            <div className={style.buttonEnviarLink}>
                <ButtonRecuperarSenha/>
            </div>
            <div className={style.VoltarTelaLogin}>
                <LabelVoltarLogin/>
            </div>
          </div>
        </div>
    </body>
    </>
  );
}

export default ResetPassword;