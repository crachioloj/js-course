let greetUser = function() {
    console.log('Welcome user');
};

greetUser();

let square = function(num){
    let result = num * num;
    return result;
}

console.log(square(3));
console.log(square(9999.0001));

let convertFahrenheitToCelsius = function(fahrenheit)
{
    let celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));