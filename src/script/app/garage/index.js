import createGarageTitle from './title';
import carMove from './carMove';
import createRoad from './carRoad';

const createGaragePage = () => {
  const conteiner = document.createElement('div');
  conteiner.className = 'conteiner-main';
  document.querySelector('.wrapper').append(conteiner);
  createGarageTitle(conteiner);
  createRoad(conteiner);
};

export default createGaragePage;