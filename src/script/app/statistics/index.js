import createStatisticsTitle from './statisticTitle';

const createStatisticsPage = () => {
  const conteiner = document.createElement('div');
  conteiner.className = 'conteiner-main';
  document.querySelector('.wrapper').append(conteiner);
  createStatisticsTitle(conteiner);
};

export default createStatisticsPage;