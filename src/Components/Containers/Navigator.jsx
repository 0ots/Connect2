import style from './Navigator.module.css'

import LogoEmpresa from '../Images/LogoEmpresaMain'

import ImagemHome from '../Images/ImagemHome'
import ImagemMeuPerfil from '../Images/ImagemMeuPerfil'
import ImagemConexxoes from '../Images/ImagemConexxao'
import ImagemAjustes from '../Images/ImagemAjustes'
import ImagemLogout from '../Images/ImagemLogout'
import Divisoria from './Divisoria'
import LabelHome from '../Labels/LabelHomeMain'
import LabelMyPerfil from '../Labels/LabelMeuPefilMain'
import LabelConnexoes from '../Labels/LabelConnexoes'
import LabelAjustes from '../Labels/LabelAjustes'
import LabelLogout from '../Labels/LabelLogout'

import ImagemAlterarTema from '../Images/ImagemAlterarTema'
import ImagemLeituraVoz from '../Images/ImagemLeituraVoz'
import IconVolume from '../Icons/IconVolume'

import Utilidades1 from '../Labels/LabelUtilidadesMain1'
import Utilidades2 from '../Labels/LabelUtilidadesMain2'


export default function Navigator() {
    return (
        <div className={style.leftBar}>
            <div className={style.topIcon}>
                <LogoEmpresa />
            </div>
            <div className={style.topContainer} >
                <div className={style.barContainer} id={style.opcao}>
                    <div className={style.mainIcon}>
                        <ImagemHome />
                    </div>
                    <div className={style.fontHome}>
                        <LabelHome />
                    </div>
                </div>
                <div className={style.barContainer} id={style.opcao}>
                    <div className={style.mainIcon}>
                        <ImagemMeuPerfil />
                    </div>
                    <div>
                        <LabelMyPerfil />
                    </div>
                </div>
                <div className={style.barContainer} id={style.opcao}> 
                    <div className={style.mainIcon}>
                        <ImagemConexxoes />
                    </div>
                    <div>
                        <LabelConnexoes />
                    </div>
                </div>
                <div className={style.barContainer} id={style.opcao}>
                    <div className={style.mainIcon}>
                        <ImagemAjustes />
                    </div>
                    <div>
                        <LabelAjustes />
                    </div>
                </div>
                <div className={style.barContainer} id={style.opcao}>
                    <div className={style.mainIcon}>
                        <ImagemLogout />
                    </div>
                    <div>
                        <LabelLogout />
                    </div>
                </div>
            </div>
            <div className={style.bottomContainer}>
                <div className={style.bottomContainerItem}>
                        <ImagemAlterarTema />
                        <ImagemLeituraVoz />
                        <IconVolume />
                </div>
                <Divisoria/>
                <div className={style.containerUtilidades}>
                    <div className={style.utilidades1}>
                        <Utilidades1 />
                    </div>
                    <div className={style.utilidades2}>
                        <Utilidades2 />
                    </div>
                </div>
            </div>
        </div>

    )
}