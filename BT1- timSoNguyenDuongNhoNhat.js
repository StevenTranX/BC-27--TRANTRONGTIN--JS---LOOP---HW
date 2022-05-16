// Sơ đồ 3 khối : 
// INPUT : không có 
// Process : tạo 2 biến, biến n số nhỏ nhất và biến sum tổng 
// Cứ mỗi bước nhảy n++ là sum được cộng dồn lên -> sum = sum + n -> sum += n 
// OUTPUT : DOM để show kết quả cho user 


function getResult() {
    let sum = 0 
    let n = 0; 
    while (sum < 10000) {
        n++
        sum = sum + n ; 
    }
    const showDiv = document.getElementById("result");
    showDiv.style.display = "block" ; 
    showDiv.innerHTML = `<p>Kết quả là ${n} với tổng là ${sum}<p>`
}
