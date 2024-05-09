import style from './inputProcurarConnectores.module.css'
import IconSearch from '../../Components/Icons/IconProcurar'
export default function input(){
    return(
        <div className={style.divInputPai}>
                <input className={style.inputProcurarConexxao} id={style.idProcurarConexxao} placeholder='Procurar por Conectores #'></input>
                <i className={style.iconSearch}><IconSearch/></i>
        </div>
    )
}