let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);

let convertFahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

let convertFahrenheitToKelvin = function(fahrenheit) {
    return (fahrenheit + 459.67) * (5/9)
}

let getTemperatureConversionsFromFahrenheit = function(fahrenheit)
{
    return {
        fahrenheit: fahrenheit,
        celsius: convertFahrenheitToCelsius(fahrenheit),
        kelvin: convertFahrenheitToKelvin(fahrenheit)
    };
}

console.log(getTemperatureConversionsFromFahrenheit(0));
console.log(getTemperatureConversionsFromFahrenheit(32));
console.log(getTemperatureConversionsFromFahrenheit(100));