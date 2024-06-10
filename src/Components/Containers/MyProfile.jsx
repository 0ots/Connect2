import style from '../../Components/Containers/MyProfile.module.css'

import FotoUsuarioNome from '../../Components/Images/FotoUsuarioMeuPerfil'
import InputNomeMeuPerfil from '../../Components/Inputs/inputNomeMeuPerfil'
import InputSobrenomeMeuPerfil from '../../Components/Inputs/InputSobremomeMeuPerfil'
import InputPaisMeuPerfil from '../../Components/Inputs/InputPaisMeuPerfil'
import InputEstadoMeuPerfil from '../../Components/Inputs/InputEstadoMeuPerfil'
import InputCidadeMeuPerfil from '../../Components/Inputs/InputCidadeMeuPerfil'
import InputNascimentoMeuPerfil from '../../Components/Inputs/InputNascimentoMeuPerfil'
import InputGeneroMeuPerfil from '../../Components/Inputs/InputGeneroMeuPerfil'
import InputEstadoCivilMeuPerfil from '../../Components/Inputs/InputEstadoCivilMeuPerfil'
import InputEmpresaMeuPerfil from '../../Components/Inputs/InputEmpresaMeuPerfil'
import InputCargoMeuPerfil from '../../Components/Inputs/InputCargoMeuPerfil'
import InputUniversidadeMeuPerfil from '../../Components/Inputs/InputUniversidadeMeuPerfil'
import InputCursoMeuPerfil from '../../Components/Inputs/InputCursoMeuPerfil'
import InputSobreVoceMeuPerfil from '../../Components/Inputs/InputSobreVoceMeuPerfil'
import ButtonSalvarMeuPerfil from '../../Components/Button/ButtonSalvarMeuPerfil'

export default function MyProfile(){
    return(
        <div className={style.containerCentral}>


                    <div className={style.centro}>
                        <div className={style.teste}>
                            <div className={style.divFotoNomeUsuario}>
                                <FotoUsuarioNome/>
                            </div>
                            <div className={style.primeiraLinhaInputs}>
                                <div className={style.inputNome}>
                                    <InputNomeMeuPerfil/>
                                </div>
                                <div className={style.inputSobrenome}>
                                    <InputSobrenomeMeuPerfil/>
                                </div>
                            </div>
                            <div className={style.segundaLinha}>
                                <div className={style.inputPais}>
                                    <InputPaisMeuPerfil/>
                                </div>
                                <div className={style.inputEstado}>
                                    <InputEstadoMeuPerfil/>
                                </div>
                                <div className={style.inputCidade}>
                                    <InputCidadeMeuPerfil/>
                                </div>
                            </div>
                            <div className={style.terceiraLinha}>
                                <div className={style.inputNascimento}>
                                    <InputNascimentoMeuPerfil/>
                                </div>
                                <div className={style.inputGenero}>
                                    <InputGeneroMeuPerfil/>
                                </div>
                                <div className={style.inputEstadoCivil}>
                                    <InputEstadoCivilMeuPerfil/>
                                </div>
                            </div>
                            <div className={style.quartaLinha}>
                                <div className={style.inputEmpresa}>
                                    <InputEmpresaMeuPerfil/>
                                </div>
                                <div className={style.inputCargo}>
                                    <InputCargoMeuPerfil/>
                                </div>  
                            </div>
                            <div className={style.quintaLinha}>
                                <div className={style.inputUniversidade}>
                                    <InputUniversidadeMeuPerfil/>
                                </div>
                                <div className={style.inputCurso}>
                                    <InputCursoMeuPerfil/>
                                </div>
                            </div>
                            <div className={style.sextaLinha}>
                                <div className={style.inputSobreVoce}>
                                    <InputSobreVoceMeuPerfil/>
                                </div>
                            </div>
                            <div className={style.setimaLinha}>
                                <div className={style.buttonSalvar}>
                                    <ButtonSalvarMeuPerfil/>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

    )
}