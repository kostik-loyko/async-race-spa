import createGarageTitle from './title';
import createRoad from './road';
import createConfig from './config';

const createGaragePage = () => {
  const conteiner = document.createElement('div');
  conteiner.className = 'conteiner-main';
  document.querySelector('.wrapper').append(conteiner);
  createGarageTitle(conteiner);
  createConfig(conteiner);
  createRoad(conteiner);
};

export default createGaragePage;