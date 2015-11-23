var randomNumber = require('./randomnumber.js');
var convertUSD = require('./convertusd.js');

module.exports = {
  money: function(min, max){
    var current = randomNumber.returnRand(min, max);
    return convertUSD.formatNumber(current);
  },

  balance: function(){
    return "Account balance: \n"
  }

};
