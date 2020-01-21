//Libraries
import React from 'react'

const ButtonElement = (props) => {
    return(
        <div className={`${props.block}__inner-btn`}>
            <a className={`primary-button ${props.block}__${props.element}`}>{props.content}</a>
        </div>
    )
}

export default ButtonElement