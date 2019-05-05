var n = 100; 
var i = 0; 
while (i <= n) { 
   console.log(i++); 
}

var basket_price = 0;
basket = [{name:'t-shirt', price:52}, {name:'t-shirt', price:52}];
basket.push({name:'t-shirt', price:52});
function countBasketPrice() {
    for (i=0; i<basket.length; i++) { 
        basket_price = basket_price + basket[i].price;
    }
    return basket_price;
} 
countBasketPrice();   
console.log(basket_price);

for(i=0; i<10; console.log(i++)){// здесь пусто}
}

var x = 'x';
for (i = 0; i<20; i++) {
    console.log( x );
    x = x + 'x';
}