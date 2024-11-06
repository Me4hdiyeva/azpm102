function getRGB(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b} )`
}
let x = 0;
let num = document.querySelector(".num")
let btn = document.querySelector(".btn")
let ipt = document.querySelector(".check")
let txt = document.querySelector(".txt")
let copy = document.querySelector(".copy")
btn.addEventListener("click",function(){
    x++;
    const rgb = getRGB();
    document.body.style.background = rgb;
    btn.style.color = rgb;
    num.innerText = x;
    txt.value = rgb


})

copy.addEventListener("click",function(){
    
    navigator.clipboard.writeText(txt.value);
    alert("Copied")
}
) 

window.addEventListener("keydown", function (v) {
    if(v.key === "w"){
        x++;
    }
    
    if (v.key === "s") {
        x--;
    }

    num.innerText = x;
    
});







