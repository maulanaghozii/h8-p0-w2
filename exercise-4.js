// Init date 
var date = 1; //assign value date variable (1 to 31)
// Init month
var month = 8; //assign value month variable (1 to 12)
// Init Year
var year = 2019; //assign value year variable (1900 to 2200)

if((date >= 1 && date <= 31) && (month >= 1 && month <= 12) && (year >= 1900 && year <= 2200)){
    switch (month){
        case 1:   { month = 'January'; break; }
        case 2:   { month = 'February'; break; }
        case 3:   { month = 'March'; break; }
        case 4:   { month = 'April'; break; }
        case 5:   { month = 'May'; break; }
        case 6:   { month = 'June'; break; }
        case 7:   { month = 'July'; break; }
        case 8:   { month = 'August'; break; }
        case 9:   { month = 'September'; break; }
        case 10:   { month = 'October'; break; }
        case 11:   { month = 'November'; break; }
        case 12:   { month = 'Desember'; break; }
    }
    console.log('hari ini tanggal ' + date + " "+ month + " "+year);
} else{
    console.log('Invalid Input');
}
