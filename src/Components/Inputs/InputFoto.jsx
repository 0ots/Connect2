'use client'
import style from './inputFoto.module.css';
import IconFoto from '../Icons/IconFoto.jsx';
import LabelInserirFoto from '../Labels/LabelInserirFoto.jsx'

export default function InputEmailLogar() {
    return (
        <div className={style.inputFotoContainer}>
            <div className={style.iconWrapper}>
                <IconFoto/>
            </div>
            <div>
                <LabelInserirFoto/> 
            </div>
        </div>        
    );
}
