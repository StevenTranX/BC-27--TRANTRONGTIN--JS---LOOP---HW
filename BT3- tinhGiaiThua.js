// function getResult () {
//     let x = document.getElementById("x").value;
//     let n = document.getElementById("n").value;
//     let sum = 0;
//     let product = 1 ; 
 
//     // let product = 0 
//     for (let  i = 1 ; i <= n , i++; ) {
//         product *= x ;
//         sum += product; 
//     }
    
//     const showDiv = document.getElementById("result");
//     showDiv.style.display = "block" ; 
//     showDiv.innerHTML = `<p> Kết quả là ${sum} </p>`
    
// }

let n = 6; 
let product = 1 ; 
for (let i = 1; i <= n ; i ++) {
    product = product * i;
}

console.log (product) ; 

// worked 
function getResult () {
    let n = document.getElementById("n").value; 
    let product = 1; 
    for (let i = 1; i <= n; i++) {
        product *= i 
    }
    const showDiv = document.getElementById("result");
    showDiv.style.display = "block" ; 
    showDiv.innerHTML = `<p> Giai thừa của ${n} là ${product} </p>`
}