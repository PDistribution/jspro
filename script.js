const menubtn = document.getElementById("menubtn")
const liens = document.getElementById("liens")

menubtn.addEventListener("click", ()=>{
    if(liens.style.display === "block"){
    liens.style.display = "none"
    menubtn.textContent ="☰"

    }else{
        liens.style.display ="block"
        menubtn.textContent ="✗"
    }
})