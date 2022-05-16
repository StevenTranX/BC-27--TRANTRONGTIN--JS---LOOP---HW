// function getResult() {
//     let divList = document.getElementsByTagName("div");
//     for ( i = 0; i <= 10 ; i ++ ) {
//         if ( i % 2 === 0 ) {
//             divList.style.display = "block"; 
//             divList.innerHTML = `<p>Div chẵn</p>`
//         } else {
//             divList.style.display = "block"; 
//             divList.innerHTML = `<p>Div lẻ</p>`
//         }
//     }
// }

function getResult ()
{
    const divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i+1 ) % 2 == 0){
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
}