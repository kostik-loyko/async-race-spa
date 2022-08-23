async function createGarageTitle(elemhtml) {

  let response = await fetch('http://127.0.0.1:3000/garage');

  let data = await response.json();

  let title = `<div class="conteiner-title">
    <h1 class="page-name">Garage (${data.length})</h1>
    <h2 class="page-counter">Page #</h2>
  </div>`;

  elemhtml.insertAdjacentHTML('afterbegin', title);
}

export default createGarageTitle;
