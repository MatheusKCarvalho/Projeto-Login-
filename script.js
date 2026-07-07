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
const inputNovoNome = document.getElementById("inputNovoNome")
const btnSalvaNome = document.getElementById("btnSalvaNome")
const inputNovaSenha = document.getElementById("inputNovaSenha")
const btnSalvaSenha = document.getElementById("btnSalvaSenha")
const deletarConta = document.getElementById("deletarConta")
const perfilUsuario = document.getElementById("perfilUsuario")
const perfilNome = document.getElementById("perfilNome")
const perfilEmail = document.getElementById("perfilEmail")
const btnTema = document.getElementById("btnTema")
const inputPost = document.getElementById("inputPost")
const btnPostar = document.getElementById("btnPostar")
const listaPosts = document.getElementById("listaPosts")
const verSenha = document.getElementById("verSenha")
const verSenhaCadastro = document.getElementById("verSenhaCadastro")
const contadorCaracteres = document.getElementById("contadorCaracteres")

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
    localStorage.removeItem("usuariosLogado") // isso remove o usuario logado e o texto de bem vindo, quando vc clica em sair
    mostrarTelaDeslogada()
})

mostrarTelaDeslogada()

mensagemLogin.addEventListener("click", function(){
    btnSalvaNome.style.display = "block"
    inputNovoNome.style.display = "block"
})

btnSalvaNome.addEventListener("click", function(){
    
    let usuarioLogado = pegarUsuarioLogado()
    let usuarioEncontrado = usuarios.find(function(usuario){
        return usuarioLogado.user === usuario.user
    })
    let novoNome = inputNovoNome.value
    usuarioEncontrado.user = novoNome
    mensagemLogin.textContent = `Bem vindo ${novoNome}`
    inputNovoNome.value = ""
    perfilNome.textContent = `Nome: ${usuarioEncontrado.user}`
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    localStorage.setItem("usuariosLogado", JSON.stringify(usuarioEncontrado))
    inputNovoNome.style.display = "none"
    btnSalvaNome.style.display = "none"
})

btnSalvaSenha.addEventListener("click", function(){
    
    let usuarioLogado = pegarUsuarioLogado()
    let usuarioEncontrado = usuarios.find(function(usuario){
        return usuarioLogado.user === usuario.user
    })
    usuarioEncontrado.password = inputNovaSenha.value
    inputNovaSenha.value = ""
    inputNovaSenha.style.display = "none"
    btnSalvaSenha.style.display = "none"
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    localStorage.setItem("usuariosLogado", JSON.stringify(usuarioEncontrado))
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
            perfilNome.textContent = `Nome: ${usuarioEncontrado.user}`
            perfilEmail.textContent = `Email: ${usuarioEncontrado.email}`
            popupLogin.style.display = "none"
            popupSingUp.style.display = "none"
            localStorage.setItem("usuariosLogado", JSON.stringify(usuarioEncontrado))
            mostrarTelaLogada()

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


let usuario = pegarUsuarioLogado()
if(usuario){  // essa parte do codigo significa, se usuariosLogado existe, usuario é igual ao usuariosLogado do site, se sim mostra a mensagem de boas vindas dnv, se não, n faz nada
    mensagemLogin.textContent = `Bem vindo ${usuario.user}`
    perfilNome.textContent = `Nome: ${usuario.user}`
    perfilEmail.textContent = `Email: ${usuario.email}`

mostrarTelaLogada()
} 

deletarConta.addEventListener("click", function(){
    
    let usuarioLogado = pegarUsuarioLogado()
    let novoArray = usuarios.filter(function(usuario){
    return usuario.user !== usuarioLogado.user
})
usuarios = novoArray
localStorage.setItem("usuarios", JSON.stringify(usuarios))
mensagemLogin.textContent = ""
localStorage.removeItem("usuariosLogado") // isso remove o usuario logado e o texto de bem vindo, quando vc clica em sair
mostrarTelaDeslogada()
})

btnTema.addEventListener("click",function(){
    document.body.classList.toggle("escuro")
    if(document.body.classList.contains("escuro")){
    localStorage.setItem("tema", "escuro")
    } else localStorage.setItem("tema", "claro")
})
    let tema = localStorage.getItem("tema")
    if(tema === "escuro"){
        document.body.classList.add("escuro")
    }

btnPostar.addEventListener("click", function(){

    if(inputPost.value.trim() === ""){
        return
    }
    
    let usuarioLogado = pegarUsuarioLogado()
    let novoPost = {
        id: Date.now(),
        autor: usuarioLogado.user,
        texto: inputPost.value,
        curtidas: 0
    }
    posts.push(novoPost)
    localStorage.setItem("posts", JSON.stringify(posts))
inputPost.value = ""
mostrarPosts()
})


let postsSalvos = localStorage.getItem("posts")
let posts


if (postsSalvos){
    posts = JSON.parse(postsSalvos)
}else{
    posts = []
}

    posts.forEach(function(postagem){
    mostrarPosts()
    
})

listaPosts.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        let id = event.target.dataset.id
        if(event.target.textContent === "Editar"){
            let postEditar = posts.find(function(post){
                return post.id === Number(id)
            })
            let novoTexto = prompt("Edite seu post:", postEditar.texto)
            if (novoTexto === null){
                return
            }
            if(novoTexto.trim() === ""){
            return
            }
            postEditar.texto = novoTexto
            localStorage.setItem("posts", JSON.stringify(posts))
            mostrarPosts()
            
        }else if (event.target.textContent.startsWith("👍")){
            let usuarioLogado = pegarUsuarioLogado()
            if(!usuarioLogado){
                return
            }
            let postCurtir = posts.find(function(post){
            return post.id === Number(id)
            })
            postCurtir.curtidas++
            localStorage.setItem("posts", JSON.stringify(posts))
            mostrarPosts()

        }
        
        else{
            let resposta = confirm("Tem certeza que deseja excluir este post?")
            if (resposta){
        posts = posts.filter(function(post){
        return post.id !== Number(id)
        })
        localStorage.setItem("posts", JSON.stringify(posts))
        mostrarPosts()
            }
        }
    }

})



    //let usuarioEncontrado = usuarios.find(function (usuario) {
        //return inputUsuario.value === usuario.user
    //})


function mostrarTelaLogada(){
    btnLogin.style.display = "none"
    btnSing.style.display = "none"
    btnSair.style.display = "block"
    perfilUsuario.style.display = "block"
    inputNovaSenha.style.display = "block"
    btnSalvaSenha.style.display = "block"
    deletarConta.style.display = "block"
    btnPostar.style.display = "block"
    inputPost.style.display = "block"
}

function mostrarTelaDeslogada(){
    btnLogin.style.display = "block"
    btnSing.style.display = "block"
    btnSair.style.display = "none"
    inputNovoNome.style.display = "none"
    btnSalvaNome.style.display = "none"
    inputNovaSenha.style.display = "none"
    btnSalvaSenha.style.display = "none"
    deletarConta.style.display = "none"
    perfilUsuario.style.display = "none"
    btnPostar.style.display = "none"
    inputPost.style.display = "none"
    perfilNome.textContent = ""
    perfilEmail.textContent = ""
}

function mostrarPosts(){

    let usuarioLogado = pegarUsuarioLogado()
    listaPosts.innerHTML = ""
    posts.forEach(function(postagem){
        if (usuarioLogado){

        if(usuarioLogado.user === postagem.autor){
        listaPosts.innerHTML += postagem.autor + ": " + postagem.texto +
        ' <button data-id="' + postagem.id + '">Editar</button> <button data-id="' + postagem.id + '">Excluir</button> <button data-id="' + postagem.id + '">👍' + postagem.curtidas + '</button><br>' 
    }else{
        listaPosts.innerHTML += postagem.autor + ": " + postagem.texto +
        '<button data-id="' + postagem.id + '">👍' + postagem.curtidas + '</button><br>' 
    }
} else{
            listaPosts.innerHTML += postagem.autor + ": " + postagem.texto +
        '<button data-id="' + postagem.id + '">👍' + postagem.curtidas + '</button><br>' 
}
})}


function pegarUsuarioLogado(){
    return JSON.parse(localStorage.getItem("usuariosLogado"))
}

verSenha.addEventListener("click", function(){
    if (inputSenha.type === "password"){
        inputSenha.type = "text"
    }else{
        inputSenha.type = "password"
    }
})

verSenhaCadastro.addEventListener("click",function(){
    if(inputPassword.type === "password"){
        inputPassword.type = "text"
    }else{
        inputPassword.type = "password"
    }
})

inputPost.addEventListener("input", function(){
    let caracteresPost = inputPost.value.length

    if(caracteresPost > 200){
         inputPost.value = inputPost.value.slice(0,200)
         caracteresPost = inputPost.value.length
    }contadorCaracteres.textContent = caracteresPost + "/200"
})

// quando o codigo estiver pronto, reler e ve se comentei tudo certo e não esqueci de atualizar nada (vou fazer isso quando tiver pronto para conferir se não esqueci nada)
