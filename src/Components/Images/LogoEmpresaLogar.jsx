import logoEmpresa from '../../../src/Images/LOGO-CONNECT-2.png';
import style from './logoEmpresaLogar.module.css'

export default function Image() {
    return (
        <img src={logoEmpresa}  className={style.LogoEmpresaLogar} alt="Logo da Empresa" />
    );
}