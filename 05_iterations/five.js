const coding = ['c++', 'java', 'swift', 'rust', 'python']

coding.forEach( function(item){
console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})


//coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: 'java',
        languageFileName: '.java'
    },
    {
        languageName: 'C++',
        languageFileName: '.cpp'
    },
    {
        languageName: 'javascript',
        languageFileName: '.js'
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
})

