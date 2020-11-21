import React from 'react';

import './card-type.css';


function CardType(props){

    return(
    <>{props.CardType === ""?<span className="card-type-null">x</span>:<span className="card-type">{props.CardType}</span>}</>
    );
}
export default CardType;