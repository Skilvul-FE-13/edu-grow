async function getData() {
    try {
      const response = await fetch("/public/databases/artikel.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error); 
    }
  }
    getData().then((data) => {
      data.articles.map((e) => {
        document.getElementById('card-container').innerHTML += `
        <div class="col">
                <div class="card shadow">
                  <div class="profile-card d-flex align-items-center gap-2 mt-3 px-4" style="font-size:small;">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="avatar rounded-circle" style="width: 40px;" alt="Avatar" />
                    <p class="avatar-name mt-2 text-secondary">${e.author}</p>
                    <p class="article-date mt-2 text-secondary">${e.date}</p>
                    <p class="rounded-4 py-2 px-4 text-white mt-2" style="background-color: #AE965A;">${e.category}</p>
                  </div>
                  <img src="${e.content[0].images}" class="card-img-top mt-2 px-4 article-img"
                    alt="Hollywood Sign on The Hill" />
                    <!-- Card Body -->
                  <div class="card-body px-4 box">
                    <h5 class="card-title article-title">${e.title}</h5>
                    <p class="card-text text-secondary article-desc">${e.content[0].paragraph1}</p>
                  </div>
                  <div class="read-share px-4 d-flex gap-2" style="font-size:small;">
                    <i class="bi bi-eye mt-2"></i>
                    <p class="dibaca mt-2 text-secondary">Dibaca <span>50</span></p>
                    <i class="bi bi-share mt-2 ms-2"></i>
                    <p class="dibagikan mt-2 text-secondary">Dibagikan <span>12</span></p>  
                  </div>
                  <!-- Baca Selengkapnya -->
                  <div class="btn-selengkapnya px-4 mt-0 mb-4 d-flex justify-content-end">
                    <a href="artikel.html" class="btn text-white align-items-center pt-2" style="background-color: #3A5088; width: 170px; height: 42px; font-size: 14px; font-weight:500; ">Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
        `
        })
      });
      
let articleTren = document.querySelectorAll('.tren-title');
let trenDate = document.querySelectorAll('.article-date');
let author = document.querySelectorAll('.avatar-name')
      getData().then((data)=>{
        data.articles.map((e, index) => {
            articleTren[index].innerText = e.title;
            trenDate[index].innerText = e.date;
            author[index].innerText = e.author 

            })

      });

async function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    const data = await getData();
    const filterData = data.articles.filter((item) => item.title.toLowerCase().includes(search_query.toLowerCase()) || item.author.toLowerCase().includes(search_query.toLowerCase()))

    console.log(filterData, 'filterData')
    filterData.map((e) => {
        document.getElementById('card-container').innerHTML = ''
        document.getElementById('card-container').innerHTML += `
        <div class="col">
                <div class="card shadow">
                  <div class="profile-card d-flex align-items-center gap-2 mt-3 px-4" style="font-size:small;">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="avatar rounded-circle" style="width: 40px;" alt="Avatar" />
                    <p class="avatar-name mt-2 text-secondary">${e.author}</p>
                    <p class="article-date mt-2 text-secondary">${e.date}</p>
                    <p class="rounded-4 py-2 px-4 text-white mt-2" style="background-color: #AE965A;">${e.category}</p>
                  </div>
                  <img src="${e.content[0].images}" class="card-img-top mt-2 px-4 article-img"
                    alt="Hollywood Sign on The Hill" />
                    <!-- Card Body -->
                  <div class="card-body px-4 box">
                    <h5 class="card-title article-title">${e.title}</h5>
                    <p class="card-text text-secondary article-desc">${e.content[0].paragraph1}</p>
                  </div>
                  <div class="read-share px-4 d-flex gap-2" style="font-size:small;">
                    <i class="bi bi-eye mt-2"></i>
                    <p class="dibaca mt-2 text-secondary">Dibaca <span>50</span></p>
                    <i class="bi bi-share mt-2 ms-2"></i>
                    <p class="dibagikan mt-2 text-secondary">Dibagikan <span>12</span></p>  
                  </div>
                  <!-- Baca Selengkapnya -->
                  <div class="btn-selengkapnya px-4 mt-0 mb-4 d-flex justify-content-end">
                    <a href="artikel.html" class="btn text-white align-items-center pt-2" style="background-color: #3A5088; width: 170px; height: 42px; font-size: 14px; font-weight:500; ">Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
        `
    })

}
//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});


