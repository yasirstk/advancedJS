//Map
const num = [2, 3, 4, 5, 6];
const output = [];

for(i = 0; i < num.length; i++){
    const element = num[i];
    const value = element + 10;
    output.push(' ' + value);
}

console.log('Final output = ' + output);

const square = num.map(x => x * x);
console.log('square = ' + square);

const customers = [
    {id:012, name:'Omi'},
    {id:013, name:'Ovi'},
    {id:015, name:'Ofi'},
    {id:016, name:'Oki'},
    {id:012, name:'Oli'},
];
const newCust = [];
for(i = 0; i < customers.length; i++) {
    var customer = customers[i].name;
    newCust.push(customer);
    
};
console.log('New customer list: ', newCust); 




const newNum = num.map(function element(element, index, array){
    return element;
})
console.log('newNum = ' + newNum);
console.log('2nd of newNum = ' + newNum[1]);

const  friends  = [' Abu', ' Anu', ' Apu', ' Adu'];
console.log('Friend is '+ friends.map(friend => friend));

const newNums = [5, 6, 7, 8, 9];

const newResults = newNums.map(function(n) {
    return n * n;
})
console.log('newResults = ' +  newResults);

//Filter 

const evens = newNums.filter(x => x%2 === 0);
const bigger = newNums.filter(x => x > 6);
console.log('Filter example =================')
console.log('evens = ' + evens);
console.log('bigger = ' + bigger);

const newFriends = [
    {name: 'Abu' , age: 12},
    {name: 'Atu' , age: 15},
    {name: 'Anu' , age: 14},
    {name: 'Asu' , age: 16},
    {name: 'Alu' , age: 18},
];
const adultFriends = newFriends.filter(friend => friend.age <= 15);

console.log('adultFriends = ' +adultFriends);


//Reduce 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = nums.reduce(function(result, n) {
    return result + n;
}, 0);
console.log('Reduce example =================');
console.log('total = ' + total);
