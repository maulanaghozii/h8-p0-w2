// Melakukan Looping menggunakan While
console.log('--- Looping with while ---');
var number = 2;
console.log('LOOPING PERTAMA');
while(number <= 20){
    console.log(number + ' - I Love Coding');
    number = number + 2;
};

var numberA = 20;
console.log('LOOPING KEDUA');
while(numberA >= 2){
    console.log(numberA + ' - I will become fullstack developer');
    numberA = numberA - 2;
}


// Melakukan Looping menggunakan For
console.log('--- Looping with for ---');
console.log('LOOPING PERTAMA');
for(numberB = 1; numberB <= 20; numberB++){
    console.log(numberB + ' - I Love Coding');
}

console.log('LOOPING KEDUA');
for(numberC = 20; numberC >= 1; numberC--){
    console.log(numberC + ' - I will become fullstack developer');
}

// Menentukan nilai ganjil dan genap
console.log('--- Ganjil Genap ---');
var numberD = 1;
while (numberD <=100){
    if(numberD % 2 != 0){
        console.log(numberD + ' is ODD');
    } else{
        console.log(numberD + ' is EVEN');
    } 
    numberD++
}

// Menentukan nilai kelipatan dari 3
console.log('--- KELIPATAN 3 ---');
for(numberE = 1; numberE<=100; numberE += 2){
    if(numberE % 3 == 0){
        console.log(numberE + ' KELIPATAN 3');
    } else{
        console.log("");
    }
}

// Menentukan nilai kelipatan dari 6
console.log('--- KELIPATAN 6 ---');
for(numberF = 1; numberF <= 100; numberF += 5){
    if(numberF % 6 == 0){
        console.log(numberF + ' KELIPATAN 6');
    } else {
        console.log(' ');
    }
}

// Menentukan nilai kelipatan dari 10
console.log('--- KELIPATAN 10 ---');
for(numberG = 1; numberG <= 100; numberG += 9){
    if(numberG % 10 == 0){
        console.log(numberG + ' KELIPATAN 10');
    } else{
        console.log(' ')
    }
}