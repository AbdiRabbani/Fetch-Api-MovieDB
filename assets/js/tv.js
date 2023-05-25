fetch(url_tv, options)
  .then(data => data.json())
  .then(data => {
    tv = data.results;

    console.log(tv);
    tv.forEach(row => {
      const container = document.getElementById('card-container');
      const mainCard = document.createElement('a');
      const boxImage = document.createElement('img');
      const boxTitle = document.createElement('div');
      const textTitle = document.createElement('p');
      const textRelease = document.createElement('p');

      boxImage.setAttribute('src', url_img + row.poster_path);


      mainCard.setAttribute('id', 'main-card');
      mainCard.setAttribute('class', 'card');

      mainCard.classList.add('col-md-2')
      boxTitle.classList.add('card-body');
      boxTitle.classList.add('d-flex');
      boxTitle.classList.add('row');
      textTitle.classList.add('card-title');
      textRelease.classList.add('mt-auto');
      boxImage.classList.add('img-fluid');
      boxImage.classList.add('pt-3');

      mainCard.setAttribute('OnClick', `showDetail(${row.id})`);

      container.appendChild(mainCard);
      mainCard.appendChild(boxImage);
      mainCard.appendChild(boxTitle);
      boxTitle.appendChild(textTitle);
      boxTitle.appendChild(textRelease);

      textTitle.innerText = row.name;
      textRelease.innerText = row.first_air_date.split("-")[0];

    });
})

function showDetail(id) {   
    window.location.replace('detail.html?id=' + id);
}

document.getElementById('btn-back').setAttribute('onClick', 'backToHome()')

function backToHome() {
  window.location.replace('index.html');
}

const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const tvId = urlParam.get('id')

fetch(url_detail + "tv/" + tvId, options)
  .then(data => data.json())
  .then(data => {
    console.log(data);

    document.getElementById("title-header").innerText = data.name
    document.getElementById("img-main").setAttribute('src', url_img + data.poster_path)
    document.getElementById("img-thumbnaill").setAttribute('src', url_img + data.poster_path)

    document.getElementById("description").innerText = data.overview

    data.genres.forEach(row => {
      const genre = document.getElementById("genre-header")
      const p = document.createElement("p")

      genre.appendChild(p)

      p.innerText = row.name + ","
    })
});

