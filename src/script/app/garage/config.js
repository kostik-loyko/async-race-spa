async function createConfig(elemhtml) {

  let config = `<div class="container-config">
  <div class="create">
    <input type="text" class="create-input">
    <input type="color" class="create-color" value="#f82525">
    <button class="create-btn btn-main">create</button>
  </div>
  <div class="update">
    <input type="text" class="update-input">
    <input type="color" class="update-color" value="#39f613">
    <button class="update-btn btn-main">update</button>
  </div>
  <div class="race">
    <button class="race-rase-btn btn-main">race</button>
    <button class="race-reset-btn btn-main">reset</button>
    <button class="race-cars-btn btn-main">create cars</button>
  </div>
</div>`;



  elemhtml.insertAdjacentHTML('beforeend', config);
}

export default createConfig;