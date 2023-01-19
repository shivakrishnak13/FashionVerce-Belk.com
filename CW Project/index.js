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
            if(Opendrop.classList.contains("show")){
                Opendrop.classList.remove("show");

            }
        }
    }
}

let signin = document.getElementById("signin");

signin.addEventListener("click", ()=>{
    window.location.href="signin.html"
})

