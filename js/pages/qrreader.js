document.addEventListener("DOMContentLoaded", async () => {
  // console.log("inicio");
  _FIRE.initFirebase();

  console.log("Ready to read...");

  setTimeout(() => {
    iniciarCamera();
  }, 1000);

  //callback cuando termina de leer el codigo QR
  qrcode.callback = (res) => {
    if (res) {
      console.log(res);
      desligarCamera();
    }
  };
});

//cria elemento video
const video = document.createElement("video");
video.width = 300;
video.height = 300;

//canvas
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

//div donde llegara nuestro canvas
const btnScanQR = document.getElementById("btn-scan-qr");

//leitura desativada
let scanning = false;

const specs = {
  video: { width: 300, aspectRatio: 1 / 1 },
};

//ligar a camera
const iniciarCamera = () => {
  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

  navigator.getMedia(
    // permissoes
    specs,

    // callbackSucesso
    (stream) => {
      scanning = true;
      btnScanQR.hidden = true;
      canvasElement.hidden = false;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.srcObject = stream;
      video.play();
      tick();
      scan();
    },

    // callbackErro
    (err) => {
      console.log("O seguinte erro ocorreu: " + err);
    }
  );
};

//Roda as funções para ligar a câmara
function tick() {
  canvasElement.height = video.height;
  canvasElement.width = video.width;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

  scanning && requestAnimationFrame(tick);
}

function scan() {
  try {
    qrcode.decode();
  } catch (e) {
    setTimeout(scan, 300);
  }
}

//desliga a camera
const desligarCamera = () => {
  video.srcObject.getTracks().forEach((track) => {
    track.stop();
  });
  canvasElement.hidden = true;
  btnScanQR.hidden = false;
};

// ..-----------------------------------------------------
// ..-----------------------------------------------------
// ..-----------------------------------------------------
const _aux = {
  Reload() {
    window.location.reload(false);
  },

  getNome(what, nomeCompleto) {
    let nome, sp_first, sp_sec;

    switch (what) {
      case "primeiro":
        for (let i = 0; i <= nomeCompleto.length; i++) {
          if (nomeCompleto[i] == " ") {
            sp_first = i;
            break;
          }
        }

        nome = nomeCompleto.slice(0, sp_first);
        break;
      case "ultimo":
        for (let i = nomeCompleto.length; i > 0; i--) {
          if (nomeCompleto[i] == " ") {
            sp_sec = i + 1;
            break;
          }
        }

        nome = nomeCompleto.slice(sp_sec, nomeCompleto.length);
        break;

      default:
        break;
    }

    return nome;
  },

  async Navigate(url) {
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

  async checkChangeState() {
    await firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const use = await Store.getCollection("users", ["uid", "==", user.uid]);

        if (use != "") {
          //preenche a const User
          await Store.setUserOnline(user.uid);
        }
      }
    });
  },

  //Cria os alestas dentro de divs
  //  meessage    string      //mensagem que aparecerá no alerta
  //  type        string      //tipo de alerta
  //                            success - para alertas de sucesso
  //                            warning - para alertas de aviso
  //                            danger - para alertas de erro
  alertar(message, type, alert) {
    let Pai = document.querySelector(`#alert`);

    // console.log(Pai);

    if (alert) {
      let wrapper = document.createElement("div");
      wrapper.setAttribute(
        "class",
        `alert alert-${type} mt-3 alert-dismissible`
      );
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
    } else {
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
        "alert",
        `${type} Modal`
      );

      _html.elemento(
        "div",
        [
          "id",
          "class",
          "data-bs-keyboard",
          "data-bs-backdrop",
          "tabindex",
          "aria-labelledby",
          "aria-hidden",
        ],
        [
          `${type}Modal`,
          "modal fade",
          "false",
          "static",
          "-1",
          `${type}ModalLabel`,
          "true",
        ],
        "alert"
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
          <h5 class="fw-bold bgg-${type} m-auto mb-0 pb-3 pt-4">Alerta</h5>
          <hr class="mt-0 pt-0">
    
          <div class="m-3">
            <label class="form-label text-start w-100">${message}</label>
          </div>

          <hr class="mb-0">
          <div class="m-0 p-0">
            <button type="button" onclick="_aux.Reload()" class="btn-conf-modal w-100 btn-modal">OK</button>
            <button type="button" class="btn btn-danger invisible" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
      </div>
      `
      );

      /* Pai.appendChild(modal);

      setTimeout(() => {
        btn.click();
      }, [5000]); */
      document.getElementById(`${type}-modal`).click();
    }
  },
};

// ..-----------------------------------------------------
// ..-----------------------------------------------------

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
      }));

      // console.log("dados", dados);
      let array = [];

      dados.forEach((dt) => {
        array.push(dt);
      });

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

  async getOldTerritorio(id) {
    const old = await this.getDoc("territorios", id);

    Territorio.ID = old.ID;
    Territorio.atribuicao = old.atribuicao;
    Territorio.disponivel = old.disponivel;
    Territorio.mapa = old.mapa;
    Territorio.num = old.num;
    Territorio.observacao = old.observacao;
    Territorio.referencias = old.referencias;
  },

  async getOldPublicador(id) {
    const old = await this.getDoc("publicadores", id);

    Publicador.ID = old.ID;
    Publicador.nomeCompleto = old.nomeCompleto;
    Publicador.disponivel = old.disponivel;
    Publicador.primeiroNome = old.primeiroNome;
    Publicador.ultimoNome = old.ultimoNome;
  },

  async getDoc(collection, docId) {
    const db = firebase.firestore();

    const dbRef = db.collection(collection).doc(docId);

    const DOC = await dbRef.get().then((doc) => {
      return doc.data();
    });

    return DOC;
  },

  async getDocWhere(collection, where) {
    const db = firebase.firestore();
    let dados = "";

    const dbRef = where
      ? db.collection(collection).where(where[0], where[1], where[2])
      : db.collection(collection);

    const data = await dbRef.get().then((userData) => {
      dados = userData.docs.map((doc) => ({
        ...doc.data(),
      }));

      return dados[0];
    });

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
