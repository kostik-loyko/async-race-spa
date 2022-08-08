async function createStatisticsTitle(elemhtml) {

  let title = `<div class="conteiner-title">
    <h1 class="page-name">Winners ()</h1>
    <h2 class="page-counter">Page #</h2>
  </div>`;

  elemhtml.insertAdjacentHTML('beforeend', title);
}

export default createStatisticsTitle;