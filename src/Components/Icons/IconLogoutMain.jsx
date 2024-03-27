import { MdLogout } from "react-icons/md"
import style from './iconLogoutMain.module.css'

export default function Icon() {
    return (
        <div>
            <MdLogout className={style.iconLogoutMain} id={style.idIconLogoutMain}/>
        </div>
    );
}