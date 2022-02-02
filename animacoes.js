var open = false;

function closeMenu() {
  /// Fechar menu e abrir trocando os icones
  if (open == true) {
    var htmlNav = `<i class="bi bi-list"></i>`;
    $(".navbar-toggler-icon").html(htmlNav);
  } else {
    var htmlNav = `<i class="bi bi-x"></i>`;
    $(".navbar-toggler-icon").html(htmlNav);
  }

  open = !open;
}

var change = false;

function moreAbout() {
  /// trocar conteúdo do AbooutMe ao clicar no botão
  if (!change) {
    var htmlAbout = `
    
    <h1 id='aboutTop'>My Journey!</h1>
    <p id='aboutContent'>
    In 2018 I started to be more interested in technological matters, and I wanted to learn how to develop designs. 
    So I enrolled at <a href="https://www.saga.art.br/" target="_blank">SAGA</a>, a graphic design school. 
    I learned a lot of cool stuff there.
    Therefore, I left SAGA in 2019 and I was stopped for 1 year thinking about what to do. 
    Until 2020 I had the opportunity to learn programming, so I enrolled in a programming course at <a href="https://supergeeks.com.br/" target="_blank">SUPERGEEKS</a>. 
    And so my journey as a programmer began! When I finished high school I wanted to become a technologist as a Systems Analyst at <a href="https://www.fiap.com.br/" target="_blank">FIAP</a>, and I am still there today.
    </p>

    <button class='moreAbout' onclick='moreAbout()'>
    ABOUT ME <i class='bi bi-caret-right-fill'></i>
    </button>`;

    $("#aboutMePart").html(htmlAbout);
  } else {
    var htmlAbout = `

    <h1 id='aboutTop'>Hi!</h1>
    <p id='aboutContent'>
    I'm a Front-End and Back-End developer, designer and python
    programmer. I can consider myself a prudent person, knowing the
    risks before defining my actions. In areas such as logistics or
    production, for example, I can work with methodologies that allow
    me to anticipate scenarios and avoid problems, which will probably
    be comfortable for me. In these areas I can highlight myself by my
    organization characteristics, process vision and cooperative
    profile. For me the mistake is a learning, I work a lot to know
    how to deal with them.
    </p>

    <button class='moreAbout' onclick='moreAbout()'>
    SEE MY JOURNEY <i class='bi bi-caret-right-fill'></i>
    </button>`;

    $("#aboutMePart").html(htmlAbout);
  }
  change = !change;
}

function explorar(designProjects) {
  /// trocar conteúdo da aba de projetos ao clicar no botão de Preview
  var itens = [];

  if (designProjects == "d") {
    itens.push(
      `<a target="_blank" href="https://www.artstation.com/artwork/g2groK"><img src="img/bruno-costa-capitao-america-poligonal-art.jpg" alt=""></a><p>Poligonal Art</p><div class="techIcons">
      <i class="devicon-illustrator-plain colored"></i>
     
    </div>;`
    );
    itens.push(
      `<a target="_blank" href="https://www.artstation.com/artwork/8eWJ5w"><img src="img/bruno-costa-hulk-minimalista.jpg" alt=""></a><p>Minimalist Art</p><div class="techIcons">
      
      <i class="devicon-illustrator-plain colored"></i>
    </div>;`
    );
    itens.push(
      `<a target="_blank" href="https://www.artstation.com/artwork/rAE826"><img src="img/bruno-costa-type-art-urso.jpg" alt=""></a><p>Type Art</p><div class="techIcons">
      <i class="devicon-photoshop-plain colored"></i>
      
    </div>;`
    );
    itens.push(
      ` <a target="_blank" href="https://www.artstation.com/artwork/28lJda"><img src="img/bruno-costa-flat-cene-predios-bpc.jpg" alt=""></a><p>Flat Cene</p><div class="techIcons">
      
      <i class="devicon-illustrator-plain colored"></i>
    </div>;`
    );
    itens.push(
      `<a target="_blank" href="https://www.artstation.com/artwork/lx1o6V"><img src="img/bruno-costa-dark-art-stan-lee.jpg" alt=""></a><p>Dark Art</p><div class="techIcons">
      <i class="devicon-photoshop-plain colored"></i>
      
    </div>;`
    );
    itens.push(
      `<a target="_blank" href="https://www.artstation.com/artwork/zOJykm"><img src="img/bruno-costa-quarto-img.jpg"alt=""></a><p>3D Model</p><div class="techIcons">
      <img class="mayaLogo" src="img/logo/mayaLog.jpg" />
    </div>;`
    );
  } else if (designProjects == "p") {
    itens.push(`
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/FTP_UDP_TCP/FTPInterativo.py"><img src="/img/ftp_img.png" alt=""></a><p>FTP CODE</p>`);
    itens.push(`
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/GeoPy/GEOPYfuncoes.py"><img src="/img/Geopy.png" alt=""></a><p>GEOPY</p>`);
    itens.push(`
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/ArmazenamentoDeDados/ArmazenandoDados.py"><img src="/img/ArmazenamentoDeDados.png" alt=""></a><p>DATA STORAGE</p>`);
    itens.push(`
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/ManipulacaoDeArquivos/Manipula%C3%A7aoDeArquivosFun%C3%A7%C3%B5es.py"><img src="/img/json_img.png" alt=""></a><p>FILE MANIPULATION</p>`);
    itens.push(`
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/ArquivosDeTerceiros/ArquivosDeTerceiros.py"><img src="/img/ArquivosTerceiros.png" alt=""></a><p>EXTERNAL FILES</p>`);
  } else {
    itens.push(`
    <a target="_blank" href="https://aluracord-bybrunocosta.vercel.app/"><img src="/img/AluraCordChatReact.jpg" alt=""></a><p>ALURACORD</p><div class="techIcons">
    <i class="devicon-react-plain colored"></i
    ><i class="devicon-nextjs-original"></i></i
    ><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i></div>
    
  `);
    itens.push(`
    <a target="_blank" href="https://moveit-bybrunocosta.vercel.app/"><img src="/img/MoveIt.jpg" alt=""></a><p>MOVE.IT</p><div class="techIcons">
    <i class="devicon-react-plain colored"></i>
    <i class="devicon-nextjs-original"></i>
    <i class="devicon-javascript-plain colored"></i>
    <i class="devicon-typescript-plain colored"></i>
    <i class="devicon-css3-plain colored"></i>
    </div>
    
  `);
    itens.push(`
    <a target="_blank" href="https://healthtrackapp-bybrunocosta.surge.sh/"><img src="/img/HealthTrackImg1.png" alt=""></a><p>HEALTH TRACK</p><div class="techIcons">
    </i><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i><i class="devicon-jquery-plain-wordmark"></i></div>`);
    itens.push(`
    <a target="_blank" href="https://clock-bybrunocosta.surge.sh/"><img src="/img/Clock_img.png" alt=""></a><p>CLOCK APP</p><div class="techIcons">
    </i><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i></div>`);
    itens.push(` 
    <a target="_blank" href="https://shoppinglist-bybrunocosta.surge.sh"><img src="/img/ShoppingList_Cookies.png" alt=""></a><p>SHOPPING LIST</p><div class="techIcons">
    </i><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i></div>`);
    itens.push(`
    <a target="_blank" href="https://battlerpg-bybrunocosta.surge.sh"><img src="/img/BattleRPG.png" alt=""></a><p>BATTLE RPG</p><div class="techIcons">
    </i><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i><i class="devicon-jquery-plain-wordmark"></i></div>`);
    itens.push(`
    <a target="_blank" href="https://calculator-bybrunocosta.surge.sh"><img src="/img/calculadora_img.png" alt=""></a><p>CALCULATOR</p><div class="techIcons">
    </i><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i></div>`);
    itens.push(`
    <a target="_blank" href="https://earthlayers-bybrunocosta.surge.sh"><img src="/img/earthLayers.png" alt=""></a><p>Landing Page</p><div class="techIcons">
    </i><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i></div>`);
    itens.push(`
    <a target="_blank" href="https://apipokemon-bybrunocosta.surge.sh"><img src="/img/API_Pokemon.png" alt=""></a><p>API - POKEMON</p><div class="techIcons">
    </i><i class="devicon-javascript-plain colored"></i
    ><i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i><i class="devicon-jquery-plain-wordmark"></i></div>
  `);
  }

  var htmlProj = `

    <div class="projetinhos" id="projetinhos">
        <div class="cardsProjetos">
           

  `;

  for (var i = 0; i < itens.length; i++) {
    /// Loop para pegar cada uma das imagens e adicioar dentro do card de cada projecto respectivo
    htmlProj +=
      ` 
      <div class="cardProjeto">
      ` +
      itens[i] +
      `
      </div>`;
  }

  htmlProj += `
  
  </div>
    <a  href="#projects"><button class="botaoVoltar fixed-bottom" onclick="back()">
    BACK <i class="bi bi-caret-left-fill"></i>
  </button></a>
</div>`;

  $(".box").html(htmlProj);
}

function back() {
  /// Voltar a parte de apresentação de projetos
  var html = `
  
  
        <div class="card">
          <h2 class="title">DESIGN PROJECTS</h2>
          <i class="bi bi-vector-pen"></i>

          <h4>
            Made in Illustrator and Photoshop. You can see poligonal arts, type
            arts, minimalist arts and 3D arts.
          </h4>
          <a onclick="explorar('d')" class="link">PREVIEW </a>
          <div class="iconesProject">
            <a
              class="icon"
              target="_blank"
              href="https://www.artstation.com/brunodpc2003"
              ><i class="fab fa-artstation"></i
            ></a>
          </div>
        </div>
        <div class="card">
          <h2 class="title">PYTHON PROJECTS</h2>
          <i class="fab fa-python"></i>
          <h4>
            Made with python. You can see codes of files manipulation,
            dictionaries and more.
          </h4>
          <a onclick="explorar('p')" class="link">PREVIEW</a>
          <div class="iconesProject">
            <a
              class="icon"
              target="_blank"
              href="https://github.com/bpcosta2003"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
        <div class="card">
          <h2 class="title">WEB PROJECTS</h2>
          <i class="bi bi-globe2"></i>
          <h4>
            Made with HTML, CSS and JAVASCRIPT. You can see a shopping list, top
            trumps and more.
          </h4>
          <a onclick="explorar('w')" class="link">PREVIEW </a>
          <div class="iconesProject">
            <a
              class="icon"
              target="_blank"
              href="https://github.com/bpcosta2003"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
      

  `;

  $(".box").html(html);
}

$(document).ready(function () {
  /// Ao clicar no link da navbar adicionar a classe 'active' ao link respectivo (this) e remover do anterior selecionado
  $(".navbar-nav > a").click(function (e) {
    $(".navbar-nav > a").removeClass("active");
    $(this).addClass("active");
  });
});

//* Animação Scroll

const target = document.querySelectorAll("[data-anime]"); /// Recebendo os elementos com a propriedade 'data-anime'

const animationClass = "animate";

const debounce = function (func, wait, immediate) {
  /// função para reduir o numero de vezes e o delay para realizar alguma outra função
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function animeScroll() {
  /// função que irá pegar a posição da barra de scroll para realizar a animação
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (e) {
    if (windowTop > e.offsetTop) {
      e.classList.add(animationClass); /// adicionando a classe de animação, que está feita no CSS
    } else {
      e.classList.remove(animationClass); /// removendo a classe de animação
    }
  });
}

if (target.length) {
  /// Condição para sempre ativar a função caso o user faça o SCROLL
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 100)
  );
}

//* Slider Projects

const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");

let pressed = false; /// Mouse está pressionado ou não ?
let startx; /// X horizontal do cursor dos Cards
let x; /// Vai ser atribuída ao deslocamento da coord X

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

slider.addEventListener("mousedown", (e) => {
  /// Evento quando o mouse está segurando o card
  pressed = true;
  startx = e.offsetX - slider.offsetLeft; /// Fala qual a posição atual do cursor
  slider.style.cursor = "grabbing";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  slider.style.left = `${x - startx}px`;

  checkBoundary();
});

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
});

function checkBoundary() {
  /// Verificar o limite do container com o card, para não deixar arrastar mais qe o necessário
  let outer = sliderContainer.getBoundingClientRect();
  let inner = slider.getBoundingClientRect();

  if (parseInt(slider.style.left) > 0) {
    slider.style.left = `0px`;
  } else if (inner.right < outer.right) {
    slider.style.left = `-${inner.width - outer.width}px`;
  }
}
