//https://6454e087f803f3457633b3ec.mockapi.io/:endpoint

async function getArtikel() {
  try {
    const res = await fetch(
      "https://6454e087f803f3457633b3ec.mockapi.io/artikel"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function renderArtikel() {
  const data = await getArtikel();
  const session = localStorage.getItem("artikel-id");
  console.log(session);
  const currentPath = window.location.pathname;
  //const artikel = data.find((artikel) => artikel.id == session);
  const artikel = data[session];

  document.getElementById("artikel").innerHTML = "";
  document.getElementById("artikel").innerHTML += `
    <div class="container">
          <div class="container text-center">
            <div class="row row-cols-auto" style="display: flex; align-items: center; margin: 20px 0px 0px 40px">
              <div class="col"><img src="${artikel.avatar}" class="rounded-circle" /></div>
              <div class="col">${artikel.name}</div>
              <div class="col">${artikel.tanggal}</div>
              <div class="col" style="background-color: #ae965a; border-radius: 75px; color: #fafafb; padding: 6px">${artikel.kategori}</div>
            </div>
          </div>
        </div>
        
        <p class="font-poppins fs-2 fw-semibold" style="text-align: center; margin: 30px 0px 30px 0px">${artikel.judul}</p>
        <img src="${artikel.image}" class="img-fluid mx-auto d-block" alt="artikel1-img" />
        <div class="mx-auto p-2" style="margin-top: 50px">
          <p class="lh-base">${artikel.deskripsi}</p>
        </div>
    `;
}
renderArtikel();
