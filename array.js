// Arrays Demo
// Author https://nagvbt.github.io/

// Declaration and Iteration
let vegetables = ["ladysfinger", "potato", "califlower"];
// fruits.forEach(fruit => console.log(fruit));  

// Array Methods
vegetables.push("ladysfinger"); // Add at the end
// fruits.forEach(fruit => console.log(fruit));  

vegetables.pop(); // Remove from the end
// fruits.forEach(fruit => console.log(fruit));

vegetables.shift(); // Remove from the start
// fruits.forEach(fruit => console.log(fruit));

vegetables.unshift("califlower"); // Add at the start  
// fruits.forEach(fruit => console.log(fruit));

// 
let numbers = [1, 8, 5, 6, 2];
let squared = numbers.map(num => num * num); 
squared.forEach(sno => console.log(sno));
