const createGaragePage = () => {
  const conteiner = document.createElement('div');
  conteiner.className = 'conteiner-main';
  document.querySelector('.wrapper').append(conteiner);
  conteiner.textContent = 'main garag';
}

export default createGaragePage;