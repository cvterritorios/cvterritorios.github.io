document.addEventListener("DOMContentLoaded", async () => {
  // console.log("inicio");
  _FIRE.initFirebase();

  _aux.checkChangeState();

  _html.elemento(
    "form",
    ["class"],
    ["d-flex mb-3"],
    "conteudo",
    `<input class="form-control" type="search" placeholder="Search" aria-label="Search">`
  );


  _html.elemento("div",["class"],["d-flex justify-content-between p-0 m-0 mb-3"],"conteudo",
  `
  <button type="button" class="btn btn-outline-secondary"
      style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .4rem; --bs-btn-font-size: .95rem;">
    Adicionar
  </button>

  <button type="button" class="btn btn-outline-secondary"
      style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .4rem; --bs-btn-font-size: .95rem;">
    Filtrar
  </button>

  <button type="button" class="btn btn-outline-secondary"
      style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .4rem; --bs-btn-font-size: .95rem;">
    Selecionar
  </button>

  <button type="button" class="btn btn-outline-dark"
      style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .4rem; --bs-btn-font-size: .95rem;">
    Vista
  </button>
 `)

  html_Comp.bandeja();
});

// document.addEventListener("keydown", (e) => {
//   e.key == "Enter" ? addTRT() : "";
// });

  
function addTRT() {
  alert("Oi");
  document.removeEventListener("keydown")
}
