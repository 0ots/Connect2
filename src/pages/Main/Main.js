import style from './main.module.css'

import LogoEmpresa from '../../Components/Images/LogoEmpresaMain'

import IconHome from '../../Components/Icons/IconHomeMain'
import IconMyProfile from '../../Components/Icons/IconUserMain'
import IconConnections from '../../Components/Icons/IconConnectionsMain'
import IconCog from '../../Components/Icons/IconCogMain'
import IconLogout from '../../Components/Icons/IconLogoutMain'

import LabelHome from '../../Components/Labels/LabelHomeMain'

export default function Main(){
    return(
        <>
            <body id={style.Main}>

                <div className={style.abaLateralEsquerda}>

                    <div className={style.logoEmpresa}>
                        <LogoEmpresa/>
                    </div>

                <div className={style.containerMainOptions}>

                    <div className={style.containerMainIcons}>
                        <div className={style.mainIcon}>
                            <IconHome/>
                        </div>
                        <div className={style.mainIcon}>
                            <IconMyProfile/>    
                        </div>       
                        <div className={style.mainIcon}>
                            <IconConnections/>
                        </div>
                        <div className={style.mainIcon}>
                            <IconCog/>
                        </div>
                        <div className={style.mainIcon}>
                            <IconLogout/>
                        </div>
                    </div>
                    <div className={style.containerMainLabels}>
                        <div>
                            <LabelHome/>
                        </div>
                    </div>

                </div>

                </div>
            </body>
        </>
    )
}