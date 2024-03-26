import { FaLock } from "react-icons/fa6";
import style from './iconLockLogar.module.css'

export default function Icon() {
    return (
        <div>
            <FaLock className={style.iconLock} id={style.idIconLock}/>
        </div>
    );
}