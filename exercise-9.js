// Tugas 1
function shoutOut(){
   return 'Halo Function!';
}
console.log(shoutOut());

// Tugas 2
var num1 = 5;
var num2 = 6;
function calculateMultiply(num1,num2){
    return num1 * num2;
};
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// Tugas 3
var name   = 'Maulana Ghozi';
var age    = 22;
var addres = 'Depok, West Java, Indonesia';
var hobby  = 'Coding and Travelling';
function processSentence(name, age, addres, hobby){
 return 'My Name is '+name+'. I am '+ age +' years old, my addres in '+ addres+ ' and my hobbies are '+ hobby;
};
var fullSentence = processSentence(name, age, addres, hobby);
console.log(fullSentence);