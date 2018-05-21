
exports.cashier=(currencyMap, amount)=>{
    //determine if change needs to be given.
    if(amount % 100 == 0){
        console.log("No need to make change");
        return;
    }
    //set amount of change to be returned
    if(amount > 100){
        amount = 100 - (amount % 100);
    }
    //sort currency, push value:key into array and sort descending.
    let currency = [];
    for(let key in currencyMap){
        currency.push([currencyMap[key], key]);
    }
    currency.sort((a,b)=>{
        return b-a;
    });
    //build map of change to be given.
    let change = {};
    while(amount > 0){
        if(amount >= currency[0][0]){
            change[currency[0][1]] = Math.floor(amount / currency[0][0]);
            amount = (amount % currency[0][0]);
        }
        currency.shift();
    }
    console.log(change);
    return change;
}
