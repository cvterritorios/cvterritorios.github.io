//Data
const dt = new Date();
const today = {
  dia: dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate() + "",
  mes:
    dt.getUTCMonth() + 1 < 10
      ? "0" + dt.getUTCMonth() + 1
      : "" + (dt.getUTCMonth() + 1),
  ano: dt.getFullYear(),

  date() {
    return this.ano + "-" + this.mes + "-" + this.dia;
  },
};

//Navegação
const Url = {
  path: window.location.href,
  params: new URLSearchParams(window.location.search),
};

//User
const User = {
  uid: "",
  adm: false,
  username: "",
  nome: "",
  sobrenome: "",
  dataNascimento: [],
  amigos: [],
  theme: "dark",
  id: "",
  descricao: "",
  gostos: [],
  new_chat: true,
  chats: [{}],
};

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

const html_Comp = {
  rodape() {
    _html.elemento(
      "div",
      ["id", "class"],
      ["rodape", "w-100 bg-dark d-flex"],
      "conteudo",
      `
        <hr class="mt-0">
        <div class="w-100 d-flex justify-content-center">
            <div class="w-75 text-center">
                Todos direitos reservados a Greaclos 2023
            </div>
        </div>
        `
    );
  },

  conteudo(cont) {
    if (cont == "clear") {
      document.querySelector("#conteudo").innerHTML = "";
    } else {
      _html.elemento(
        "div",
        ["id", "class"],
        ["inner-conteudo", "w-100 pt-4 d-flex justify-content-center"],
        "conteudo",
        `<div class="mt-0 m-3" id="cont-cont">
            ${cont}
            </div>
        `
      );
    }
  },

  async adm_CRUD(mode, docId) {
    document.querySelector("#modal").innerHTML = "";

    console.log("in ADM CRUD");
    _html.elemento(
      "button",
      ["id", "type", "class", "data-bs-toggle", "data-bs-target"],
      [
        "adm-modal",
        "button",
        "btn btn-primary visually-hidden",
        "modal",
        "#admModal",
      ],
      "modal",
      "ADM CRUD Modal"
    );

    if (mode === "create") {
      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-backdrop",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          "admModal",
          "modal fade",
          "static",
          "false",
          "-1",
          "#admModalLabel",
          "true",
        ],
        "modal",
        `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div
          class="modal-content rounded-4 shadow"
          style="background-color: ${Theme.modal.backColor}; color: ${Theme.modal.text}"
        >
          <div
            class="modal-header p-5 pb-4 border-bottom-0"
          >
            <h1 class="fw-bold mb-0 fs-2">Adicionar Jogo</h1>
            <button
              type="button"
              class="btn-close ${Theme.modal.closeBtn}"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5 pt-0">
              <div class="w-100"></div>

              <div class="input-group input-group-sm mb-3">
                <div class="form-floating">
                <input
                  required=""
                  type="text"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Nome do Jogo"
                  id="nameGAdm"
                /><label for="nameGAdm" style="color: ${Theme.form.colorText}">Nome do Jogo</label>
              </div>
              <div class="form-floating">
                  <input
                    required=""
                    type="number"
                    class="form-control"
                    style="background-color: ${Theme.form.textbox}"
                    placeholder="Nº de players"
                    id="n_plGAdm"
                  /><label for="n_plGAdm" style="color: ${Theme.form.colorText}">Nº de players</label>
                </div>
              </div>

              <div class="form-floating mb-3">
                <textarea class="form-control" style="background-color: ${Theme.form.textbox}; height: 80px;" placeholder="Descrição do jogo" id="tescGAdm"></textarea>
                <label for="tescGAdm" style="color: ${Theme.form.colorText}">Descrição do jogo</label>
              </div>

              <div class="input-group mb-3 w-100 d-flex align-items-stretch">
                <input class="form-control" 
                  style="max-width:8rem; background-color: ${Theme.form.textbox};color:gray" 
                  disabled value="/html/games/" />
                <div class="form-floating">
                  <input
                    required=""
                    type="text"
                    class="form-control"
                    style="background-color: ${Theme.form.textbox}"
                    placeholder="URL"
                    id="urlGAdm"
                  /><label for="urlGAdm" style="color: ${Theme.form.colorText}">Nome do jogo URL</label>
                </div>
                <input class="form-control" 
                  style="max-width:5rem; background-color: ${Theme.form.textbox};color:gray" 
                  disabled value=".html" />
              </div>

              

              <button
                class="w-100 mb-2 btn btn-lg rounded-3 bg-primary text-light"
                type="button"
                onclick="adm_db.setJogo()"
              >
                Adicionar
              </button>
          </div>
        </div>
      </div>`
      );
    } else if (mode === "update") {
      if (docId) {
        const game_db = await Store.getDoc("games", docId);
        console.log("game_db", game_db);
        _html.elemento(
          "div",
          [
            "id",
            "class",
            "data-bs-backdrop",
            "data-bs-keyboard",
            "tabindex",
            "aria-labelledby",
            "aria-hidden",
          ],
          [
            "admModal",
            "modal fade",
            "static",
            "false",
            "-1",
            "#admModalLabel",
            "true",
          ],
          "modal",
          `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div
          class="modal-content rounded-4 shadow"
          style="background-color: ${Theme.modal.backColor}; color: ${
            Theme.modal.text
          }"
        >
          <div
            class="modal-header p-5 pb-4 border-bottom-0"
          >
            <h1 class="fw-bold mb-0 fs-2">Adicionar Jogo</h1>
            <button
              type="button"
              class="btn-close ${Theme.modal.closeBtn}"
              id="modal-close-up"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5 pt-0">
              <div class="w-100"></div>

              <div class="input-group input-group-sm mb-3">
                <div class="form-floating">
                <input
                  required=""
                  type="text"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Nome do Jogo"
                  value="${game_db.nome}"
                  id="nameGAdm"
                /><label for="nameGAdm" style="color: ${
                  Theme.form.colorText
                }">Nome do Jogo</label>
              </div>
              <div class="form-floating">
                  <input
                    required=""
                    type="number"
                    value="${parseInt(game_db.num_participantes)}"
                    class="form-control"
                    style="background-color: ${Theme.form.textbox}"
                    placeholder="Nº de players"
                    id="n_plGAdm"
                  /><label for="n_plGAdm" style="color: ${
                    Theme.form.colorText
                  }">Nº de players</label>
                </div>
              </div>

              <div class="form-floating mb-3">
                <textarea class="form-control" style="background-color: ${
                  Theme.form.textbox
                }; height: 80px;" placeholder="Descrição do jogo" id="tescGAdm">${
            game_db.descricao
          }</textarea>
                <label for="tescGAdm" style="color: ${
                  Theme.form.colorText
                }">Descrição do jogo</label>
              </div>

              <div class="form-floating mb-3">
                  <input
                    required=""
                    type="text"
                    class="form-control"
                    style="background-color: ${Theme.form.textbox}"
                    value="${game_db.url}"
                    placeholder="URL"
                    id="urlGAdm"
                  /><label for="urlGAdm" style="color: ${
                    Theme.form.colorText
                  }">URL</label>
                </div>


                <div class="btn-group w-100 mb-2" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-secondary" onclick="document.getElementById('modal-close-up').click()">Cancelar</button>
                  <button type="button" onclick="adm_db.update('${docId}')" class="btn btn-success">Editar</button>
                </div>

              
          </div>
        </div>
      </div>`
        );
      }
    } else if (mode === "delete") {
      if (docId) {
        _html.elemento(
          "div",
          [
            "id",
            "class",
            "data-bs-backdrop",
            "data-bs-keyboard",
            "tabindex",
            "aria-labelledby",
            "aria-hidden",
          ],
          [
            "admModal",
            "modal fade",
            "static",
            "false",
            "-1",
            "#admModalLabel",
            "true",
          ],
          "modal",
          `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div
          class="modal-content rounded-4 shadow"
          style="background-color: ${Theme.modal.backColor}; color: ${Theme.modal.text}"
        >
          <div
            class="modal-header p-5 pb-4 border-bottom-0"
          >
            <h1 class="fw-bold mb-0 fs-2">Adicionar Jogo</h1>
            <button
              type="button"
              class="btn-close ${Theme.modal.closeBtn}"
              data-bs-dismiss="modal"
              id="modal-close-del"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5 pt-0">
              <div class="w-100"></div>

              <p class="lead" style="color:${Theme.textColor}">
                Tem certeza que deseja apagar este jogo?
              </p>

              <div class="btn-group w-100 mb-2" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-secondary" onclick="document.getElementById('modal-close-del').click()">Cancelar</button>
                <button type="button" onclick="adm_db.delete('${docId}')" class="btn btn-danger">Apagar</button>
              </div>

          </div>
        </div>
      </div>`
        );
      }
    }

    console.log(document.getElementById("adm-modal"));
    document.getElementById("adm-modal").click();
  },

  authModal(type) {
    document.querySelector("#modal").innerHTML = "";

    //Button trigger modal
    _html.elemento(
      "button",
      ["id", "type", "class", "data-bs-toggle", "data-bs-target"],
      [
        "auth-modal",
        "button",
        "btn btn-primary invisible",
        "modal",
        "#authModal",
      ],
      "modal",
      "Auth Modal"
    );

    if (type === "login") {
      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-backdrop",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          "authModal",
          "modal fade",
          "static",
          "false",
          "-1",
          "#authModalLabel",
          "true",
        ],
        "modal",
        `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div
        id="modalEntrar-content"
        class="modal-content rounded-4 shadow"
        style="background-color: ${Theme.modal.backColor}; color: ${Theme.modal.text}"
      >
        <div
          id="modalEntrar-content-header"
          class="modal-header p-5 pb-4 border-bottom-0"
        >
          <h1 class="fw-bold mb-0 fs-2">Entrar na Greaclos</h1>
          <button
            type="button"
            class="btn-close ${Theme.modal.closeBtn}"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="modal-close-Entrar"
          ></button>
        </div>
        <div id="modalEntrar-body" class="modal-body p-5 pt-0">
          <form id="form-Entrar" class="">
            <div class="form-floating mb-3">
              <input
                required=""
                type="email"
                class="form-control"
                style="background-color: ${Theme.form.textbox}"
                placeholder="E-mail"
                id="emailLg"
              /><label for="emailLg" style="color: ${Theme.form.colorText}">E-mail</label>
            </div>
            <div class="form-floating mb-3">
              <input
                required=""
                type="password"
                minlength="6"
                class="form-control"
                style="background-color: ${Theme.form.textbox}"
                placeholder="Palavra-passe"
                id="passwordLg"
              /><label for="passwordLg" style="color: ${Theme.form.colorText}">Palavra-passe</label>
            </div>
            <button
            id="btn-login"
              class="w-100 mb-2 btn btn-lg rounded-3 bg-primary text-light"
              type="submit"
            >
              Entrar</button
            ><button
              class="w-100 mb-2 btn btn-outline-secondary rounded-3" "
              type="button"
              onclick="document.getElementById('modal-close-Entrar').click();html_Comp.authModal('register')"
            >
              Inscrever-se
            </button>
            <div
              class="btn-log text-muted w-100 text-center mt-3"
              onclick="_Auth.recoverPassword()"
              title="Escreva o seu email no campo correspondente e clica aqui"
            >
              Recuperar palavra passe
            </div>
            <hr class="my-4" />
            <h2 class="fs-5 fw-bold mb-3">Ou entre com</h2>
            <button
              class="w-100 py-2 mb-2 btn btn-outline-danger disabled rounded-3"
              type="button"
              id="logar-wGoogle"
            >
              Google
            </button>
            <button
              class="w-100 py-2 mb-2 btn btn-outline-dark text-secondary rounded-3"
              type="button"
              onclick="_Auth.loginAnom()"
              id="logar-wAnonim"
            >
              <svg
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"
                />
              </svg>
              Anónimo
            </button>
          </form>
        </div>
      </div>
    </div>`
      );
      listnerEvent.login();
    } else if (type === "register") {
      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-backdrop",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          "authModal",
          "modal fade",
          "static",
          "false",
          "-1",
          "#authModalLabel",
          "true",
        ],
        "modal",
        `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div
          id="modalRegistar-content"
          class="modal-content rounded-4 shadow"
          style="background-color: ${Theme.modal.backColor}; color: ${Theme.modal.text}"
        >
          <div
            id="modalRegistar-content-header"
            class="modal-header p-5 pb-4 border-bottom-0"
          >
            <h1 class="fw-bold mb-0 fs-2">Se inscreva de Graça</h1>
            <button
              type="button"
              class="btn-close ${Theme.modal.closeBtn}"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="modal-close-Registar"
            ></button>
          </div>
          <div id="modalRegistar-body" class="modal-body p-5 pt-0">
            <form id="form-Registar" class="">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="@username"
                  id="usernameRg"
                /><label for="usernameRg" style="color: ${Theme.form.colorText}">@username</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Nome"
                  id="nameRg"
                /><label for="nameRg" style="color: ${Theme.form.colorText}">Nome</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Sobrenome"
                  id="surnameRg"
                /><label for="surnameRg" style="color: ${Theme.form.colorText}">Sobrenome</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Sobrenome"
                  id="dataN"
                /><label for="surnameRg" style="color: ${Theme.form.colorText}">Sobrenome</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="E-mail"
                  id="emailRg"
                /><label for="emailRg" style="color: ${Theme.form.colorText}">E-mail</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Confirmar E-mail"
                  id="c-emailRg"
                /><label for="c-emailRg" style="color: ${Theme.form.colorText}">Confirmar E-mail</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  minlength="6"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Palavra-passe"
                  id="passwordRg"
                /><label for="passwordRg" style="color: ${Theme.form.colorText}">Palavra-passe</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  minlength="6"
                  class="form-control"
                  style="background-color: ${Theme.form.textbox}"
                  placeholder="Confiirmar Palavra-passe"
                  id="c-passwordRg"
                /><label for="c-passwordRg" style="color: ${Theme.form.colorText}">Confiirmar Palavra-passe</label>
              </div>
              <button
                class="w-100 mb-2 btn btn-lg rounded-3 bg-primary text-light"
                type="button"
                onclick="_Auth.register()"
              >
                Inscrever</button
              ><button
                class="w-100 mb-2 btn btn-outline-secondary rounded-3"
                type="button"
                onclick="document.getElementById('modal-close-Registar').click();html_Comp.authModal('login')"
              >
                Entrar</button
              ><small class="text-muted"
                >Clicando em Inscrever, aceitas os nossos termos de
                utilização de dados</small
              >
            </form>
          </div>
        </div>
      </div>`
      );
    }

    document.getElementById("auth-modal").click();
  },

  navBar() {
    let color = "white";
    //Nav
    _html.elemento(
      "nav",
      ["class"],
      [`navbar navbar-expand-lg navbar-dark bg-dark`],
      "nav" /* div com id #nav */,
      `
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CVT</a>
        <div>
          <button class="btn btn-outline-light p-1" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="28px" height="28px" class="ionicon" 
            viewBox="0 0 512 512">
            <path fill="${color}" d="M336 336h80v80h-80zM272 272h64v64h-64zM416 
            416h64v64h-64zM432 272h48v48h-48zM272 432h48v48h-48zM336 
            96h80v80h-80z"/>
            <path fill="${color}" d="M480 240H272V32h208zm-164-44h120V76H316zM96 
            96h80v80H96z"/>
            <path fill="${color}" d="M240 240H32V32h208zM76 196h120V76H76zM96 
            336h80v80H96z"/>
            <path fill="${color}" d="M240 480H32V272h208zM76 436h120V316H76z"/>
            </svg>
          </button>
          <button class="btn btn-outline-light p-1 dropdown-toggle" type="button" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"
            class="ionicon" viewBox="0 0 512 512">
            <path fill="${color}" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"/></svg>
          </button>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Novo Território</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        
        </div>

      </div>`
    );
  },

  async bandeja() {
    _html.elemento(
      "div",
      ["class", "id"],
      ["w-100 row m-0 ", "bdj"],
      "conteudo"
    );
    _html.elemento(
      "div",
      ["class", "id"],
      ["col-sm p-4 pt-1", "bdj-in"],
      "bdj"
    );
    _html.elemento(
      "div",
      ["class", "id"],
      ["row d-flex justify-content-center col-md-12", "bdj-conteudo"],
      "bdj-in"
    );

    //pegar na firestore as info dos jogos
    const territorios = await Store.getCollection("territorios");
    // console.log(gamesList);

    territorios.forEach((territorio) => {
      //   console.log(game.nome);

      _html.elemento(
        "div",
        ["class"],
        ["card col-md-3 m-3 p-0"],
        "bdj-conteudo",
        `
        <div class="card-body row">
          <div class="col-3">
            <div src="#" style="border: solid 2px black;" class="p-4 m-0">
            </div>
          </div>
          <div class="col">
            <div class="d-flex justify-content-between mb-0">
              <h5 class="card-title">Territorio Nº ${territorio.num}</h5>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="" ${
                  territorio.disponivel ? "checked" : ""
                }  disabled>
                <label class="form-check-label" for=""></label>
              </div>
            </div>
            
            <div id="tags" class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
              <!--
              <span class="badge mt-0 mb-0 m-1 bg-secondary">Secondary</span>
              <span class="badge mt-0 mb-0 bg-secondary">Secondary</span>
              -->
            </div>  
          </div>

        </div>`
      );

      territorio.referencias.forEach((referencia, index) => {
        console.log(index);
        _html.elemento(
          "span",
          ["class"],
          [`badge mt-0 mb-0 text-dark border ${index == 1 ? "m-1" : ""}`],
          "tags",
          referencia
        );
      });
    });
  },
};

//Criar um elemento html
const _html = {
  //Criar um elemento html com valor/Conteudo de texto
  //  nome -      string ""           //Nome do elemento a ser criado
  //  des_Attr -  String Array [""]   //Array com as descrições dos atributos (Ex. id, class, etc)
  //  v_Attrs -   String Array [""]   //Array com os valores dos atributos acima citados
  //      NB: A descrição e o valor devem estar nas mesmas posições em seus respectivos Arrays (Ex. des_Attrs[0] == "id" ! v_Attrs[0] == "myId"  )
  //  e_Pai -     string ""           //id do elemento pai para o elemento (apenas texto, sem #)
  //  txtHtml -   string ""           //texto que será inserido no corrpo do elemento
  //
  //Ex. criarElemento("h2", ["id","class"], ["titulo","conteudo"], "box1", "Como faze...")
  elemento(
    nome_tag,
    atributos_tag,
    valores_dos_atributos,
    elemento_Pai,
    innerText_tag
  ) {
    let PAI = document.querySelector(`#${elemento_Pai}`);
    let n_Attr = atributos_tag.length;
    let elemento = document.createElement(`${nome_tag}`);

    if (atributos_tag != "") {
      for (let e = 0; e < n_Attr; e++) {
        elemento.setAttribute(
          `${atributos_tag[e]}`,
          `${valores_dos_atributos[e]}`
        );
      }
    }

    if (innerText_tag) {
      elemento.innerHTML = innerText_tag;
    }
    // console.log("pai", PAI);
    PAI.appendChild(elemento);
  },

  //Cria a lista de navegação, os nomes identificadores das paginas no menu
  //  classUl -   string    [""]      //Classes para a tag Ul
  //  textLi -    array     [""]      //nomes dos li, os titulos que aparecerão na barra
  //  classA -    array     [""]      //classes para cada tag a correspondente aos nomes acima citados
  //  func -                          //função pro onclick (Enviar com "") Ex. "funcao(parametros)"
  //  e_Pai -     string    ""        //id do elemento pai para o elemento (apenas texto, sem #)
  //Ex. navbar_list("navbar-nav ",["Home", "Histórico"],[`nav-link active`, `nav-link disabled`],[" ", " "],"navbarCollapse")
  navbar_list(
    class_navbar,
    lista_de_menu,
    class_p_iten_da_lista,
    funcao_p_iten_da_lista,
    elemento_Pai
  ) {
    let Pai = document.querySelector(`#${elemento_Pai}`);
    let numLi = lista_de_menu.length;

    let ul = document.createElement("ul");
    ul.setAttribute("class", `${class_navbar}`);

    for (let e = 0; e < numLi; e++) {
      let li = document.createElement(`li`);
      li.setAttribute("class", `nav-item`);

      let a = document.createElement("a");
      a.setAttribute("class", `${class_p_iten_da_lista[e]}`);
      a.setAttribute("style", `cursor: pointer;`);
      a.setAttribute("onclick", funcao_p_iten_da_lista[e]);
      a.innerHTML = `${lista_de_menu[e]}`;

      li.appendChild(a);
      ul.appendChild(li);
    }

    Pai.appendChild(ul);
  },

  //Criar um elemento Form-Floating, imput e label dentro de uma div
  //  id          string ""           //id do imput e que vai pro campo "for" da Label
  //  des_Attr    String Array [""]   //Array com as descrições dos outros atributos (fora o id) (Ex. value, class, etc)
  //  v_Attrs     String Array [""]   //Array com os valores dos atributos acima citados
  //      NB: A descrição e o valor devem estar nas mesmas posições em seus respectivos Arrays (Ex. des_Attrs[0] == "type" ! v_Attrs[0] == "text"  )
  //  e_Pai       string ""           //id do elemento pai para a div (apenas texto, sem #)
  //  mb          number 0-5          //margem bottom
  //
  //Ex. criarElemento("input", ["type","class"], ["text","form-control"], "box1", 4)
  criarElementoFF(id, des_Attrs, v_Attrs, e_Pai, mb) {
    const PAI = document.querySelector(`#${e_Pai}`);
    let n_Attr = des_Attrs.length;

    let div = document.createElement(`div`);
    div.setAttribute("class", `form-floating mb-${mb}`);
    PAI.appendChild(div);

    let input = document.createElement(`input`);
    for (let e = 0; e < n_Attr; e++) {
      input.setAttribute(`${des_Attrs[e]}`, `${v_Attrs[e]}`);
    }
    input.setAttribute("id", `${id}`);
    div.appendChild(input);

    let label = document.createElement(`label`);
    label.setAttribute("for", `${id}`);
    label.innerHTML = v_Attrs[v_Attrs.length - 1];
    div.appendChild(label);
  },
};

const _Auth = {
  //Valida a autenticação
  //Recebendo os codigos de erro, traduzindo para portugues
  //E criando alertas
  //    code    string    //codigo de erro
  //    who     string    //se refere a pra quem será o alerta, o nome depois de "alert-"
  validaAuth(code) {
    switch (code) {
      case "auth/wrong-password":
        _aux.alertar("Palavra-passe errada!", "danger");
        console.log("Palavra-passe errada!");
        break;
      case "auth/invalid-email":
        _aux.alertar("Endereço de e-mail não válido!", "danger");
        console.log("Endereço de e-mail não válido!");
        break;
      case "auth/user-disabled":
        _aux.alertar("Este utilizador foi desabilitado.", "danger");
        console.log("Este utilizador foi desabilitado.");
        break;
      case "auth/user-not-found":
        _aux.alertar("Utilizador não encontrado.", "danger");
        console.log("Utilizador não encontrado.");
        break;
      case "auth/too-many-requests":
        _aux.alertar(
          "Devida a atividades suspeitas, deverá tentar de novo em alguns minutos",
          "danger"
        );
        console.log(
          "Devida a atividades suspeitas, deverá tentar de novo em alguns minutos."
        );
        break;
      case "auth/email-already-in-use":
        _aux.alertar("Já existe uma conta neste email.", "warning");
        console.log("Já existe uma conta neste email.");
        break;
      case "auth/weak-password":
        _aux.alertar(
          "Sua palavra passe é muito fraca, tente outra por favor.",
          "warning"
        );
        console.log("Sua palavra passe é muito fraca, tente outra por favor.");
        break;
      case "auth/operation-not-allowed":
        _aux.alertar("A conta neste email foi desativada.", "warning");
        console.log("A conta neste email foi desativada.");
        break;
      default:
        break;
    }
  },

  //Login
  loginAnom() {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        // Signed in..
        _aux.Reload();
      })
      .catch((error) => {
        this.validaAuth(error.code);
        // _ _ _ // ... // --- // ''' //
      });
  },

  //Isso é auto-explicativo, mas tem comentários dentro
  login() {
    //Pegar valores do formulario
    const email = document.getElementById("emailLg").value;
    const password = document.getElementById("passwordLg").value;

    // console.log(email, password);
    //validar se nenhum dos campos está nulo
    if (email && password) {
      //Faz a requisição de login, passando o email e password como parametros
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          //Caso a requisição seja bem sucedida
          _aux.alertar("Login efetuado com sucesso!", "success");
          _aux.Reload();
        })
        .catch((error) => {
          //Caso a requisição dê erro

          //Chamada da função validaAuth
          this.validaAuth(error.code);
        });
    } else {
      //se email nulo mostra o alerta
      email ? "" : _aux.alertar("O campo email é obrigatório", "warning");
      //se password nula mostra o alerta
      password
        ? ""
        : _aux.alertar("O campo palavra passe é obrigatório", "warning");
    }
  },

  //Registo
  //Isso também é auto-eexplicativo, e ainda não tem comeentários dentro, porque ainda não acabei
  register() {
    const username = document.getElementById("usernameRg").value;
    const name = document.getElementById("nameRg").value;
    const surname = document.getElementById("surnameRg").value;
    const email = document.getElementById("emailRg").value;
    const email_conf = document.getElementById("c-emailRg").value;
    const password = document.getElementById("passwordRg").value;
    const password_conf = document.getElementById("c-passwordRg").value;
    const data = [
      document.getElementById("dataN").value.slice(8, 10), //dia
      document.getElementById("dataN").value.slice(5, 7), //mes
      document.getElementById("dataN").value.slice(0, 4), //ano
    ];

    if (!username || !name || !surname || !email || !password || !data) {
      _aux.alertar("Preencha todos o campos", "warning");
      return;
    }

    console.log(
      username,
      name,
      surname,
      email,
      email_conf,
      password,
      password_conf,
      data
    );

    // return
    if (email != email_conf || password != password_conf) {
      email != email_conf
        ? _aux.alertar("A confirmaação do email não confere", "danger")
        : "";
      password != password_conf
        ? _aux.alertar("A confirmaação da password não confere", "danger")
        : "";
    } else {
      // showLoading();

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((new_) => {
          // hideLoading();
          User.username = username;
          User.nome = name;
          User.sobrenome = surname;
          User.dataNascimento = data;
          User.uid = new_.user.uid;

          firebase
            .firestore()
            .collection("users")
            .add(User)
            .then(() => {
              _aux.alertar("conta criada com sucesso", "success");

              setTimeout(() => {
                _aux.Reload();
              }, 2000);
            });
        })
        .catch((error) => {
          // hideLoading();
          this.validaAuth(error.code);
        });
    }
  },

  //Recuperar password
  //Oh MAIGODE, pra quê que será isso? (Obviamente estou sendo irónico)
  recoverPassword() {
    const email = document.getElementById("emailLg").value;

    if (email) {
      // showLoading();

      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          // hideLoading();

          _aux.alertar(
            "Foi enviado para o seu email o link para recuperação. Por favor verifique o Spam",
            "success"
          );
        })
        .catch((error) => {
          // hideLoading();

          this.validaAuth(error.code);
        });
    } else {
      _aux.alertar("O campo email é obrigatório", "danger");
    }
  },

  //Desisto
  //Essa função aqui faz biscoito
  logOut() {
    if (firebase.auth().currentUser) {
      firebase
        .auth()
        .signOut()
        .then(async () => {
          _aux.alertar("Até a proxima :)", "info");
          setTimeout(() => {
            _aux.Reload();
          }, 2000);
        });
    }
  },
};

const _FIRE = {
  //FireBase Initialization
  initFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyAoR29vHi_1bjx4V1-TPuYaVlnRz0yGD0Y",
      authDomain: "cvterritorios.firebaseapp.com",
      projectId: "cvterritorios",
      storageBucket: "cvterritorios.appspot.com",
      messagingSenderId: "604437101257",
      appId: "1:604437101257:web:7e8d66a16ca3b2f334ab18",
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  },

  authLogin() {
    // console.log("Login in");
    addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        // console.log("clicou");
        document.getElementById("entrar").click();
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate("index.html");
      }
    });
  },
};

const Store = {
  //where ["uid","==","dkcnnnue77rhf7rh7"]
  async getCollection(collection, where, order) {
    const db = firebase.firestore();
    let dados = "";

    const dbRe = where
      ? db.collection(collection).where(where[0], where[1], where[2])
      : db.collection(collection);

    const dbRef = order ? dbRe.orderBy(order[0], order[1]) : dbRe;

    const data = await dbRef.get().then((userData) => {
      dados = userData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // console.log("dados", dados);
      // const dados = userData.docs.map((doc) => doc.data());
      let array = [];

      dados.forEach((dt) => {
        array.push(dt);
      });

      // console.log("array", array);

      return array;
    });

    return data;
  },

  async setUserOnline(userUid) {
    // console.log(userUid);
    await firebase
      .firestore()
      .collection("users")
      .where("uid", "==", userUid)
      .get()
      .then(async (userData) => {
        const dados = userData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // console.log("dados", dados);
        dados.forEach((element) => {
          User.nome = element.nome;
          User.sobrenome = element.sobrenome;
          User.username = element.username;
          User.uid = element.uid;
          User.adm = element.adm;
          User.amigos = element.amigos;
          User.dataNascimento = element.dataNascimento;
          User.theme = element.theme;
          User.id = element.id;
        });
      });
  },

  async setRoomAct(rid) {
    // console.log(userUid);
    const dados = await this.getDoc(`rooms`, rid, true);

    RoomsFB.game = dados.game;
    RoomsFB.name = dados.name;
    RoomsFB.players = dados.players;
    RoomsFB.state_game = dados.state_gameme;
    RoomsFB.id = dados.id;
  },

  async getDoc(collection, doc, withId) {
    const db = firebase.firestore();

    const dbRef = db.collection(collection).doc(doc);

    const DOC = await dbRef.get().then((docc) => {
      if (withId) {
        let fich = {
          ...docc.data(),
          id: docc.id,
        };
        return fich;
      }
      // console.log(docc.data());
      return docc.data();
    });

    return DOC;
  },

  async getDocWhere(collection, where, who) {
    const db = firebase.firestore();
    let dados = "";

    const dbRef = where
      ? db.collection(collection).where(where[0], where[1], where[2])
      : db.collection(collection);

    const data = await dbRef.get().then((userData) => {
      dados = userData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return dados[0];
    });

    // console.log(data)
    if (who) {
      switch (who) {
        case "id":
          return data.id;
          break;
        case "name":
          return data.name;
          break;

        default:
          break;
      }
    }
    return data;
  },

  async updateDoc(collection, doc, data) {
    const db = firebase.firestore();

    const dbRef = db.collection(collection).doc(doc);

    const updated = await dbRef.update(data).then(() => {
      return true;
    });

    return updated;
  },

  async addDoc(collection, data) {
    const db = firebase.firestore();

    const dbRef = db.collection(collection);

    await dbRef.add(data).then(() => {
      console.log(data);
      return true;
    });
  },

  async deleteDoc(collection, doc) {
    const db = firebase.firestore();

    const dbRef = db.collection(collection).doc(doc);

    const isDel = await dbRef.delete().then(() => {
      return true;
    });

    return isDel;
  },
};

const Storage = {
  st: "",
  stRef: "",

  ini() {
    const storage = firebase.storage();
    this.st = storage;
    this.stRef = this.st.ref();
  },

  console() {
    console.log(this.st);
  },

  //   stRef.child('banner/ping-pong.webm').getMetadata().then((meta)=>{console.log(meta)})
};

const _aux = {
  Reload() {
    window.location.reload(false);
  },

  async Navigate(url) {
    let last = "";
    let urlx = "";

    if (!window.location.href.includes("/html")) {
      urlx = "/index.html";
    } else {
      urlx = _aux.sliceTxt(window.location.href, "/html");
    }
    last = await DataB.set("users/" + User.username + "/last_page", urlx);

    if (!last) {
      return;
    }

    setTimeout(() => {
      window.location.href = url;
      // console.log("Mudado");
    }, 200);
  },

  toCaptalize(string) {
    let newString = "";
    let stUpper = string.toLocaleUpperCase();

    for (var i = 0; i < string.length; i++) {
      i == 0 ? (newString += stUpper[i]) : (newString += string[i]);
    }
    // console.log(newString);
    return newString;
  },

  async checkChangeState(isAdm) {
    await firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const use = await Store.getCollection("users", ["uid", "==", user.uid]);

        if (use != "") {
          //preenche a const User
          await Store.setUserOnline(user.uid);
        }
      }

      html_Comp.navBar();
    });
  },

  //Cria os alestas dentro de divs
  //    devem haver divs no codigo com id "alert-..." exclusivamente para serem usadas pelos alertas
  //  idTarget    string      //se reefere ao id da div alert
  //  meessage    string      //mensagem que aparecerá no alerta
  //  type        string      //tipo de alerta
  //                            success - para alertas de sucesso
  //                            warning - para alertas de aviso
  //                            danger - para alertas de erro
  alertar(message, type) {
    let Pai = document.querySelector(`#alert`);

    // console.log(Pai);
    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", `alert alert-${type} mt-3 alert-dismissible`);
    wrapper.setAttribute("role", "alert");

    let mensagem = document.createElement("div");
    mensagem.innerHTML = `${message}`;

    wrapper.appendChild(mensagem);

    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn-close visually-hidden");
    btn.setAttribute("data-bs-dismiss", "alert");
    btn.setAttribute("aria-label", "Close");

    wrapper.appendChild(btn);
    Pai.appendChild(wrapper);

    setTimeout(() => {
      btn.click();
    }, [5000]);
  },

  // Loading
  //Cria a tela de Loadeing e a mostra
  showLoading() {
    const Pai = document.querySelector("#loading");

    let modal = document.createElement("div");
    modal.classList.add("modal", "show", "LOAD");
    modal.setAttribute("style", "display: block;");
    modal.setAttribute("data-bs-backdrop", "static");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-modal", "true");

    let div = document.createElement("div");
    div.classList.add("loading", "centralizar");

    let img = document.createElement("img");
    img.setAttribute("src", "media/img/logo.png");

    div.appendChild(img);
    modal.appendChild(div);
    Pai.appendChild(modal);
  },

  //Remove a tela de loading - chamada logo depois da primeira (show)
  hideLoading() {
    const loadings = document.getElementsByClassName("LOAD");
    if (loadings.length) {
      loadings[0].remove();
    }
  },
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function auth_page_check() {
  const pages_on_Logged = ["adm", "amigos", "perfil", "games"];

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // _aux.Navigate("/index.html");
    } else {
      pages_on_Logged.forEach((page) => {
        if (Url.path.includes(`pages/${page}.html`))
          _aux.Navigate("/index.html");
      });
    }
  });
}

const listnerEvent = {
  // Login
  login() {
    document.getElementById("btn-login").addEventListener("click", (event) => {
      event.preventDefault();

      _Auth.login();
    });
  },
};

// ^////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^////////////////////////////////////////////////////////////////////////////////////////////////////////////
