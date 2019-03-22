// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
    }
    else if (currency <= 0) {
        return {}; 
    }

    let cents = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};
    let result = {};

        for (let key in cents) {
            let coin = cents[key];
            if (coin <= currency) {
                let count = Math.floor(currency/coin); 
                result[key] = count;
                currency -= count * coin; 
            }
        }  
    return result; 
}

