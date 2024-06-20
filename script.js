let arr = [
    {
        name: 'Ramiz',
        age: 16,
        isMarried: true
    },
    {
        name: 'Jaxongir',
        age: 15,
        isMarried: false
    },
    {
        name: 'Kamran',
        age: 17,
        isMarried: false
    },
    {
        name: 'Amin',
        age: 18,
        isMarried: true
    }
]

let unmarriedUsers = arr.filter(user => !user.isMarried);
console.log(unmarriedUsers);

let middleAge = arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
console.log( middleAge);

let oldestUser = arr.reduce((max, user) => user.age > max.age ? user : max, arr[0]);
console.log("Самый старший:", oldestUser);

let youngestUser = arr.reduce((min, user) => user.age < min.age ? user : min, arr[0]);
console.log("Самый младший:", youngestUser);

// найти всех не женатых 
// найти средний возраст
// найти самого старшего 
// найти самого младшего