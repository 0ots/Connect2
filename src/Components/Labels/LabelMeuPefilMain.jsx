import style from './labelMeuPefilMain.module.css'

export default function label(){
    function MyProfile(){
        document.location.assign('/myprofile')
    }
    return (
        <span className={style.meuPefil} onClick={MyProfile}>Meu Perfil</span>
    )
}