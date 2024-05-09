import { MdLogout } from "react-icons/md"
import style from './iconLogoutMain.module.css'
export default function Icon() {
    function Logout(){
        console.log('teste')
        document.location.assign('/')
    }
    return (
        <div onClick={Logout}>
            <MdLogout className={style.iconLogoutMain} id={style.idIconLogoutMain} onClick={Logout}/>
        </div>
    );
}