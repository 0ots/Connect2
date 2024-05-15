import style from './connections.module.css'

import LogoEmpresa from '../../Components/Images/LogoEmpresaMain'

import ImagemHome from '../../Components/Images/ImagemHome'
import ImagemMeuPerfil from '../../Components/Images/ImagemMeuPerfil'
import ImagemConexxoes from '../../Components/Images/ImagemConexxao'
import ImagemAjustes from '../../Components/Images/ImagemAjustes'
import ImagemLogout from '../../Components/Images/ImagemLogout'

import LabelHome from '../../Components/Labels/LabelHomeMain'
import LabelMyPerfil from '../../Components/Labels/LabelMeuPefilMain'
import LabelConnexoes from '../../Components/Labels/LabelConnexoes'
import LabelAjustes from '../../Components/Labels/LabelAjustes'
import LabelLogout from '../../Components/Labels/LabelLogout'

import ImagemAlterarTema from '../../Components/Images/ImagemAlterarTema'
import ImagemLeituraVoz from '../../Components/Images/ImagemLeituraVoz'
import IconVolume from '../../Components/Icons/IconVolume'

import Utilidades1 from '../../Components/Labels/LabelUtilidadesMain1'
import Utilidades2 from '../../Components/Labels/LabelUtilidadesMain2'


import InputProcurarConexxao from '../../Components/Inputs/InputProcurarConexxao'
import InputPostUsuario from '../../Components/Inputs/InputPostUsuario'
import InputPrimeiroPost from '../../Components/Inputs/InputPrimeiroPost'

import ImagemAniversario from '../../Components/Images/ImagemAniversario'
import LabelTituloAniversariantes from '../../Components/Labels/LabelTituloAniversariantes'
import ImagemPrimeiroAniversariante from '../../Components/Images/ImagemPrimeiroAniversariante'
import ImagemSegundoAniversariante from '../../Components/Images/ImagemSegundoAniversariante'

import ImagemSugestao from '../../Components/Images/ImagemSugestaoConnexao'
import ImagemPrimeiraSugestão from '../../Components/Images/ImagemPrimeiraSugestao'
import ImagemSegundaSugestão from '../../Components/Images/ImagemSegundaSugestao'
import ImagemTerceiraSugestao from '../../Components/Images/ImagemTerceiraSugestao'
import ImagemQuartaSugestao from '../../Components/Images/ImagemQuartaSugestao'

import ImagemConnectores from '../../Components/Images/ImagemConnectores'
import InputProcurarConnecotores from '../../Components/Inputs/InputProcurarConnectores'
import PrimeiroConnector from '../../Components/Labels/LabelPrimeiroConnector'
import SegundoConnector from '../../Components/Labels/LabelSegundoConnector'
import TerceiroConnector from '../../Components/Labels/LabelTerceiroConnector'
import QuartoConnector from '../../Components/Labels/LabelQuartoConnector'

export default function Main(){
    return(
        <>
            <body id={style.Main}>
                <div className={style.containerCentral}>

                    <div className={style.abaLateralEsquerda}>
                        <div className={style.logoEmpresa}>
                            <LogoEmpresa/>
                        </div>
                        <div className={style.containerMainOptions} >
                            <div className={style.containerPaginaInicial} id={style.opcao}>
                                <div className={style.mainIcon}>
                                    <ImagemHome/>
                                </div>
                                <div className={style.fontHome}>
                                    <LabelHome/>
                                </div>
                            </div>
                            <div className={style.containerMeuPerfil} id={style.opcao}>
                                <div className={style.mainIcon}>
                                    <ImagemMeuPerfil/>    
                                </div>   
                                <div>
                                    <LabelMyPerfil/>
                                </div>
                            </div>
                            <div className={style.containerConnexoes} id={style.opcao}>
                                <div className={style.mainIcon}>
                                    <ImagemConexxoes/>
                                </div>
                                <div>
                                    <LabelConnexoes/>
                                </div>
                            </div>
                            <div className={style.containerAjustes} id={style.opcao}>
                                <div className={style.mainIcon}>
                                    <ImagemAjustes/>
                                </div>
                                <div>
                                    <LabelAjustes/>
                                </div>
                            </div>
                            <div className={style.containerLogout} id={style.opcao}>
                                <div className={style.mainIcon}>
                                    <ImagemLogout/>
                                </div>
                                <div>
                                    <LabelLogout/>
                                </div>
                            </div>
                        </div>
                        <div className={style.parteFinal}>
                            <div className={style.containerAcessibildades}>
                                <div className={style.iconAcessibilidade}>
                                    <ImagemAlterarTema/>
                                </div>
                                <div className={style.iconAcessibilidade}>
                                    <ImagemLeituraVoz/>
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









                    <div className={style.abaLateralDireita}>
                        <div className={style.containerAniversario}>
                            <div className={style.titulo}>
                                <div className={style.imagemPresenteAniversario}>
                                    <ImagemAniversario/>
                                </div>
                                <div className={style.tituloAniversario}>
                                    <LabelTituloAniversariantes/>
                                </div>
                            </div>
                            <div className={style.divisoriadireita}>

                            </div>
                            <div className={style.aniversariantes}>
                                <div className={style.primeiroAniversariante}>
                                    <div className={style.imagemPrimeiroAniversariante}>
                                        <ImagemSegundoAniversariante/>
                                    </div>
                                </div>
                                <div className={style.segundoAniversariante}>
                                    <div>
                                        <ImagemPrimeiroAniversariante/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.containerSugestoes}>
                            <div className={style.imagemSugestao}>
                                <ImagemSugestao/>
                            </div>
                            <div className={style.divisoriadireita}>

                            </div>
                            <div className={style.primeiraSugestao}>
                                <ImagemPrimeiraSugestão/>
                            </div>
                            <div className={style.segundaSugestao}>
                                <ImagemSegundaSugestão/>
                            </div>
                            <div className={style.terceiraSugestao}>
                                <ImagemTerceiraSugestao/>
                            </div>
                            <div className={style.quartaSugestao}>
                                <ImagemQuartaSugestao/>
                            </div>
                        </div>
                        <div className={style.containerConnectores}>
                            <div>
                                <ImagemConnectores/>
                            </div>
                            <div className={style.divisoriadireita}>

                            </div>
                            <div className={style.inputProcurar}>
                                <InputProcurarConnecotores/>
                            </div>
                            <div className={style.primeiroConnector}>
                                <PrimeiroConnector/>
                            </div>
                            <div className={style.segundoConnector}>
                                <SegundoConnector/>
                            </div>
                            <div className={style.terceiroConnector}>
                                <TerceiroConnector/>
                            </div>
                            <div className={style.quartoConnector}>
                                <QuartoConnector/>
                            </div>
                        </div>

                    </div>

            </div>

                
            </body>
        </>
    )
}