import { FaInstagram } from 'react-icons/fa';
import style from './iconInstagramEmpresaLogar.module.css'

export default function Icon() {
    return (
        <div>
            <a href='https://google.com'><FaInstagram className={style.iconInstagram} id={style.idIconInstagram}/></a>
        </div>
    );
}