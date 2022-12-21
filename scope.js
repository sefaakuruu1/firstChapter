var isim="sefa";
const adres="istanbul";//const ile atanan degeri degistiremeyiz

function yazdir(){ //fonksiyonlar kensi scopelarını olusturur ve dısarıdan erişilemez.
    var isim="ayse";
    var yas=20;
    console.log("function scope:",isim,yas);
}

if(true){
    let cinsiyet="erkek";
    var isim="ali";
    console.log(isim,cinsiyet);
}
yazdir();
console.log(isim);//var ile tanımlanmıssa ulasabiliriz
console.log(cinsiyet); //let ile tanımlanan bi degiskene if else disinda ulasamayiz.

