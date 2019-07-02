// Number 1
// make a sentence "JavaScript is awesome and I love it!""
console.log(' ---- Number 1 ----')
var first = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(first+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh);
console.log(' ');

// Number 2
console.log(' ---- Number 2 ----')
var word = 'wow JavaScript is so cool';
var firstWord = word[0]+word[1]+word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13];
var thirdWord = word[15]+word[16];
var fourthWord = word[18]+word[19];
var fifthWord = word[21]+word[22]+word[23]+word[24];

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log(' ');

// Number 3
console.log(' ---- Number 3 ----');
var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4,13);
var thirdWord3 = word3.substring(15,16);
var fourthWord3 = word3.substring(18,19);
var fifthWord3 = word3.substring(21,24);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log(' ');

// Number 4
console.log(' ---- Number 4 ----');
var word4 = 'wow JavaScript is so cool';
var firstWord4 = word4.substring(0,3);
var secondWord4 = word4.substring(4,14);
var thirdWord4 = word4.substring(15,17);
var fourthWord4 = word4.substring(18,20);
var fifthWord4 = word4.substring(21,25);

var firstWordLength = firstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;


console.log('First Word: ' + firstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with lenght: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with lenght: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with lenght: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with lenght: ' + fifthWordLength);