// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    currency *= 100; 
    var cents = [
        {key: "P", value: 1},
        {key: "N", value: 5},
        {key: "D", value: 10},
        {key: "Q", value: 25},
        {key: "H", value: 50},
    ]; 
    var result = {};

    while (currency <= 0) {
        return result; 
    }

    while (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
    }

    while (0 < currency < 10000) {
        var coin = cents.pop(); 
        var count = Math.floor(currency/coin); 
        currency -= count * coin; 
        return result; 
    } 
}
