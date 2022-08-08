import createGaragePage from './garage';
import createStatisticsPage from './statistics';

const buttonsPages = () => {
  const btnMain = document.createElement('a');
  btnMain.className = 'btn-main';
  btnMain.id = 'main-page';
  btnMain.href = '#main-page';
  btnMain.textContent = 'garage';

  const btnStatistics = document.createElement('a');
  btnStatistics.className = 'btn-main';
  btnStatistics.id = 'statistics-page';
  btnStatistics.textContent = 'statistics';
  btnStatistics.href = '#statistics-page';

  document.querySelector('.wrapper').append(btnMain, btnStatistics);
  createGaragePage();
  window.location.hash = '#main-page';

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    document.querySelector('.wrapper').removeChild(document.querySelector('.conteiner-main'));
    if (hash === btnMain.id) {
      createGaragePage();
    } else if (hash === btnStatistics.id) {
      createStatisticsPage();
    }
  });
};

export default buttonsPages;