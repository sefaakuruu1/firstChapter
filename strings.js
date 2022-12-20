let name="sefa";
let surname="kuru";
let city="hatay";
let yas=22;
let emeklilik=(65-yas>0)?"emekliliğe"+(65-yas)+"yıl kaldı":"emeklisiniz"
mesaj=`adım: ${name} ve soyadım ${surname}.${city} sehrinde yasıyorum${emeklilik} `;
console.log(mesaj);