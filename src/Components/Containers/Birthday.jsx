import style from './Birthday.module.css'

import ImagemAniversario from '../Images/ImagemAniversario'
import LabelTituloAniversariantes from '../Labels/LabelTituloAniversariantes'
import ImagemPrimeiroAniversariante from '../Images/ImagemPrimeiroAniversariante'
import ImagemSegundoAniversariante from '../Images/ImagemSegundoAniversariante'

export default function Birthday() {
    return (
        <div className={style.containerAniversario}>
            <div className={style.titulo}>
                <div className={style.imagemPresenteAniversario}>
                    <ImagemAniversario />
                </div>
                <div className={style.tituloAniversario}>
                    <LabelTituloAniversariantes />
                </div>
            </div>
            <div className={style.divisoriadireita}>

            </div>
            <div className={style.aniversariantes}>
                <div className={style.primeiroAniversariante}>
                    <div className={style.imagemPrimeiroAniversariante}>
                        <ImagemSegundoAniversariante />
                    </div>
                </div>
                <div className={style.segundoAniversariante}>
                    <div>
                        <ImagemPrimeiroAniversariante />
                    </div>
                </div>
            </div>
        </div>
    )
}