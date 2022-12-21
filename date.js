let simdi=new Date();   //simdiki tarihi boyle alabılırız
sonuc= simdi.getFullYear();   //get ile bilgiyi almamizi saglar

sonuc=simdi.setFullYear(2000);
sonuc=simdi.setDate(15);
sonuc=simdi.setHours(12);
sonuc=simdi.setTime(112); //miliseconds turunden
let birthday=new Date(2000,2,14); //set istedigimiz tarihi ayarlayabiliriz 
console.log(birthday);
console.log(typeof sonuc);

