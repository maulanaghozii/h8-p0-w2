// Init date 
var date = 31; //assign value date variable (1 to 31)
// Init month
var month = 2; //assign value month variable (1 to 12)
// Init Year
var year = 2201; //assign value year variable (1900 to 2200)

switch (date){
    case 1: { date = '1'; break;}
    case 2: { date = '2'; break;}
    case 3: { date = '3'; break;}
    case 4: { date = '4'; break;}
    case 5: { date = '5'; break;}
    case 6: { date = '6'; break;}
    case 7: { date = '7'; break;}
    case 8: { date = '8'; break;}
    case 9: { date = '9'; break;}
    case 10: { date = '10'; break;}
    case 11: { date = '11'; break;}
    case 12: { date = '12'; break;}
    case 13: { date = '13'; break;}
    case 14: { date = '14'; break;}
    case 15: { date = '15'; break;}
    case 16: { date = '16'; break;}
    case 17: { date = '17'; break;}
    case 18: { date = '18'; break;}
    case 19: { date = '19'; break;}
    case 20: { date = '20'; break;}
    case 21: { date = '21'; break;}
    case 22: { date = '22'; break;}
    case 23: { date = '23'; break;}
    case 24: { date = '24'; break;}
    case 25: { date = '25'; break;}
    case 26: { date = '26'; break;}
    case 27: { date = '27'; break;}
    case 28: { date = '28'; break;}
    case 29: { date = '29'; break;}
    case 30: { date = '30'; break;}
    case 31: { date = '31'; break;}
    default: { date = 'tanggal invalid'}
}

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
    default: { month = 'bulan invalid'}
}

if((year<=1900) || (year>=2200)){
    year = "Tahun invalid";
}

console.log(date + " "+ month + " "+year);