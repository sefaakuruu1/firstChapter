let order1={
"odreId":101,
"orderDate":"31.12.2022",
"payment":"credit card",
"address":{
    "street":"yahya kemal street",
    "district":"izmit",
    "city":"kocaeli"
},
"product":[
    {
        "product id":5,
        "productName":"iphone13pro",
        "productPrice":22000
    },
    {
        "product id":6,
        "productName":"iphone13promax",
        "productPrice":25000
    },


],

};
let order2={
    "odreId":101,
    "orderDate":"31.12.2022",
    "payment":"credit card",
    "address":{
        "street":"yahya kemal street",
        "district":"izmit",
        "city":"kocaeli"
    },
    "product":[
        {
            "product id":5,
            "productName":"iphone13pro",
            "productPrice":22000
        },
        {
            "product id":6,
            "productName":"iphone13promax",
            "productPrice":25000
        },
    
    
    ],
    
    };
    let orders=[order1,order2];
    let order1Total=order1.product[0].productPrice*1.18+order1.product[1].productPrice*1.18;
    let order2Total=order2.product[0].productPrice*1.18+order1.product[1].productPrice*1.18;
    let total=order1Total+order2Total;
    console.log("order1 payment: ",order1Total);
    console.log("order2 payment: ",order2Total);
    console.log("total payment: " ,total);