const carMove = async () => {

  let response = await fetch('http://127.0.0.1:3000/garage/1');

  let data = await response.json();
  console.log(data);

  const car = document.querySelector('.car-img');
  const btnMove = document.querySelector('.car-btn-move');
  const btnBack = document.querySelector('.car-btn-stop');
  btnMove.addEventListener('click', () => {
    car.classList.add('car-img-animation');
    btnMove.classList.add('car-btn-move-active');
    car.style.animationDuration = '5s';
  });
  btnBack.addEventListener('click', () => {
    car.classList.remove('car-img-animation');
    btnMove.classList.remove('car-btn-move-active');
  });

};
export default carMove;