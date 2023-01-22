function logo(){
    window.location.assign( "index.html")
}

let url ="project.js";
let totaldata = []
async function fetchdata(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        totaldata=data;
        DisplayData(data);
       
    }catch(err){
        console.log(err)
    }
}
fetchdata();

let container = document.getElementById("products");

function DisplayData(data){
    container.innerHTML="";
    data.forEach((element) => {
        let div = document.createElement("div");
        div.setAttribute("class", "cards")
        let img =  document.createElement("img");
        let name = document.createElement("p");
        let price =  document.createElement("span");
        price.setAttribute("class", "price1")
        let cartadd = document.createElement("button");
        cartadd.setAttribute( "class","button")
        cartadd.textContent = "Add to Cart";
        let span = document.createElement("span");
        span.setAttribute("class", "price2")
        span.textContent = "$150"

         img.setAttribute("src" , element.image);
         name.textContent = element.name;
         price.textContent = "$"+element.price;

         div.append(img,name,price,span, cartadd);
         container.append(div)
    }); 
}

let menshirts = document.getElementById("Shirts");
let menjean = document.getElementById("Jeans");
let womenshirt = document.getElementById("Women's-Shirt");
let womenjean = document.getElementById("Women's-Jeans");
let kid = document.getElementById("Baby-boys-clothings")
let access = document.getElementById("Accessories");
let womenacces = document.getElementById("Girls-clothings");


menshirts.addEventListener("click", ()=>{
   let filtered = totaldata.filter((a,i)=>{
    if("Shirt" == a.category){
        return true;
    }
    return false;
   })
   DisplayData(filtered)
})

menjean.addEventListener("click", ()=>{
    let filtered = totaldata.filter((a,i)=>{
     if("Jeans" == a.category){
         return true;
     }
     return false;
    })
    DisplayData(filtered)
 })

 womenshirt.addEventListener("click", ()=>{
    let filtered = totaldata.filter((a,i)=>{
     if("Women's Shirt" == a.category){
         return true;
     }
     return false;
    })
    DisplayData(filtered)
 })

 womenjean.addEventListener("click", ()=>{
    let filtered = totaldata.filter((a,i)=>{
     if("Women's Jeans" == a.category){
         return true;
     }
     return false;
    })
    DisplayData(filtered)
 })

 kid.addEventListener("click", ()=>{
    let filtered = totaldata.filter((a,i)=>{
     if("Baby boys clothings" == a.category){
         return true;
     }
     return false;
    })
    DisplayData(filtered)
 })

 access.addEventListener("click", ()=>{
    let filtered = totaldata.filter((a,i)=>{
     if("Accessories" == a.category){
         return true;
     }
     return false;
    })
    DisplayData(filtered)
 })
 
 womenacces.addEventListener("click", ()=>{
    let filtered = totaldata.filter((a,i)=>{
     if("Girls clothings" == a.category){
         return true;
     }
     return false;
    })
    DisplayData(filtered)
 })

let sort = document.getElementById("sort");

sort.addEventListener("change", ()=>{
    if(sort.value == "desc"){
        var dsc = totaldata.sort((a,b) =>{return (b.price - a.price)})
        DisplayData(dsc)
    }else if(sort.value == "asc"){
      var acs=  totaldata.sort((a,b) =>{return (a.price - b.price)})
      DisplayData(acs) 
    }else{
        window.location.assign("productspage.html")
    }
   
})