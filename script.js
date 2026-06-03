const btnLogin = document.getElementById("btnLogin");
const btnSing = document.getElementById("btnSing");
const popupLogin = document.getElementById("popupLogin")
const popupSingUp = document.getElementById("popupSingUp")
const sairLogin = document.getElementById("sairLogin")
const sairSing = document.getElementById("sairSing")
const inputUsuario = document.getElementById("inputUsuario")
const inputSenha = document.getElementById("inputSenha")
const inputEmail = document.getElementById("inputEmail")
const inputUser = document.getElementById("inputUser")
const inputPassword = document.getElementById("inputPassword")
const entrar = document.getElementById("entrar")
const criarUser = document.getElementById("criarUser")


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

entrar.addEventListener("click", function(){
    
})

/*
let usuarios = [
    {id:1, email:"tanana@gmail.com", user:"matheus", password:"semsenha"}
]

usuarios.push[
    {id:2, email:"@gmail.com", user:"suehtam", password:"comsenha"}
]/*

