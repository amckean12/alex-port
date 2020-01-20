//Libraries
import React from 'react';


//Props: htmlTag, block, element, siteStyle
const TitleElement = (props) => {
    if(props.tag === 'h1'){
        return(
            <div className={`${props.block}__inner`}>
                <h1 className={`${props.block}__${props.element}`}>{props.content}</h1> 
            </div>
        )
    }
    else if(props.tag === 'h2'){
        return(
            <div className={`${props.block}__inner`}>
                <h2 className={`${props.block}__${props.element}`}>{props.content}</h2>
            </div>
        )
    }
    else if(props.tag === 'h3'){
        return(
            <div className={`${props.block}__inner`}>
                <h3 className={`${props.block}__${props.element}`}>{props.content}</h3> 
            </div>
        )     
    }
    else if(props.tag === 'h4'){
        return(
            <div className={`${props.block}__inner`}>
                <h4 className={`${props.block}__${props.element}`}>{props.content}</h4>
            </div> 
       ) 
    }
    else if(props.tag === 'h5'){
        return(
            <div className={`${props.block}__inner`}>
                <h5 className={`${props.block}__${props.element}`}>{props.content}</h5> 
            </div>
       )  
    }
    else if(props.tag === 'h6'){
        return(
            <div className={`${props.block}__inner`}>
                <h6 className={`${props.block}__${props.element}`}>{props.content}</h6>
            </div> 
       )    
    }
}

export default TitleElement