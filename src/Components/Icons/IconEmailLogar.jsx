import { FaRegEnvelope } from "react-icons/fa6";
import style from './iconEmailLogar.module.css'

export default function Icon() {
    return (
        <div>
            <FaRegEnvelope className={style.iconEmail} id={style.idIconEmail}/>
        </div>
    );
}