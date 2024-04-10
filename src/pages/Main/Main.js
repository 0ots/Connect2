import style from './main.module.css'

import LogoEmpresa from '../../Components/Images/LogoEmpresaMain'

import IconHome from '../../Components/Icons/IconHomeMain'
import IconMyProfile from '../../Components/Icons/IconUserMain'
import IconConnections from '../../Components/Icons/IconConnectionsMain'
import IconCog from '../../Components/Icons/IconCogMain'
import IconLogout from '../../Components/Icons/IconLogoutMain'

import LabelHome from '../../Components/Labels/LabelHomeMain'
import LabelMyPerfil from '../../Components/Labels/LabelMeuPefilMain'
import LabelConnexoes from '../../Components/Labels/LabelConnexoes'
import LabelAjustes from '../../Components/Labels/LabelAjustes'
import LabelLogout from '../../Components/Labels/LabelLogout'

import IconSun from '../../Components/Icons/IconSun'
import IconVolume from '../../Components/Icons/IconVolume'

import Utilidades1 from '../../Components/Labels/LabelUtilidadesMain1'
import Utilidades2 from '../../Components/Labels/LabelUtilidadesMain2'


import InputProcurarConexxao from '../../Components/Inputs/InputProcurarConexxao'
import InputPostUsuario from '../../Components/Inputs/InputPostUsuario'



export default function Main(){
    return(
        <>
            <body id={style.Main}>
                <div className={style.containerCentral}>

                    <div className={style.abaLateralEsquerda}>
                        <div className={style.logoEmpresa}>
                            <LogoEmpresa/>
                        </div>
                        <div className={style.containerMainOptions}>
                            <div className={style.containerPaginaInicial}>
                                <div className={style.mainIcon}>
                                    <IconHome/>
                                </div>
                                <div className={style.fontHome}>
                                    <LabelHome/>
                                </div>
                            </div>
                            <div className={style.containerMeuPerfil}>
                                <div className={style.mainIcon}>
                                    <IconMyProfile/>    
                                </div>   
                                <div>
                                    <LabelMyPerfil/>
                                </div>
                            </div>
                            <div className={style.containerConnexoes}>
                                <div className={style.mainIcon}>
                                    <IconConnections/>
                                </div>
                                <div>
                                    <LabelConnexoes/>
                                </div>
                            </div>
                            <div className={style.containerAjustes}>
                                <div className={style.mainIcon}>
                                    <IconCog/>
                                </div>
                                <div>
                                    <LabelAjustes/>
                                </div>
                            </div>
                            <div className={style.containerLogout}>
                                <div className={style.mainIcon}>
                                    <IconLogout/>
                                </div>
                                <div>
                                <LabelLogout/>
                                </div>
                            </div>
                        </div>
                        <div className={style.parteFinal}>
                            <div className={style.containerAcessibildades}>
                                <div className={style.iconAcessibilidade}>
                                    <IconSun/>
                                </div>
                                <div className={style.iconAcessibilidade}>
                                    <IconSun/>
                                </div>
                                <div className={style.iconAcessibilidade}>
                                    <IconVolume/>
                                </div>
                            </div>
                            <div className={style.divisoria}>

                            </div>
                            <div className={style.containerUtilidades}>
                                <div className={style.utilidades1}>
                                    <Utilidades1/>
                                </div>
                                <div className={style.utilidades2}>
                                    <Utilidades2/>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className={style.centro}>
                        <div className={style.teste}>
                            <div className={style.inputProcurarConexxao}>
                                <InputProcurarConexxao/>
                            </div>
                            <div className={style.inputPostUsuario}>
                                <InputPostUsuario/>
                            </div>
                        </div>
  
                    </div>








                    <div className={style.abaLateralDireita}>
                        <h1>Teste</h1>
                    </div>

            </div>

                
            </body>
        </>
    )
}