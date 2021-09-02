var open = false;

function closeMenu() {
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
  if (!change) {
    var htmlAbout = `
    
    <h1 id='aboutTop'>My Journey!</h1>
    <p id='aboutContent'>
    In 2018 I started to be more interested in technological matters, and I wanted to learn how to develop designs. 
    So I enrolled at SAGA, a graphic design school. 
    I learned a lot of cool stuff there.
    Therefore, I left SAGA in 2019 and I was stopped for 1 year thinking about what to do. 
    Until 2020 I had the opportunity to learn programming, so I enrolled in a programming course at MASTERGEEKS. 
    And so my journey as a programmer began! When I finished high school I wanted to become a technologist as a Systems Analyst at FIAP, and I am still there today.
    </p>

    <button class='moreAbout' onclick='moreAbout()'>
    ABOUT ME <i class='bi bi-caret-right-fill'></i>
    </button>`;

    $("#aboutMePart").html(htmlAbout);
  } else {
    var htmlAbout = `

    <h1 id='aboutTop'>Hi!</h1>
    <p id='aboutContent'>
    I have recently started learning Web development, but I always
    like to be learning and I use this knowledge for my life. I can
    consider myself a prudent person, knowing the risks before
    defining my actions. In areas such as logistics or production,
    for example, I can work with methodologies that allow me to
    anticipate scenarios and avoid problems, which will probably be
    comfortable for me. In these areas I can highlight myself by my
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
  var itens = [];

  if (designProjects == "d") {
    itens.push(`<h1>POLIGONAL ART </h1>
    <a target="_blank" href="https://www.artstation.com/artwork/g2groK"><img src="/img/bruno-costa-capitao-america-poligonal-art.jpg" alt="" /></a>`);
    itens.push(`<h1>TYPE ART</h1>
    <a target="_blank" href="https://www.artstation.com/artwork/rAE826"><img src="/img/bruno-costa-type-art-urso.jpg" alt="" /></a>`);
    itens.push(`<h1>MINIMALIST ART </h1>
    <a target="_blank" href="https://www.artstation.com/artwork/8eWJ5w"><img src="/img/bruno-costa-hulk-minimalista.jpg" alt="" /></a>`);
    itens.push(`<h1>FLAT CENE </h1>
    <a target="_blank" href="https://www.artstation.com/artwork/28lJda"><img src="/img/bruno-costa-flat-cene-predios-bpc.jpg" alt="" /></a>`);
    itens.push(`<h1>DARK ART </h1>
    <a target="_blank" href="https://www.artstation.com/artwork/lx1o6V"><img src="/img/bruno-costa-dark-art-stan-lee.jpg" alt="" /></a>`);
  } else if (designProjects == "p") {
    itens.push(`<h1>FTP CODE</h1>
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/FTP_UDP_TCP/FTPInterativo.py"><img src="/img/ftp_img.png" alt=""></a>`);
    itens.push(`<h1>GEOPY</h1>
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/GeoPy/GEOPYfuncoes.py"><img src="/img/Geopy.png" alt=""></a>`);
    itens.push(`<h1>DATA STORAGE</h1>
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/ArmazenamentoDeDados/ArmazenandoDados.py"><img src="/img/ArmazenamentoDeDados.png" alt=""></a>`);
    itens.push(`<h1>FILE MANIPULATION</h1>
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/ManipulacaoDeArquivos/Manipula%C3%A7aoDeArquivosFun%C3%A7%C3%B5es.py"><img src="/img/json_img.png" alt=""></a>`);
    itens.push(`<h1>EXTERNAL FILES</h1>
    <a target="_blank" href="https://github.com/bpcosta2003/Python_Usefull_Projects/blob/master/ArquivosDeTerceiros/ArquivosDeTerceiros.py"><img src="/img/ArquivosTerceiros.png" alt=""></a>`);
  } else {
    itens.push(`<h1>HEALTH TRACK</h1>
    <a target="_blank" href="https://healthtrackapp-bybrunocosta.surge.sh/"><img src="/img/HealthTrackImg1.png" alt=""></a>`);
    itens.push(`<h1>CLOCK APP</h1>
    <a target="_blank" href="https://clock-bybrunocosta.surge.sh/"><img src="/img/Clock_img.png" alt=""></a>`);
    itens.push(` <h1>SHOPPING LIST</h1>
    <a target="_blank" href="https://shoppinglist-bybrunocosta.surge.sh"><img src="/img/ShoppingList_Cookies.png" alt=""></a>`);
    itens.push(`<h1>BATTLE RPG</h1>
    <a target="_blank" href="https://battlerpg-bybrunocosta.surge.sh"><img src="/img/BattleRPG.png" alt=""></a>`);
    itens.push(`<h1>CALCULATOR</h1>
    <a target="_blank" href="https://calculator-bybrunocosta.surge.sh"><img src="/img/calculadora_img.png" alt=""></a>`);
    itens.push(`<h1>API - POKEMON</h1>
    <a target="_blank" href="https://apipokemon-bybrunocosta.surge.sh"><img src="/img/API_Pokemon.png" alt=""></a>
  `);
  }

  var htmlProj = `

    <div class="imagens">
      <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators"> 
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
  for (var i = 1; i < itens.length; i++) {
    htmlProj +=
      `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="` +
      i +
      `" aria-label="Slide` +
      i +
      1 +
      `"></button>`;
  }

  htmlProj += `
        </div> 
        <div class="carousel-inner">
        `;

  var active = "";

  for (var i = 0; i < itens.length; i++) {
    if (i == 0) {
      active = " active";
    } else {
      active = " ";
    }

    htmlProj +=
      `
      <div class="carousel-item` +
      active +
      `"> ` +
      itens[i] +
      `</div>`;
  }

  htmlProj += `
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <button class="botaoVoltarCarousel" onclick="voltar()">BACK <i class="bi bi-chevron-left"></i></button>
    </div>
  
    `;

  $(".content-projects").html(htmlProj);
}

function voltar() {
  var html = `
  
  <div id="contentProjects">
    <div class="boxProjects">
      <h2 class="title">DESIGN PROJECTS</h2>
      <h4>
        Made in Illustrator and Photoshop. You can see poligonal arts,
        type arts, minimalist arts and 3D arts.
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
  </div>
  <div id="contentProjectsPython">
    <div class="boxProjectsPython">
      <h2 class="title">PYTHON PROJECTS</h2>
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
  </div>
  <div id="contentProjectsWeb">
    <div class="boxProjectsWeb">
      <h2 class="title">WEB PROJECTS</h2>
      <h4>
        Made with HTML, CSS and JAVASCRIPT. You can see a shopping list,
        top trumps and more.
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
  </div>

  `;

  $(".content-projects").html(html);
}

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const elm = document.querySelector(".left");
  const elm2 = document.querySelector(".imgperfil");
  const elm3 = document.querySelector(".skillsContent");
  const elm4 = document.querySelector(".content-projects");
  const coords = elm.getBoundingClientRect();
  const coords2 = elm2.getBoundingClientRect();
  const coords3 = elm3.getBoundingClientRect();
  const coords4 = elm4.getBoundingClientRect();
  const elmX = coords.left + elm.offsetWidth / 2;
  const elmY = coords.top + elm.offsetHeight / 2;
  const elmX2 = coords2.left + elm2.offsetWidth / 2;
  const elmY2 = coords2.top + elm2.offsetHeight / 2;
  const elmX3 = coords3.left + elm2.offsetWidth / 2;
  const elmY3 = coords3.top + elm2.offsetHeight / 2;
  const elmX4 = coords4.left + elm2.offsetWidth / 2;
  const elmY4 = coords4.top + elm2.offsetHeight / 2;
  const angleX = (elmX - x) / -50;
  const angleY = (elmX - y) / 45;
  const angleX2 = (elmX2 - x) / -85;
  const angleY2 = (elmX2 - y) / 80;
  const angleX3 = (elmX3 - x) / -85;
  const angleY3 = (elmX3 - y) / 80;
  const angleX4 = (elmX4 - x) / -65;
  const angleY4 = (elmX4 - y) / 60;
  elm.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  elm2.style.transform = `rotateX(${angleX2}deg) rotateY(${angleY2}deg)`;
  elm3.style.transform = `rotateX(${angleX3}deg) rotateY(${angleY3}deg)`;
  elm4.style.transform = `rotateX(${angleX4}deg) rotateY(${angleY4}deg)`;
});
