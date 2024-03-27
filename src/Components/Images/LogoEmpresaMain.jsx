import logoEmpresa from '../../../src/Images/logoEmpresa.png';
import style from './logoEmpresaMain.module.css'

export default function Image() {
    return (
        <img src={logoEmpresa}  className={style.LogoEmpresaMain} id={style.idLogoEmpresaMain} alt="Logo da Empresa" />
    );
}