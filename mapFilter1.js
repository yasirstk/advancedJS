const friends = [
    {name: 'Abu' , age: 12, id: 011},
    {name: 'Atu' , age: 15, id: 021},
    {name: 'Anu' , age: 14, id: 041},
    {name: 'Asu' , age: 16, id: 051},
    {name: 'Alu' , age: 18, id: 061},
];
const frndsNames = friends.map(friend => friend.name);
const ids = friends.map(friend => friend.id);
const frndsAge = friends.filter(x => x.age>15);
const friendOldest = friends.find(x => x.age>14);
console.log(frndsAge);
console.log( frndsNames);
console.log( ids);
console.log( friendOldest);

