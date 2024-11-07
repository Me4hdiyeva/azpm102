let input = document.querySelector("#inp")
let button = document.querySelector("#btn")
let list = document.querySelector("#list")

let arr = [];
button.addEventListener("click", function(){
arr.push(input.value);
console.log(arr);
input.value = ""
});

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     i++;
    
//     document.getElementById("list").textContent = element; 
// }