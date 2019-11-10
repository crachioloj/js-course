// let add = function(a, b, c){
//     return a + b + c;
// }

// let result = add(2, 3, 10);
// console.log(result);

// let result2 = add(2, 3, '10');
// console.log(result2);

// let getScoreText = function(name = 'Anonymous', score = 0)
// {
//     return 'Name: ' + name + ' - Score: ' + score;
// }

// console.log(getScoreText('JC', 5000));
// console.log(getScoreText('JC'));
// console.log(getScoreText());

let getTip = function(total, percentage = .2)
{
    return total + (total * percentage);
}

console.log(getTip(100))
console.log(getTip(100, .10))
console.log(getTip(100, 0))
console.log(getTip())