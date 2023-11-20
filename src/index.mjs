import "./styles.css";

const data = [1, 2, 3, 4]
//create new array
Array.prototype.monkey = function(){
  console.log('monkey');
}

const food = ['apple', 'banana', 'orange']

food.monkey()
data.monkey()

//create prototype.reverse
const reversed = [...data].reverse();

//create using .find
const food2 = [
  {name: 'apple', quantity: 2},
  {name: 'banana', quantity: 14},
  {name: 'orange', quantity: 9}
];

const foody = food2.find(({name}) => name === "orange");

console.log(foody)


document.getElementById("app").innerHTML = `
<h1>Hello Cristian!</h1>
<h2>Data array: ${data} <h2>
<h2>Food array: ${food} <h2>
<h2>Data array reversed: ${reversed} <h2>
<h2>Foody: ${foody.name} <h2>
`;
