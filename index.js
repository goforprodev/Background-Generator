// SWITCH STAMENTS CONDITIONALS
// var y = true;
//
// switch (y) {
//   case (3 > 7):
//   console.log(y + ' for 1');
//     break;
//   case (5 === "5"):
//   console.log(y + ' for 2');
//   break;
//   default:
//   console.log(y == false);
// }

// FOR LOOPS
//
// for(var i = 0; i < 10; i += 1){
//   console.log(i);
//
// }
// WHILE LOOPS
// var fruits = ['mango','pineappple','orange','peach'];
// console.log(fruits)
// var i = 0
// while (i < fruits.length) {
//   console.log(fruits[i])
//   i += 2;
// }
const body = document.querySelector('body');
const btn = document.getElementById('btn');
const inpVal = document.getElementById('propertyValue');
const leftColor = document.getElementById('color-left');
const rightColor = document.getElementById('color-right');
const btnCopy = document.getElementById('copy');

function choose(){
    body.style.background = `linear-gradient(to left ,${leftColor.value} , ${rightColor.value})`;
}
const autoGenerate = () => {
    const deg = Math.round(Math.random() * 360);

//    for the first set of rgba values
        const r1 = Math.round(Math.random() * 255);
        const g1 = Math.round(Math.random() * 255);
        const b1 = Math.round(Math.random() * 255);
        const a1 = Math.round(Math.random() * 10)/10;
//        second set of rgba values
        const r2 = Math.round(Math.random() * 255);
        const g2 = Math.round(Math.random() * 255);
        const b2 = Math.round(Math.random() * 255);
        const a2 = Math.round(Math.random() * 10)/10;
//        append as body background color
    const background = body.style.background = `linear-gradient(${deg}deg, rgba(${r1},${g1},${b1},${a1}), rgba(${r2},${g2},${b2},${a2}))`
//    append to input value
    inpVal.value = `${background};`;
}
const copyColor = () =>{
    // const inputVal = inpVal.innerText;
    inpVal.select();
    document.execCommand("copy");
    alert(`Copied ${inpVal.value}`);
    inpVal.value = '';
}
leftColor.addEventListener('input',choose);
rightColor.addEventListener('input',choose);
btn.addEventListener('click',autoGenerate);
btnCopy.addEventListener('click',copyColor);

