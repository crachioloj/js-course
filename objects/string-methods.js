let name = 'Joseph Crachiolo';

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

let password = 'abc1234password';
console.log(password.includes('password'));

password = 'abc1234dpodfkjc';
console.log(password.includes('password'));
name = '   Joseph Crachiolo     ';
console.log(name);
console.log(name.trim());

let isValidPassword = function(password){
    let containsPw = password.includes('password');
    let invalidLength = password.length <= 8;
    return !containsPw && !invalidLength;
}

console.log(isValidPassword('asdf'));
console.log(isValidPassword('abcdffefad3password'));
console.log(isValidPassword('asir34324jkvnkefe'));