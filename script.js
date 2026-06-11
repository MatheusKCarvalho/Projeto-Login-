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
const mensagemLogin = document.getElementById("mensagemLogin")
const mensagemSing = document.getElementById("mensagemSing")
const btnSair = document.getElementById("btnSair")
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

btnSair.addEventListener("click", function(){
    mensagemLogin.textContent = ""
    localStorage.removeItem("usuarioLogado") // isso remove o usuario logado e o texto de bem vindo, quando vc clica em sair
})

entrar.addEventListener("click", function () {
    if (inputUsuario.value === "") {
        mensagemLogin.textContent = "Preencha todos os campos"
        return
    }
    if (inputSenha.value === "") {
        mensagemLogin.textContent = "Preencha todos os campos"
        return
    }

    let usuarioEncontrado = usuarios.find(function (usuario) { //quando o botao de entrar for clicado ele vai comparar para ver se o usuario ja esta cadastrado, se nao tiver da "Usuario errado"
        return inputUsuario.value === usuario.user
    })
    if (usuarioEncontrado) {

        if (inputSenha.value === usuarioEncontrado.password) {
            mensagemLogin.textContent = `Bem vindo ${inputUsuario.value}` //se o usuario tiver cadastrado ele vai verifica se a senha do input é a mesma do usuario cadastrado e se for fecha o popup, se nao for da "Senha errada, tente novamente"
            popupLogin.style.display = "none"
            localStorage.setItem("usuariosLogado", JSON.stringify(usuarioEncontrado))
        } 
        else mensagemLogin.textContent = "Senha errada, tente novamente"

    } else mensagemLogin.textContent = "Usuario errado"
})

criarUser.addEventListener("click", function () {
    if (inputEmail.value == "") {
        mensagemSing.textContent = "Preencha todos os campos"
        return
    }
    if (inputUser.value == "") {
        mensagemSing.textContent = "Preencha todos os campos"
        return
    }
    if (inputPassword.value == "") {
        mensagemSing.textContent = "Preencha todos os campos"
        return
    }

    let usuarioExistente = usuarios.find(function (usuario) { // no criarUser do add event listener basicamente o criarUser verifica se nao ta vazio os campos (o addeventlistener do login tbm verifica os campos), o singUp verifica se o usuario ou email ja existe

        if (inputEmail.value === usuario.email) {
            mensagemSing.textContent = "Email já existente"
            return inputEmail.value === usuario.email
        }
        if (inputUser.value === usuario.user) {
            mensagemSing.textContent = "Usuario já existente"
            return inputUser.value === usuario.user
        }

    })

    if (usuarioExistente) {
        return
    }

    let novoUsuario =
        { user: inputUser.value, email: inputEmail.value, password: inputPassword.value } //cria um novo usuario assim que o botao de criar é clicado, pq ele pega os valores dos inputs e manda pra variavel usuarios, e ele fecha o popup apos cadastro ser concluido
    usuarios.push(novoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios)) //isso é pra armazenar os usuarios no navegador como string
    mensagemSing.textContent = "Usuario criado com sucesso"
    console.log ("Eu sei que não vai dar pra ver pq a popup vai fecha, mas mesmo assim eu deixei, pq se o usuario abrir a popup dnv, vai estar a mensagem lá")
    inputEmail.value = ""
    inputUser.value = ""
    inputPassword.value = ""

    popupSingUp.style.display = "none"
})



let usuariosSalvos = localStorage.getItem("usuarios")
let usuarios

if (usuariosSalvos){
usuarios = JSON.parse(usuariosSalvos) // essa parte do codigo significa, se usuariosSalvos existe, usuarios é igual ao usuariosSalvos do site, se não, usuarios está vazio
}else usuarios = []

let usuariosLogado = localStorage.getItem("usuarioLogado")

if(usuariosLogado){  // essa parte do codigo significa, se usuariosLogado existe, usuarios é igual ao usuariosLogado do site, se sim mostra a mensagem de boas vindas dnv, se não, n faz nada
 let  usuario = JSON.parse(usuariosLogado)
    mensagemLogin.textContent = `Bem vindo ${usuario.user}`
}

// quando o codigo estiver pronto, reler e ve se comentei tudo certo e não esqueci de atualizar nada (vou fazer isso quando tiver pronto para conferir se não esqueci nada)