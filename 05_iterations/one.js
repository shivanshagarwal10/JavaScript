// for
/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log('5 is the best number');
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and inner loop value {i}`);
        console.log(i + '*' + j + ' = ' + i * j );
        
    }    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let i = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${i}`);
}
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}