// 2 == '2', 2 === 2, but 2 !=== '2',
// == checks just value, 
// === checks value and type

const ab = 2;
const cd ='2';
if(ab == cd){
    console.log('It is true');
}else{
    console.log('It is false');
}