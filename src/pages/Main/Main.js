import style from './main.module.css'

import LogoEmpresa from '../../Components/Images/LogoEmpresaMain'

import IconHome from '../../Components/Icons/IconHomeMain'
import IconMyProfile from '../../Components/Icons/IconUserMain'



export default function Main(){
    return(
        <>
            <body id={style.Main}>
                <div className={style.logoEmpresa}>
                    <LogoEmpresa/>
                </div>
                <div>
                    <IconHome/>
                </div>
                <div>
                    <IconMyProfile/>    
                </div>          
            </body>
        </>
    )
}