// Looping
var row1 = 5;
var row2 = 5;
var row3 = 5;
var star = '';

// Menyusun Barisan Bintang
for(a=0; a<row1; a++){
    star += "* \n";
}

//Menyusun Barisan Bintang Dengan Nested Looping
for(i=0; i<row1; i++){
    for(j=0; j<row2; j++){
        star += '*';
    }
    star += '\n';
}

//Menyusun Barisan Tangga Bintang Dengan Nested Looping
for(b=0; b<row3; b++){
    for(c=0; c<=b; c++){
        star += "*"
    }
    star += '\n'
}
console.log(star);