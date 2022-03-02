console.log("Hello")

let toogleButton = document.querySelector("#nav-icon4")
let navbarLinks = document.querySelector(".navbar-links")

toogleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle('active')
    toogleButton.classList.toggle('open')
    console.log("clicked")
})


//calculator

let btnUserCalculat = document.querySelector("#userCalculat");


btnUserCalculat.addEventListener("click",function(e){
    // let userKG = parseInt(document.querySelector("#userKG").value);
    let userInaltime = parseInt(document.querySelector("#userInaltime").value);
    let userVarsta = parseInt(document.querySelector("#userVarsta").value);
    let userSex = parseInt(document.querySelector("#userSex").value);

    let showCalcul = document.querySelector("#afterCalcul");
    console.log( userSex)
    console.log("Clicked")
    e.preventDefault();
    let formula = 0
    if (userSex == "1") {
        formula = userInaltime - 100 - [ ((userInaltime - 150)/4) + ((userVarsta-20)/4)]
    } else 
    {
        formula = userInaltime - 100 - [ ((userInaltime - 150)/2.5) + ((userVarsta-20)/6)]
    }
    showCalcul.innerHTML = formula

    

})