// const todo = {
//     id: '1234567',
//     text: 'Pay the bills',
//     completed: false,
// };

// const printTodo = ({text, completed}) => {
//     console.log(`${text}: ${completed}`)
// }

// printTodo(todo);

// const { text:todoText, completed, details:otherDetails = 'No details provided', ...others } = todo;

// console.log(todoText);
// console.log(completed);
// console.log(otherDetails);
// console.log(others);

// const age = [65, 1, 13, 33];
// const [firstAge, ...otherAges] = age;
// console.log(firstAge)
// console.log(otherAges)

// const printTeam = (teamName, coach, ...players) => {
//     const playerString = players.join(', ');
//     console.log(
// `Team: ${teamName}
// Coach: ${coach}
// Players: ${playerString}`)
// }

// const team = {
//     name: 'Liberty',
//     coach: 'Casey Penn',
//     players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
// }

// printTeam(team.name, team.coach, ...team.players);

// let cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
//  cities = [...cities, 'Santiago', ...cities]


//  let house = {
//      bedrooms: 2,
//      bathrooms: 1.5,
//      yearBuilt: 2017,
//  };

//  let newHouse = {
//      basement: true,
//      ...house,
//      bedrooms: 3,
//  }

//  let person = {
//      name: 'Andrew',
//      age: 17,
//  };

//  let location = {
//      city: 'Mumbai',
//      country: 'India',
//  };

//  let overview = {
//      ...person,
//      ...location,
//  }

//  console.log(person)
//  console.log(location)
//  console.log(overview)