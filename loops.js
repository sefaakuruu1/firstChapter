let sayilar=[1,5,7,15,3,25];
//1)sayilarin karelerini yazdır
for(let i=0;i<sayilar.length;i++){
    console.log(sayilar[i]*sayilar[i]);
}

for(i=0;i<sayilar.length;i++){
    if(sayilar[i]%5==0){
        console.log(sayilar[i]);
    }
}

for(let index in sayilar){
    let total=0;
    if(sayilar%2==0){
        total+=sayilar[i];
    }
    console.log(total);
}




let urunler=["iphone 12","samsung s22","iphone 13","samsung s23"];
for(let a of urunler){
    console.log(a.toUpperCase());
}
let x=0;
for(let a of urunler){
    
    if(a.includes("samsung")){
        x++;
    }
    console.log(`${x} tane ürün samsung içeriyor`);
}




let ogrenciler=[
    {"ad":"yigit" ,"soyad": "bilgi" ,"notlar":[60,70,80]},
    {"ad": "ada","soyad":"bilgi"  ,"notlar":[80,70,80]},
    {"ad":"cınar" ,"soyad":"turan"  ,"notlar":[70,70,60]}
];
for(let student of ogrenciler){
    let note_Total=0;
    let average=0;
    for(let note of student.notlar){
        note_Total+=note;
    }
    average=note_Total/3;
    console.log(`${student.ad} ${student.soyad} li ogrencinin not ortalamasi: ${average}`);
    if(average>=50){
        console.log("basarılı");
    }
    else{ 
        console.log("basarısız");
}
}