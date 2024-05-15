import logoEmpresa from '../../../src/Images/logoEmpresa.png';
import style from './logoEmpresaMain.module.css'

export default function Image() {
    function logo(){
        document.location.assign('/main')
    }
    return (
        <img src={logoEmpresa}  className={style.LogoEmpresaMain} id={style.idLogoEmpresaMain} alt="Logo da Empresa" onClick={logo}/>
    );
}