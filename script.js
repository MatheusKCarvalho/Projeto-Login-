const btnLogin = document.getElementById("btnLogin");
const btnSing = document.getElementById("btnSing");
const popupLogin = document.getElementById("popupLogin")
const popupSingUp = document.getElementById("popupSingUp")
const sairLogin = document.getElementById("sairLogin")
const sairSing = document.getElementById("sairSing")


btnLogin.addEventListener("click", function() {    popupLogin.style.display = "block";
})

btnSing.addEventListener("click", function() {
    popupSingUp.style.display = "block";
})
 
sairLogin.addEventListener("click", function(){
    popupLogin.style.display = "none";
})

sairSing.addEventListener("click", function(){
    popupSingUp.style.display = "none";
})