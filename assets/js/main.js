const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWU3YjNjYmZjZWY5NjBjYWM0MjE1YzljNTEzZTcyMCIsInN1YiI6IjYyNDI2ODMyZmVhMGQ3MDA4OTVmOGFkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K3sG4wch3BY166PfBUep-VAlHdmJ8L9vohuv8NjcZxY'
    }
  };
  
  const url_movie = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc"
  const url_tv = "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
  const url_video = "/videos?language=en-US"
  const url_detail = "https://api.themoviedb.org/3/";
  const url_img = "http://image.tmdb.org/t/p/w500"
  
document.getElementById('btn-back').setAttribute('onClick', 'backToHome()')

function backToHome() {
  window.location.replace('index.html');
}