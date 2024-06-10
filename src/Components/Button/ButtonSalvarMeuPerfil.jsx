'use client'
import style from './buttonSalvarMeuPerfil.module.css'

export default function ButtonLogar(){
    function handleButtonLogarClick(){
        alert('Os dados foram salvos com sucesso!')
    }
    return (
    <button className={style.buttonRegistrar} onClick={handleButtonLogarClick}>Salvar</button>
    )
}

