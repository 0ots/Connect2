import style from './labelConnexoes.module.css'

export default function label(isBold){
    function Conexxoes(){
        document.location.assign('/connections')
    }
    return (
        <span id={style.connexoes} onClick={Conexxoes}>Connexões</span>
    )
}