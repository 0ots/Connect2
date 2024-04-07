import style from './buttonLogar.module.css';

export default function ButtonLogar() {
    function userValidation(){
        document.location.assign('/development')
    }
    return (
        <button className={style.buttonLogar} onClick={userValidation}>Logar</button>
    );
}