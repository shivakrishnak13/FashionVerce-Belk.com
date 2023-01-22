let coupons = document.getElementById("couponspage");

coupons.addEventListener("click", ()=>{
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

// signin.addEventListener("click", ()=>{
//     window.location.assign("signin.html")
// })

let data = JSON.parse(localStorage.getItem("details")) || [];

let formel = document.querySelector("form")

let emailid = document.getElementById("email");
let password = document.getElementById("password");
let incorrect = document.getElementById("incorrect");

formel.addEventListener("submit" ,(e) => {
   
e.preventDefault();
let count=0;

for(let i=0;i<data.length;i++){
    if(emailid.value == data[i].emailid && password.value == data[i].passwordid){
        count++;
        let username = data[i].name;
       console.log(username)
        localStorage.setItem("usern", username);
        window.location.href="index2.html"

    }   
    
        
}
if(count==0) incorrect.textContent = "The Email or Password you entered is incorrect.."
    
   

   
    
});


