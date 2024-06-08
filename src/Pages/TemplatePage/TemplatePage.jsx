import style from './TemplatePage.module.css'

import React from 'react'

export default function TemplatePage(props) {

    const { LeftContent, CenterContent, RigthContent } = props;

    return (
        <>lefContainer
            <div className={style.parentContainer}>
                <div className={style.side}>
                    <LeftContent />
                </div>
                <div className={style.middleContainer}>
                    <CenterContent />
                </div>
                <div className={style.side}>
                    <RigthContent />
                </div>
            </div>
        </>
    )
}