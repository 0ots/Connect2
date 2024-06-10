import style from './labelMeuPefilMain.module.css'

export default function label({isBold}){
    function MyProfile(){
        document.location.assign('/myprofile')
    }
    return (
        <span id={style.meuPerfil} onClick={MyProfile}>Meu Perfil</span>
    )
}