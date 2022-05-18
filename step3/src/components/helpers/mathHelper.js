var mathHelpers = {
    roundCurrency(number){
        let numberToRound = number * 100 
        return Math.round(numberToRound.toPrecision(10))/100;
    }
}

export default mathHelpers;