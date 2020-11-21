function ValidateCardNumber( cardNumber, cardType){

        cardNumber =  cardNumber.replace(/\s/g, '');
        const strArr = cardNumber.split('');
        var newArr = 0;
        if((cardNumber.length===15 && cardType==='AMEX') || (cardNumber.length===13 && cardType==='Visa')){
            newArr =  strArr.map(function(currentNumber, index) {
                var currNum = parseInt(currentNumber) * (index % 2 === 0 ? 1 : 2);
                if(currNum > 9){
                    var tens = Math.floor(parseInt(currNum)/10);
                    var ones= parseInt(currNum)%10;                     
                    currNum=tens+ones;
                }
                return newArr + parseInt(currNum);
            });

        }
        if(cardNumber.length === 16 && (cardType==='Visa'|| cardType==='Mastercard'|| cardType==='Discover')){
            newArr =  strArr.map(function(currentNumber, index) {
                var currNum = parseInt(currentNumber) * (index % 2 === 0 ? 2 : 1);
                if(currNum > 9){
                    var tens = Math.floor(parseInt(currNum)/10);
                    var ones= parseInt(currNum)%10;                     
                    currNum=tens+ones;
                }
                return newArr + parseInt(currNum);
            });

        }
        console.log("newArr = ",newArr);
        var sum = 0;
        if(newArr.length>0){ newArr.forEach(element => {
            sum = sum + parseInt(element);              
        })}
        console.log("sum = ", sum);
        if(sum>0 && sum%10===0){            console.log("right number"); return true;}
        console.log("wrong number");
       // setValidCardNum(false);
        return false;
}

  export default ValidateCardNumber;