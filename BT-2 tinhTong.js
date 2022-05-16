

let x = 3 ; 
let n = 3 ; 
let sum = 0 ; 
for ( let i = 1 ; i <= n ; i++) {
    sum += x**i 
}
console.log (sum); 
// worked -> let's write function this time 

function getResult () {
    let x = +document.getElementById("x").value;
    let n = +document.getElementById("n").value;
    let sum = 0;
   
    // let product = 0 
    for (let  i = 1 ; i <= n , i++; ) {
        sum += x**i
    }
    
    const showDiv = document.getElementById("result");
    showDiv.style.display = "block" ; 
    showDiv.innerHTML = `<p> Tổng của phép tính là ${sum} </p>`
    
}