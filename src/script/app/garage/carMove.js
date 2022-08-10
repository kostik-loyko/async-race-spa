import createRoad from './carRoad';

const carMove = async () => {

  let response = await fetch('http://127.0.0.1:3000/engine?id=5&status=started', {
    method: 'PATCH',
  });
  let data = await response.json();

  // console.log(data);
  let time = Math.round(data.distance / data.velocity / 1000);
  // console.log(time);

  // const dt = {
  //   name: 'Ford', color: '#ef3c40',
  // }

  // let response = await fetch('http://127.0.0.1:3000/garage', {
  //   method: 'POST',
  //   body: JSON.stringify(dt),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // });
  // let data = await response.json();

  // console.log(data);


  const carsRoads = document.querySelectorAll('.conteiner-car');
  carsRoads.forEach(carRoad => {
    const car = carRoad.querySelector('.car-img');
    const btnMove = carRoad.querySelector('.car-btn-move');
    const btnBack = carRoad.querySelector('.car-btn-stop');
    btnMove.addEventListener('click', () => {
      car.classList.add('car-img-animation');
      btnMove.classList.add('car-btn-move-active');
      car.style.animation = `move ${time}s forwards linear`;
    });
    btnBack.addEventListener('click', () => {
      car.classList.remove('car-img-animation');
      btnMove.classList.remove('car-btn-move-active');
    });
  });


};
export default carMove;