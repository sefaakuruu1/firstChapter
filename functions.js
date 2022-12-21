
read(5,"hello");
console.log(area(5,6));
console.log(perimeter(5,6));
headsortails();
divide(10);
add(5,6,7,8,9,20);

function read( a, text){
    for(let i =0;i<a;i++){
        console.log(text);
    
}
}




function area(edge1,edge2){
    return (edge1*edge2);
}
function perimeter(edge1,edge2){
    return (edge1+edge2)*2;
}

function headsortails(){
    let random=Math.random();
    if(random<0.5){
        console.log("heads");
    }
    else{
        console.log("tails");
    }
}

function divide(number){
    let array=[];
    for(let i=0;i<=number;i++){
        if(number%i==0){
          array.push(i);
        }

    }
    console.log(array);
}

//arguments dizi gibi işlev goruyor
function add(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    console.log(total);
}