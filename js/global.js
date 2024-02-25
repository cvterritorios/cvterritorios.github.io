//Data
const dt = new Date();
const today = {
  dia: dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate() + "",
  mes:
    1 + dt.getUTCMonth() < 10
      ? "0" + (1 + dt.getUTCMonth())
      : "" + (1 + dt.getUTCMonth()),
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

//Territorio
const Territorio = {
  ID: "",
  area: "",
  disponivel: false,
  num: "",
  num_casas: 0,
  observacao: "",
  referencias: [],
};

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

const html_Comp = {
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
        style="background-color: white; color: black"
      >
        <div
          id="modalEntrar-content-header"
          class="modal-header p-5 pb-4 border-bottom-0"
        >
          <h1 class="fw-bold mb-0 fs-2">Entrar na Greaclos</h1>
          <button
            type="button"
            class="btn-close text-secondary"
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
                
                placeholder="E-mail"
                id="emailLg"
              /><label for="emailLg">E-mail</label>
            </div>
            <div class="form-floating mb-3">
              <input
                required=""
                type="password"
                minlength="6"
                class="form-control"
                
                placeholder="Palavra-passe"
                id="passwordLg"
              /><label for="passwordLg">Palavra-passe</label>
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
    } else if (type === "show") {
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
          
        >
          <div
            id="modalRegistar-content-header"
            class="modal-header p-5 pb-4 border-bottom-0"
          >
            <h1 class="fw-bold mb-0 fs-2">Olá {Nome}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="modal-close-Registar"
            ></button>
          </div>
          <div id="modalRegistar-body" class="modal-body p-5 pt-0">
            Para terminar sessão:</br></br>
            <button
              type="button"
              class="btn btn-danger"
            >Sair</button>
            </br>
            </br>
            Se deseja nos contactar, clique <a href="#">aqui</a>.
          </div>
        </div>
      </div>`
      );
    }

    document.getElementById("auth-modal").click();
  },

  async modal(type, territorioNum, state, id) {
    // opcoes - atribuir/desatribuir, detalhes, editar, eliminar
    // confirmação - if message contain "eliminar/atribuir/desatribuir"
    // detalhes
    // editar
    console.log(type, territorioNum, state, id);
    let closeOp = document.getElementById("modal-opcoes-close");
    closeOp ? closeOp.click() : "";
    const confirm = (type, num, message) => {
      console.log(type, num, message);
      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          `${type}Modal`,
          "modal fade",
          "false",
          "-1",
          `#${type}ModalLabel`,
          "true",
        ],
        "modal"
      );

      _html.elemento(
        "div",
        ["class"],
        ["modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable"],
        `${type}Modal`,
        `
      <div
        id="modal${type}-content"
        class="modal-content rounded-5 shadow pb-0"
        style="background-color: white; color: black"
      >
        <div id="modal${type}-body" class="modal-body text-center p-0 ">
          <h5 class="fw-bold m-auto mt-4">Território Nº ${num}</h5>
          <hr>
    
          <div class="m-3">
            <label class="form-label text-start w-100">${message}</label>
          </div>

          <hr class="mb-0">
          <div class="row m-0 p-0">
            <button type="button" class="col text-danger btn-conf-modal border-end" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
            <button type="button" class="col btn-conf-modal border-start">Ok</button>
          </div>
        </div>
      </div>
      `
      );
    };

    document.querySelector("#modal").innerHTML = "";

    //Button trigger modal
    _html.elemento(
      "button",
      ["id", "type", "class", "data-bs-toggle", "data-bs-target"],
      [
        `${type}-modal`,
        "button",
        "btn btn-primary invisible",
        "modal",
        `#${type}Modal`,
      ],
      "modal",
      `${type} Modal`
    );

    if (type === "opcoes") {
      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          `${type}Modal`,
          "modal fade",
          "false",
          "-1",
          `#${type}ModalLabel`,
          "true",
        ],
        "modal"
      );

      _html.elemento(
        "div",
        ["class"],
        ["modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable"],
        `${type}Modal`,
        `
      <div
        id="modal${type}-content"
        class="modal-content rounded-5 shadow"
        style="background-color: white; color: black"
      >
        <div id="modal${type}-body" class="modal-body text-center">
          <h5 class="fw-bold m-auto">Território Nº ${territorioNum}</h5>
          <button type="button" class="btn-close m-0 p-0 float-end invisible" id="modal-${type}-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <hr>
          <h6 class="fw m-auto btn-opcoes"
            onclick="html_Comp.modal('${
              state ? "atribuir" : "desatribuir"
            }',${territorioNum},${state},'${id}')">
              ${
                state
                  ? '<span class="text-success">Atribuir</span>'
                  : '<span class="text-danger">Desatribuir</span>'
              }
            </h6>

          <hr>
          <h6 class="fw m-auto btn-opcoes" onclick="html_Comp.modal('detalhes',${territorioNum},${state},'${id}')">Detalhes</h6>
          
          <hr>
          <h6 class="fw m-auto btn-opcoes" onclick="html_Comp.modal('editar',${territorioNum},${state},'${id}')">Editar</h6>
          
          <hr>
          <h6 class="fw m-auto btn-opcoes" onclick="html_Comp.modal('eliminar',${territorioNum},${state},'${id}')">Eliminar</h6>
        
        </div>
      </div>
      `
      );
    }

    if (type === "atribuir") {
      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          `${type}Modal`,
          "modal fade",
          "false",
          "-1",
          `#${type}ModalLabel`,
          "true",
        ],
        "modal"
      );

      _html.elemento(
        "div",
        ["class"],
        ["modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable"],
        `${type}Modal`,
        `
      <div
        id="modal${type}-content"
        class="modal-content rounded-5 shadow pb-0"
        style="background-color: white; color: black"
      >
        <div id="modal${type}-body" class="modal-body text-center p-0 ">
          <h5 class="fw-bold m-auto mt-4">Território Nº ${territorioNum}</h5>
          <hr>
    
          <div class="m-3">
            <label class="form-label text-start w-100"> Data: ${today.date()}</label>
            <input type="text" class="form-control col" placeholder="Nome do publicador" />
          </div>

          <hr class="mb-0">
          <div class="row m-0 p-0">
            <button type="button" class="col text-danger btn-conf-modal border-end" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
            <button type="button" class="col btn-conf-modal border-start">Ok</button>
          </div>
        </div>
      </div>
      `
      );
    }

    if (type === "desatribuir" || type === "eliminar") {
      const DS_message =
        "Tem certeza que deseja desatribuir o território deste publicador?";
      const EL_message = "Tem certeza que deseja eliminar o território?";

      type != "desatribuir"
        ? confirm(type, territorioNum, EL_message)
        : confirm(type, territorioNum, DS_message);
    }

    if (type === "detalhes") {
      let territorio = await Store.getDoc("territorios", id);

      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          `${type}Modal`,
          "modal fade",
          "false",
          "-1",
          `#${type}ModalLabel`,
          "true",
        ],
        "modal"
      );

      _html.elemento(
        "div",
        ["class"],
        ["modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable"],
        `${type}Modal`,
        `
      <div
        id="modal${type}-content"
        class="modal-content rounded-5 shadow pb-0"
        style="background-color: white; color: black"
      >
        <div id="modal${type}-body" class="modal-body text-center p-0 ">
          <h5 class="fw-bold m-auto mt-4">Território Nº ${territorioNum}</h5>
          
          <hr>
          <div class="m-3">
            <label class="form-label text-start w-100"> <strong>Mapa:</strong> 
              <img class="form-label text-start w-100 m-1" src="#" />
            </label>
          </div>

          <hr>
          <div class="m-3">
            <label class="form-label text-start w-100"> <strong>Referência(s):</strong>
              <span id="refsDetails"></span> 
            </label>
          </div>

          <hr>
          <div class="m-3">
            <label class="form-label text-start w-100"> <strong>Estado:</strong> 
              ${
                state
                  ? '<span class="text-start m-1 w-100 text-success">Disponivel</span>'
                  : '<span class="text-start m-1 w-100 text-danger">Indisponivel</span>'
              }
            </label>
          </div>
          
          ${
            state
              ? ""
              : `
                  <hr>
                  <div class="m-3">
                    <label class="form-label text-start w-100"> <strong>Informações de atribuição:</strong> </label>
                    <div class="m-1">
                      <label class="form-label text-start w-100"> Nome do publicador: <span>${territorio.atribuicao.publicador}</span> </label>
                      <label class="form-label text-start w-100"> Data de atribuição: <span>${territorio.atribuicao.data}</span> </label>
                    </div>
                  </div>`
          }
        </div>
      </div>
      `
      );

      territorio.referencias.forEach((ref) => {
        _html.elemento(
          "span",
          ["class"],
          ["badge text-dark border m-1 text-start bg-light"],
          "refsDetails",
          ref
        );
      });
    }

    if (type === "editar") {
      let territorio = await Store.getDoc("territorios", id);

      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-keyboard",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          `${type}Modal`,
          "modal fade",
          "false",
          "-1",
          `#${type}ModalLabel`,
          "true",
        ],
        "modal"
      );

      _html.elemento(
        "div",
        ["class"],
        ["modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable"],
        `${type}Modal`,
        `
      <div
        id="modal${type}-content"
        class="modal-content rounded-5 shadow pb-0"
        style="background-color: white; color: black"
      >
        <div id="modal${type}-body" class="modal-body text-center p-0 ">
          <h5 class="fw-bold m-auto mt-4">Território Nº ${territorioNum}</h5>
          <hr>
    
          <div class="m-3">
            <label for="mapaInput" class="text-start w-100"><strong>Mapa</strong></label>
            <input type="file" class="form-control mt-1 mb-3 form-control-sm" id="mapaInput" placeholder="Your file">

            <div class="form-floating">
              <input type="number" class="form-control" value="${territorio.num}" id="numInput" placeholder="numero">
              <label for="numInput">Número do território</label>
            </div>

            <label class="text-start w-100 mb-1"><strong>Referências</strong></label>
            <div class="p-4 pt-1 pb-1" id="ref-edit"></div>
            <div class="p-3 input-group input-group-sm w-100 pt-1 pb-1 ">
                <input type="text" class="form-control w-75 m-0 form-control-sm" id="text-to-add-ref" />
                <button class="btn btn-primary btn-sm w-25 m-0 " onclick="document.getElementById('text-to-add-ref').value ? _aux.addRef(document.getElementById('text-to-add-ref').value,${territorio.referencias.length}) : _aux.alertar('Texto vazio','warning')">Adicionar</button>                
            </div>

          </div>

          <hr class="mb-0">
          <div class="row m-0 p-0">
            <button type="button" class="col text-danger btn-conf-modal border-end" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
            <button type="button" class="col btn-conf-modal border-start">Ok</button>
          </div>
        </div>
      </div>
      `
      );

      territorio.referencias.forEach((ref, idx) => {
        _html.elemento(
          "div",
          ["class", "id"],
          ["row bg-light p-1 rounded mb-1", `ref-${idx}`],
          "ref-edit",
          `
          <div class="col text-start">${ref}</div>
          <button class="btn-close col-1" onclick="_html.removeRef('ref-${idx}')"></button>`
        );
      });
    }

    // listnerEvent.login();
    document.getElementById(`${type}-modal`).click();
  },

  navBar() {
    let color = "white";
    //Nav
    _html.elemento(
      "nav",
      ["class"],
      [`navbar navbar-expand-lg navbar-dark bg-dark p-0`],
      "nav" /* div com id #nav */,
      `
      <div class="container-fluid container p-0 ">
        <a class="navbar-brand" ondblclick="html_Comp.authModal('show')"
          style="font-size:2.3rem; padding: 0px 8px 0px 8px; background-color:#4A6DA7;" href="#">TC</a>
        <div class="p-2">
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
          
        </div>

      </div>`
    );
  },

  async bandeja() {
    _html.elemento("div", ["id"], ["bdj"], "conteudo");

    //pegar na firestore as info dos jogos
    const territorios = await Store.getCollection("territorios");
    // console.log(gamesList);

    _html.elemento(
      "div",
      ["class", "id"],
      ["row justify-content-md-start", "linha"],
      "bdj"
    );

    html_Comp.modal;

    territorios.forEach((territorio, idx) => {
      _html.elemento(
        "div",
        ["class"],
        ["col-md-auto p-0"],
        "linha",
        `
        <div class="card terr border border-end-0 border-start-0 rounded-0" 
          style="width: 23.66rem;"
          onclick="html_Comp.modal('opcoes',${territorio.num},${
          territorio.disponivel
        },'${territorio.ID}')"
          >
          <div class="card-body">
        
            <div class="container text-center">
              <div class="row">
                
                <div class="col-3 pt-2 bg-success">
                  One of colum
                </div>
                
                <div class="col fs-6">
                  
                  
                  <div class="d-flex justify-content-between " style="width:100%">
                    <div class=" text-start">Território Nº ${
                      territorio.num
                    }</div>
                    <div class=" text-end" style="font-size:16px">${
                      territorio.disponivel
                        ? '<span class="text-success">Disponivel</span>'
                        : '<span class="text-danger">Indisponivel</span>'
                    }
                    </div>
                  </div>

                  <div class="row fs-6 text-start">
                    <div class="col" id="referencia${idx}"></div>
                  </div>

                </div>

              </div>
            </div>
        
          </div>
        </div>`
      );

      territorio.referencias.forEach((referencia, index) => {
        console.log(index);
        _html.elemento(
          "span",
          ["class"],
          [`badge text-dark border bg-light ${index == 1 ? "m-1" : ""}`],
          `referencia${idx}`,
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

  removeRef(ref_id) {
    const refElement = document.querySelector(`#${ref_id}`);
    refElement.remove();
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

  async getDoc(collection, doc) {
    const db = firebase.firestore();

    const dbRef = db.collection(collection).doc(doc);

    const DOC = await dbRef.get().then((docc) => {
      /*         let fich = {
          ...docc.data()
        };
        return fich;
 */
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

  addRef(text, tamanho) {
    _html.elemento(
      "div",
      ["class", "id"],
      ["row bg-light p-1 rounded mb-1", `ref-${tamanho + 1}`],
      "ref-edit",
      `
      <div class="col text-start">${text}</div>
      <button class="btn-close col-1" onclick="_html.removeRef('ref-${
        tamanho + 1
      }')"></button>`
    );

    document.getElementById('text-to-add-ref').value = ""
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
