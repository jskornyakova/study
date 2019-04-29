var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 При преинкременте (++x) значение операнда возвращается после приращения на единицу
d = b++; alert(d);           // 1 При постинкременте (x++) значение операнда возвращается перед приращением на единицу
c = (2+ ++a); alert(c);      // 5 = 2+(2+1)
d = (2+ b++); alert(d);      // 4 = 2+2
alert(a);                    // 3
alert(b);                    // 3 (в строке 5 к значению после действия добавилась 1ед.)

a = 2;
var x = 1 + (a *= 2); // 5=1+(2*2)
alert(x);

a = parseInt(prompt("Введите целочисленное число a"));
b = parseInt(prompt("Введите целочисленное число b"));
var s
if (Number.isNaN(a) === false || Number.isNaN(b) === false)
{
    if (a >= 0 && b >= 0) 
    {
        s = a - b;
        alert("Разность a и b равна " + s);
    }
    else if ((a < 0 && b > 0) || (a > 0 && b < 0)  )
    {
        s = a + b;
        alert("Сумма a и b равна " + s);
    } 
    else if( isNaN(a) == true || isNaN(b) == true){
        alert("Ошибка! Вы ввели не число. Попробуйте ещё раз.");
    }
    else {
        s = a * b;
        alert("Произведение a и b равно " + s);
    }
}
else{
    alert("Ошибка! Вы ввели не число. Попробуйте ещё раз.");
}    


var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function input_a () {
    a = prompt('Введите число от 1 до 15');
    if (a !== null && (a < 1 || a > 15 || isNaN(a))) {
        input_a();
    }
}
input_a();
switch(a) {
    case 1:
        alert(arr);
        break;
    case 15:
        alert(a);
        break;
    null
        break;
    default:
        alert(arr.slice(a));
}

var res;

function add ( a, b ) { //Сложение 
    return res = a + b;
    }

function sub ( a, b ) { //Вычитание
    return res = a - b;
    }

function div ( a, b ) { //Деление
    return res = a / b;
    }

function mul ( a, b ) { //Умножение
    return res = a * b;
    }



function mathOperation(arg1, arg2, operation){
    switch (operation) { 
        case add: 
            return add ( arg1, arg2 ); 
            break; 
        case sub: 
            return sub ( arg1, arg2 ); 
            break; 
        case div: 
            return div ( arg1, arg2 ); 
            break; 
        case mul: 
            return mul ( arg1, arg2 ); 
            break; 
    } 
}

a = +prompt("Введите целочисленное число a");
b = +prompt("Введите целочисленное число b");
add ( a, b );
alert("Сложение: " + res);
sub ( a, b );
alert("Вычитание: " + res);
div ( a, b );
alert("Деление: " + res);
mul ( a, b );
alert("Умножение: " + res);


alert(mathOperation(a, b, add));


if(null !== 0){
        alert("true");}else{alert("false");} //true
if(null >= 0){
        alert("true");}else{alert("false");} //true
if(null === 0){
        alert("true");}else{alert("false");} //false


    
function power(val, pow){
    if ( pow === 0 ) { 
        return 1;
    }
    else {
        return val * power( val, pow - 1);
    }
}
alert("Возведение в степерь: " + power(a,b));