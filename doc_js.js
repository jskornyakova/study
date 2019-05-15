var i = 0; 
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