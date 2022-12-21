let fruits=["Elma","Armut","Muz","Cilek"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

console.log(fruits.includes("Elma"));

console.log(fruits.push("Kiraz"));
console.log(fruits.splice(fruits.length-2,2));

let stu1=["Yİgit Bilgi",2010,[70,60,80]];
let stu2=["Ada Bİlgi",2012,[80,80,90]];
let stu3=["Ahmet Turan",2009,[60,60,70]];
let now=new Date();

var stu1Years=now.getFullYear()-stu1[1];
console.log(stu1Years);
var stu2Years=now.getFullYear()-stu2[1];
console.log(stu2Years);
var stu3Years=now.getFullYear()-stu3[1];
console.log(stu3Years);

var stu1Average=(stu1[2][0]+stu1[2][1]+stu1[2][2])/3;
console.log(stu1Average);
var stu2Average=(stu2[2][0]+stu2[2][1]+stu2[2][2])/3;
console.log(stu2Average);
var stu3Average=(stu3[2][0]+stu3[2][1]+stu3[2][2])/3;
console.log(Math.round(stu3Average));