import style from '../../Components/Labels/labelSugestoesConnexoes.module.css'
import SugestaoConnexoes from '../../Components/Labels/LabelSugestaoConnexoes'

export default function label(){
    return(
        <div className={style.container}>
            <SugestaoConnexoes/>
            <SugestaoConnexoes/>
            <SugestaoConnexoes/>
            <SugestaoConnexoes/>
            <SugestaoConnexoes/>
            <SugestaoConnexoes/>
            <SugestaoConnexoes/>
            <SugestaoConnexoes/>
        </div>
    )
}