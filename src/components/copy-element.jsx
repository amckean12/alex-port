//Libraries
import React from 'react';


//Props: htmlTag, block, element, siteStyle
const CopyElement = (props) => {
    return(
        <div className={`${props.block}__inner`}>
          <p className={`${props.block}__${props.element}`}>{props.content}</p>
        </div>  
    )
}

export default CopyElement