let coupons = document.getElementById("couponspage");

coupons.addEventListener("click", (r)=>{
    window.location.href="coupons.html"
})



function logo(){
    window.location.assign( "index.html")
}

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
    window.location.assign("signin.html")
})

function signingo(){
    window.location.assign( "signin.html")
}


let form = document.getElementById("form");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let phnnunber = document.getElementById("phnnumber");
let email = document.getElementById("email");
let password = document.getElementById("password");

let signupbtn = document.getElementById("createbtn");

let Lsdata = JSON.parse(localStorage.getItem("details")) || [];

form.addEventListener("submit",(e) =>{

 e.preventDefault();

 let obj={
    name : fname.value,
    number : phnnunber.value,
    emailid : email.value,
    passwordid : password.value,
 }
 console.log(obj)
  Lsdata.push(obj);

  localStorage.setItem("details" , JSON.stringify(Lsdata));
  window.location.href="index2.html"

})