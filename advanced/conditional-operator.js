const myAge = 16;
// let message = myAge >= 33 ? 'You can vote!' : 'You cannot vote';

// console.log(message);

const showPage = () => 'showing the page';

const showErrorPage = () =>  'showing the error page'

console.log(myAge >= 21 ? showPage() : showErrorPage())

const team = ['Tyler', 'Porter', 'bill', 'ted', 'bruce'];

const message = team.length <= 4 ? `Team size ${team.length}` : 'Too many people on team';
console.log(message)