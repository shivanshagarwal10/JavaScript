const marvel_heros = ["IronMan", "Hulk", "Thor"]
const dc_heros = ["superman", "batman", "flash"]

 
 const all_Heros = marvel_heros.concat(dc_heros);
 console.log(all_Heros);

// const all_Heros = [...marvel_heros, ...dc_heros]
 console.log(all_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [5, 6, [4, 5, 6]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shivansh"));
console.log(Array.from("Shivansh"));
console.log(Array.from({name: "Shivansh"})) // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));






