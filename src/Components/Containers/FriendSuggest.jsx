import style from './FriendSuggest.module.css'

import ImagemSugestao from '../Images/ImagemSugestaoConnexao'
import ImagemPrimeiraSugestão from '../Images/ImagemPrimeiraSugestao'
import ImagemSegundaSugestão from '../Images/ImagemSegundaSugestao'
import ImagemTerceiraSugestao from '../Images/ImagemTerceiraSugestao'
import ImagemQuartaSugestao from '../Images/ImagemQuartaSugestao'

export default function FriendSuggest() {
    return (
        <div className={style.containerSugestoes}>
            <div className={style.imagemSugestao}>
                <ImagemSugestao />
            </div>
            <div className={style.divisoriadireita}>

            </div>
            <div className={style.primeiraSugestao}>
                <ImagemPrimeiraSugestão />
            </div>
            <div className={style.segundaSugestao}>
                <ImagemSegundaSugestão />
            </div>
            <div className={style.terceiraSugestao}>
                <ImagemTerceiraSugestao />
            </div>
            <div className={style.quartaSugestao}>
                <ImagemQuartaSugestao />
            </div>
        </div>
    )
}