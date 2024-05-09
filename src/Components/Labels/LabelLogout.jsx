import style from './labelLogout.module.css'

export default function label(){
    function Logout(){
        document.location.assign('/')
    }
    return (
        <span className={style.logout} onClick={Logout}>Logout</span>
    )
}