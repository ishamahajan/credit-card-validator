import React, {useState, useEffect} from 'react';

import CardType from './card-type';
import ValidateCardNumber from '../utils/validate-card-num'
import './card-input.css';

function CardInput(){

    const [cardNum, setCardNum]=useState("");
    const [cardType, setCardType]=useState("");
    const [validCardNum, setValidCardNum]=useState('');

    function OnChange(val) {       
        const re = /^[0-9 ]+$/;
        if (val=== '' ) 
        {
            setCardNum('');
        }
        if(re.test(val))
        {
            setCardNum(val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '));            
        }
    }

    function Validate(keyName, value){
        if (keyName === 'Enter'){
            if (ValidateCardNumber(value, cardType)){
             setValidCardNum('true');
             }
            else{
                setValidCardNum('false');
                setCardType('');
            }            
        }
    }

    useEffect(() => {        
        const creditCardType = ()=>{
            switch(cardNum.substring(0,1)){
                case '3': {var cardnumber = cardNum.substring(0,2);
                    if(cardnumber === '34' || cardnumber === '37') 
                    {return 'AMEX';}
                    if(cardnumber.length>1)
                    { 
                        setValidCardNum('false');
                    }                       
                    return '';
                }
                case '4' : setValidCardNum(''); return 'Visa';
                case '5': { 
                    cardnumber = cardNum.substring(0,2);
                    if(cardnumber === '51' || cardnumber === '52' || cardnumber === '53' || cardnumber === '54' || cardnumber === '55')
                    {
                        setValidCardNum(''); 
                        return 'Mastercard';
                    }
                    if(cardnumber.length>1)
                    {setValidCardNum('false');} 
                    
                    return '';
                }
                case '6': {
                      cardnumber = cardNum.substring(0,4);
                      if(cardnumber === '6011')
                      {
                          setValidCardNum(''); 
                         return 'Discover';
                      }
                      if(cardnumber.length>3)
                      {
                          setValidCardNum('false');
                      } 
                      return '';
                }
                default: {
                    if(cardNum !== '')
                    {
                        setValidCardNum('false');
                    }
                    else
                    {
                        setValidCardNum('')
                    } 
                    return '';
                }
            }
        }
        
        setCardType(creditCardType());
    },[cardNum]);
    
    return(
        <div className="card-input-container">
            <span className={validCardNum !== 'false'?"card-input":"card-input-error"}>
               <input className="input-style" placeholder="0000 0000 0000 0000" value = {cardNum} onChange={(e)=>OnChange(e.target.value)} maxLength="19" onKeyDown={(e)=> Validate(e.key, e.target.value)}></input>
                <CardType CardType={cardType}/>                            
            </span>
            {validCardNum === 'false' && <span style={{color: 'red', position:'relative', top:"70px", left:'-100px'}}>Invalid Card Number</span>}
            {validCardNum === 'true' && <span style={{color: 'green', position:'relative', top:"70px", left:'-100px'}}>Valid Card Number</span>}
        </div>
        
    );
}
export default CardInput;