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
    <div className={style.container}>
      <div className={style.informacoes}>
        <div>
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
        <div>
            <ButtonRecuperarSenha/>
        </div>
        <div id={style.idVoltarTelaLogin}>
            <LabelVoltarLogin/>
        </div>
      </div>
    </div>
    </>
  );
}

export default ResetPassword;