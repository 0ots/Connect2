import style from './inputProcurarConexxao.module.css'

import IconSearch from '../../Components/Icons/IconProcurar'

export default function input(){
    return(
        <div className={style.divInputPai}>
                <input className={style.inputProcurarConexxao} id={style.idProcurarConexxao} placeholder='Procurar por Conexxão'></input>
                <i className={style.iconSearch}><IconSearch /></i>
                
        </div>
    )
}