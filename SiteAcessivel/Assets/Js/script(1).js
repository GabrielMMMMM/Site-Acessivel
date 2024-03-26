//variavel pra pegar dados
const frm = document.querySelector("form");
//variaveis pra resposta
const resp = document.querySelector("#resp");
const respNome = document.querySelector("#respNome");
const respSobrenome = document.querySelector("#respSobrenome");
const respTitulo = document.querySelector("#respTitulo");
const respDescricao = document.querySelector("#respDescricao");
const respTelefone = document.querySelector("#respTelefone");
const respEmail = document.querySelector("#respEmail");

//evento enviar o formulario
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //previnir o envio
  //variaveis inicias
  const nome = frm.elements["nome"].value;
  const sobrenome = frm.elements["sobrenome"].value;
  const titulo = frm.elements["titulo"].value;
  const email = frm.elements["email"].value;
  const telefone = frm.elements["telefone"].value;
  const descricao = frm.elements["descricao"].value;

  //variavel pra confirmação
  var erro = 0;

  //aviso caso falte alguma coisa
  if (nome == "") {
    respNome.innerText = "Digite o Nome!";
    frm.elements["nome"].focus();
    erro += 1;
  } else {
    respNome.innerText = "";
  }

  if (sobrenome == "") {
    respSobrenome.innerText = "Digite o Sobrenome!";
    frm.elements["sobrenome"].focus();
    erro += 1;
  } else {
    respSobrenome.innerText = "";
  }

  if (titulo == "") {
    respTitulo.innerText = "Digite o Título!";
    frm.elements["titulo"].focus();
    erro += 1;
  } else {
    respTitulo.innerText = "";
  }

  if (email == "") {
    respEmail.innerText = "Digite o Email!";
    frm.elements["email"].focus();
    erro += 1;
  } else {
    respEmail.innerText = "";
  }

  if (telefone == "") {
    respTelefone.innerText = "Digite o Telefone!";
    frm.elements["nome"].focus();
    erro += 1;
  } else {
    respTelefone.innerText = "";
  }

  if (descricao == "") {
    respDescricao.innerText = "Digite o Descrição!";
    frm.elements["descricao"].focus();
    erro += 1;
  } else {
    respDescricao.innerText = "";
  }

  if (erro == 0) {
    //aviso de sucesso
    resp.innerText = "Enviado com Sucesso!";
    resp.style.margin = "5px";
    // Limpar os campos
    frm.reset();
  }
});

//botao para diminuir a fonte

function diminuir() {
  var paragrafos = document.querySelectorAll("p, h1, h2, h3, li");

  paragrafos.forEach(function (elemento) {
    var estilos = window.getComputedStyle(elemento, null);
    var tamanho = parseInt(estilos.getPropertyValue("font-size"));

    //limitar quanto cada um vai diminuir
    if (elemento.tagName === "H1") {
      const tamanhoMinimo = 39;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "P") {
      const tamanhoMinimo = 14;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H2") {
      const tamanhoMinimo = 26;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H3") {
      const tamanhoMinimo = 19;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "LI") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
  });
}

//botao para aumentar a fonte
function aumentar() {
  var paragrafos = document.querySelectorAll("p, h1, h2, h3, li");

  paragrafos.forEach(function (elemento) {
    var estilos = window.getComputedStyle(elemento, null);
    var tamanho = parseInt(estilos.getPropertyValue("font-size"));

    //limitar quanto cada um vai aumentar
    if (elemento.tagName === "H1") {
      const tamanhoMaximo = 60;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "P") {
      const tamanhoMaximo = 35;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H2") {
      const tamanhoMaximo = 47;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H3") {
      const tamanhoMaximo = 40;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "LI") {
      const tamanhoMaximo = 31;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
  });
}

function funMenu() {
  var btnMenu = document.getElementById("btnMenu");
  var navBar = document.getElementById("navBar");
  var listNavBar = document.getElementById("listNavBar");

  if (btnMenu.innerHTML == "Menu") {
    btnMenu.innerHTML = "Fechar";
    btnMenu.style.marginBottom = "10px";

    navBar.style.display = "block";
    listNavBar.style.display = "block";
  } else {
    btnMenu.innerHTML = "Menu";
    btnMenu.style.marginBottom = "0px";

    navBar.style.display = "";
    listNavBar.style.display = "";
  }
}

window.onresize = function () {
  if (
    screen.width > 900 &&
    document.getElementById("btnMenu").innerHTML == "Fechar"
  ) {
    listNavBar.style.display = "flex";
  } else if (
    screen.width <= 900 &&
    document.getElementById("btnMenu").innerHTML == "Fechar"
  ) {
    listNavBar.style.display = "block";
  }
};
