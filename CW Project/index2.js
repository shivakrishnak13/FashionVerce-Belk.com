let coupons = document.getElementById("couponspage");

coupons.addEventListener("click", ()=>{
    window.location.href="coupons.html"
})

function dropdown(){
    document.getElementById("drop").classList.toggle("show");
}
window.onclick = function(e){
    if(!e.target.matches("#account")){
        var Dropdowns = document.getElementsByClassName("megamenu");
       var i;
        for(let i=0;i< Dropdowns.length;i++){
            var Opendrop = Dropdowns[i];
            if(Opendrop.classList.contains('show')){
                Opendrop.classList.remove('show');

            }
        }
    }
}

let signin = document.getElementById("signin");

signin.addEventListener("click", ()=>{
    window.location.href="index.html"
})

let names = localStorage.getItem("usern")||null;


let Data = JSON.parse(localStorage.getItem("details")) || [];

let namedis = document.getElementById("username");
let mainname = document.getElementById("mainusername")

if(names == null){
    Data.forEach(element => {
    

        namedis.textContent = element.name.toUpperCase()+",";
        mainname.textContent = "Hello,"+" "+ element.name.toUpperCase();
        });
}
else{
    namedis.innerText = names;
    names=null;
}