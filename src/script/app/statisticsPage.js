const createStatisticsPage = () => {
  const conteiner = document.createElement('div');
  conteiner.className = 'conteiner-main';
  document.querySelector('.wrapper').append(conteiner);
  conteiner.textContent = 'Statistics page';
}

export default createStatisticsPage;