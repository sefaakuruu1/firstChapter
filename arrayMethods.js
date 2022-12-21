let ogrenciler=["ali","ahmet","mehmet"];
let sonuc=ogrenciler.length;
ogrenciler.pop();//son elemanı siler
ogrenciler.shift();//ilk elemanı siler
console.log(ogrenciler);
ogrenciler.push("sefa");//eleman ekler
console.log(ogrenciler);
sonuc=ogrenciler.toString();
console.log(sonuc);
sonuc=ogrenciler.join("+");
console.log(sonuc);
let carBrand=["toyota","wolksvagen","peugeout"];
let carBrand2=["audi","mercedes"];
//sonuc=carBrand.concat(carBrand2);
//console.log(sonuc);

sonuc=carBrand.splice(1,1,"bmw","honda");//1.deger eklenmeye nereden baslanacagını,ikinci deger kaç elemanın ssilineceğini,3.ise eklenecek değerleri gosterir.
//silinen değer de return edilir.
console.log(sonuc);
console.log(carBrand);