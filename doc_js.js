var num = prompt('Введите число от 0 до 999.'); 
if (num < 0 || isNaN(num)==true) {
    console.log('Введите число в диапозоне от 0 до 999');
} else {
    var numObj = numPreObject(num);
    console.log(numObj);
}
function numPreObject(num) {
    var arrNum = num.split('');
    var numObj = {};
    var i = 0;
    while (i < 3)
    {
        if(arrNum.length < 3){
            arrNum.unshift(0);
        }
        i++;
    } 
    if (arrNum.length > 3) {
        return numObj = null;
    } else {
        numObj['единицы'] = +arrNum[0]; 
        numObj['десятки'] = +arrNum[1]; 
        numObj['сотни'] = +arrNum[2]; 
        return numObj;
    }
}


var i = 0; 
var basket_price = 0;
basket = [{name:'t-shirt', price: 52, count: 3}, {name:'t-shirt', price: 52, count: 2}];
function countBasketPrice() {
    for (i=0; i<basket.length; i++) { 
        basket_price = basket_price + (basket[i].price * basket[i].count);
    }
    return basket_price;
} 
countBasketPrice();   
console.log(basket_price);


