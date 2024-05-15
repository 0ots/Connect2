import style from './labelConnexoes.module.css'

export default function label(){
    function Conexxoes(){
        document.location.assign('/connections')
    }
    return (
        <span className={style.connexoes} onClick={Conexxoes}>Connexões</span>
    )
}