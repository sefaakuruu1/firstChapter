let url="https://www.sadikturan.com/";
let kursAdi="Komple Web Geliştirme Kursu";

var sonuc=url.length;
console.log(sonuc);

var result=kursAdi.split(" ");
console.log(result.length);

console.log(url.startsWith("Komple"));
console.log(kursAdi.includes("Eğitimi"));


var lastResult=kursAdi.toLowerCase();
console.log(lastResult);

lastResult=lastResult.replaceAll(" ","-");
lastResult=url+lastResult;
console.log(lastResult);
