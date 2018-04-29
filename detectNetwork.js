// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function (cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits 
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardNumStr = String(cardNumber);

  //Switch
  var switchLengths = [16, 18, 19];
  for (length of switchLengths) {
    var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
    for (prefix of prefixes) {
      if (cardNumStr.startsWith(prefix)) {
        return 'Switch';
      }
    }
  }
  //Discover
  if (cardNumStr.length === 16 || cardNumStr.length === 19) {
    var prefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];
    for (var prefix of prefixes) {
      if (cardNumStr.startsWith(prefix)) {
        return 'Discover';
      }
    }
  }
  //Diner's Club and American Express
  if (cardNumStr[0] === '3') {
    return (cardNumStr.length === 14 && (cardNumStr[1] === '8' || cardNumStr[1] === '9')) ? 'Diner\'s Club'
      : (cardNumStr.length === 15 && (cardNumStr[1] === '4' || cardNumStr[1] === '7')) ? 'American Express'
        : 'Not a Master Card and not an American Express Card';
  }
  //Visa
  if (cardNumStr[0] === '4' && (cardNumStr.length === 13 || cardNumStr.length === 16 || cardNumStr.length === 19)) {
    return 'Visa';
  }
  //MasterCard
  if (cardNumStr.length === 16) {
    var prefixes = ['51', '52', '53', '54', '55'];
    for (var prefix of prefixes) {
      if (cardNumStr.startsWith(prefix)) {
        return 'MasterCard';
      }
    }
  }
  //Maestro
  var lengths = [12, 13, 14, 15, 16, 17, 18, 19];
  for (var length of lengths) {
    if (cardNumStr.length === length) {
      var prefixes = ['5018', '5020', '5038', '6304'];
      for (var prefix of prefixes) {
        if (cardNumStr.startsWith(prefix)) {
          return 'Maestro';
        }
      }
    }
  }
  //China Union Pay
  var chinaULengths = [16, 17, 18, 19];
  for (length of chinaULengths) {
    if (cardNumStr.length === length) {
      for (var prefix = 622126; prefix <= 622925; prefix++) {
        if (cardNumStr.startsWith(prefix)) {
          return 'China UnionPay';
        }
      }
      for (var prefix = 624; prefix <= 626; prefix++) {
        if (cardNumStr.startsWith(prefix)) {
          return 'China UnionPay';
        }
      }
      for (var prefix = 6282; prefix <= 6288; prefix++) {
        if (cardNumStr.startsWith(prefix)) {
          return 'China UnionPay';
        }
      }
    }
  }
};






