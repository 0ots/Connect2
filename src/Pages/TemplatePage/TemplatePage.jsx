import style from './TemplatePage.module.css'

import React from 'react'

export default function TemplatePage(props) {

    const { LeftContent, CenterContent, RigthContent } = props;

    return (
        <>
            <div className={style.parentContainer}>
                <div className={style.leftSide}>
                    <LeftContent />
                </div>
                <div className={style.middleContainer}>
                    <CenterContent />
                </div>
                <div className={style.rightSide}>
                    <RigthContent />
                </div>
            </div>
        </>
    )
}