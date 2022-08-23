import createGarageTitle from './title';
import createRoad from './road';
import createConfig from './config';

const createGaragePage = () => {

  const conteiner = document.createElement('div');
  conteiner.className = 'conteiner-main';
  document.querySelector('.wrapper').append(conteiner);

  const conteinerCar = document.createElement('div');
  conteinerCar.className = 'conteiner-car';


  createGarageTitle(conteiner);
  createConfig(conteiner);
  conteiner.append(conteinerCar);
  createRoad(conteinerCar);
  return conteiner
};

export default createGaragePage;