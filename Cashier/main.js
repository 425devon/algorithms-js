/*for brevity all values are being passed in as whole numbers
i.e $1.54 is expressed as 154 */

const makeChange = require('./changeMaker');

const currency = {
    "droople":80,
    "floople":50,
    "moople":30,
    "hoople":10,
    "flark": 5,
    "tat": 1
}
//would expect to return 1 floople, 2 hoople, 1 flark, and 2 tat.
makeChange.cashier(currency,123);
//would expect to return i droople.
makeChange.cashier(currency,80);
//would expect to return "No change given"
makeChange.cashier(currency, 200);