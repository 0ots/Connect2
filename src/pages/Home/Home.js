import style from './home.module.css'

import LogoEmpresaLogar from '../../Components/Images/LogoEmpresaLogar'

import TituloEmpresaLogar from '../../Components/Labels/LabelTituloEmpresaLogar'
import SlogamEmpresaLogar from '../../Components/Labels/LabelSlogamEmpresaLogar'

import Saudacao from '../../Components/Labels/LabelSaudacaoLogar'


import IconInstagramEmpresaLogar from '../../Components/Icons/IconInstagramEmpresaLogar'
import IconLinkedinnEmpresaLogar from '../../Components/Icons/IconLinkedinEmpresaLogar'
import IconXEmpresaLogar from '../../Components/Icons/IconXEmpresaLogar'
import EsqueciMinhaSenhaLogar from '../../Components/Labels/LabelEsquecinhaMinhaSenhaLogar'
import CriarConta from '../../Components/Labels/LabelCriarContaLogar'
import ButtonLogar from '../../Components/Button/ButtonLogar'
import InputEmailLogar from '../../Components/Inputs/InputEmail'
import InputSenhaLogar from '../../Components/Inputs/InputSenha'

import SolicitacaoSeguirEmpresaLogar from '../../Components/Labels/LabelSolicitacaoSeguirRedesSociaisLogar'

import Utilidades from '../../Components/Labels/LabelUtilidadesLogar'

function App() {
  return (
    <> 
    <body id={style.bodyHome}>
      
        <div className={style.containerLogar}>
            <div className={style.informacoesEmpresa}>
                <div className={style.LogoEmpresaLogar}>
                  <LogoEmpresaLogar/>
                </div>
                <div className={style.tituloEmpresaLogar}>
                  <TituloEmpresaLogar/>
                </div>
                <div>
                  <div className={style.slogamEmpresaLogar}>
                      <SlogamEmpresaLogar/>
                  </div>
                </div>
            </div>

            <div className={style.interacoesUsuarioLogar}>
              <div className={style.saudacao}>
                  <Saudacao/>
              </div>
              <div className={style.InputEmailLogar}>
                  <InputEmailLogar/>
              </div>
              <div className={style.InputSenhaLogar}>
                  <InputSenhaLogar/>
              </div>
              <div className={style.labelEsqueciMinhaSenha}>
                  <EsqueciMinhaSenhaLogar/>
              </div>
              <div className={style.BotaoLogar}>
                  <ButtonLogar/>
              </div>
              <div className={style.labelCriarConta}>
                <CriarConta/>
              </div>
            </div>

            <div className={style.informacoesEmpresaLogar}>
              <div className={style.solicitacaoEmpresaLogar}>
                <SolicitacaoSeguirEmpresaLogar/>
              </div>
              <div className={style.iconsRedesSociaisEmpresaLogar}>
                <div className={style.iconRedesSociaisEmpresaLogar}>
                  <IconInstagramEmpresaLogar/>
                </div>
                <div className={style.iconRedesSociaisEmpresaLogar}>
                  <IconLinkedinnEmpresaLogar/>
                </div>
                <div className={style.iconRedesSociaisEmpresaLogar}>
                  <IconXEmpresaLogar/>
                </div>
              </div>
              <div className={style.utilidades}>
                <Utilidades/>
              </div>
            </div> 
            
          </div>
    </body>
    
    </>
  );
}

export default App;