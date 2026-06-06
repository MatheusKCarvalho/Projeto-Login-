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
// chamando os itens do html e guardando na variavel




btnLogin.addEventListener("click", function () {
    popupLogin.style.display = "block";      //quando o btnLogin for clicado, ele vai abrir 
})

btnSing.addEventListener("click", function () {
    popupSingUp.style.display = "block"; //quando o btnSing for clicado ele vai abrir
})

sairLogin.addEventListener("click", function () {
    popupLogin.style.display = "none"; //quando o botao de sairLogin for clicado ele vai fechar
})

sairSing.addEventListener("click", function () {
    popupSingUp.style.display = "none"; //quando o botao de sairSing for clicado ele vai fechar
})

entrar.addEventListener("click", function () {
    if(inputUsuario.value === ""){
        console.log("Preencha todos os campos")
        return
    }
    if(inputSenha.value === ""){
        console.log("Preencha todos os campos")
        return
    }

    let usuarioEncontrado = usuarios.find(function (usuario) { //quando o botao de entrar for clicado ele vai comparar para ver se o usuario ja esta cadastrado, se nao tiver da "Usuario errado"
        return inputUsuario.value === usuario.user
    })
    if (usuarioEncontrado) { 

        if (inputSenha.value === usuarioEncontrado.password) {
            console.log("Login Realizado com sucesso") //se o usuario tiver cadastrado ele vai verifica se a senha do input é a mesma do usuario cadastrado, se nao for da "Senha errada, tente novamente"
        }else console.log("Senha errada, tente novamente")

    } else console.log("Usuario errado")
})

criarUser.addEventListener("click", function () {
    if(inputEmail.value == ""){
        console.log("Preencha todos os campos")
        return
    }
    if(inputUser.value == ""){
        console.log("Preencha todos os campos")
        return
    }
    if(inputPassword.value == ""){
        console.log("Preencha todos os campos")
        return
    } 

    let usuarioExistente = usuarios.find(function(usuario){ // no criarUser do add event listener basicamente o criarUser verifica se nao ta vazio os campos (o addeventlistener do login tbm verifica os campos), o singUp verifica se o usuario ou email ja existe

        if (inputEmail.value === usuario.email){
            console.log("Email já existente")
            return inputEmail.value === usuario.email
        }
        if (inputUser.value === usuario.user){
            console.log("Usuario já existente")
            return inputUser.value === usuario.user
        }

    })

    if (usuarioExistente) {
        return
    }

    let novoUsuario =
        { user: inputUser.value, email: inputEmail.value, password: inputPassword.value } //cria um novo usuario assim que o botao de criar é clicado, pq ele pega os valores dos inputs e manda pra variavel usuarios
    usuarios.push(novoUsuario)

    console.log("Usuario criado com sucesso")
})

let usuarios = [
    { id: 1, email: "tanana@gmail.com", user: "matheus", password: "semsenha" } //variavel que guarda o array de usuarios
]
