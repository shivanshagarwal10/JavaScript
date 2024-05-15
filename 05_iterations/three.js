// for of

//["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(`Each char is of ${greet}`);   
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("JPN", "Japan")

console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-', value);   
}

const MyObject = {
    'game1' : "NFS",
    'game2' : 'spiderman'
}
for (const [key, value] of MyObject) {

    
}