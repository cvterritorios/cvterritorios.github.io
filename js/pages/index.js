document.addEventListener("DOMContentLoaded", async () => {
  // console.log("inicio");
  _FIRE.initFirebase();

  _aux.checkChangeState();

  _html.elemento(
    "form",
    ["class"],
    ["d-flex container mb-4 w-100"],
    "conteudo",
    `<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">`
  );
  html_Comp.bandeja();
});
