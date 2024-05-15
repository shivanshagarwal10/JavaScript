const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    //console.log(`${key} is a shorcut for the following word ${myObject[key]}`);
    
const programming = ['c++', 'java', 'swift', 'rust', 'python']

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("JPN", "Japan")

for (const key in map) {
    console.log(map[key]);
}
}