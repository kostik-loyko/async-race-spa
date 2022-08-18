import { getCars } from '../api';

const race = async (modal) => {
  const raceBtn = document.querySelector('.race-rase-btn');
  const resetBtn = document.querySelector('.race-reset-btn');
  const carsRoads = document.querySelectorAll('.conteiner-car');
  let cars = await getCars();
  let reqAnim;
  let counter = 0;
  raceBtn.addEventListener('click', () => {

    raceBtn.setAttribute('disabled', 'disabled');
    raceBtn.classList.add('race-rase-btn-disabled');

    carsRoads.forEach(carRoad => {
      const car = carRoad.querySelector('.car-img');
      const btnBack = carRoad.querySelector('.car-btn-stop');
      const btnMove = carRoad.querySelector('.car-btn-move');
      const getVelocity = async () => {
        let response = await fetch(`http://127.0.0.1:3000/engine?id=${car.id}&status=started`, {
          method: 'PATCH',
        });
        let data = await response.json();
        let time = data.distance / data.velocity / 1000;
        let startTime = new Date().getTime();

        function makeBig() {
          let currentTime = new Date().getTime();
          let left = 14 + (currentTime - startTime) / 1000 * (time * 1.5);
          car.style.left = `${left + 1}%`;
          if (left < 92) {
            reqAnim = window.requestAnimationFrame(makeBig);
          } else if (left >= 92) {
            cars.forEach(cardb => {
              if (cardb.id == car.id && counter === 0) {
                counter++;
                let winner = `<div class="modal">
                                <h2 class="winner">Winner ${cardb.name}</h2>
                              </div>`;
                modal.insertAdjacentHTML('beforeend', winner);
              }
            });
          }
          btnBack.addEventListener('click', () => {
            cancelAnimationFrame(reqAnim);
            car.style.left = '14%';
          });
        }
        makeBig();
        const getDrive = async () => {
          try {
            let responseDive = await fetch(`http://127.0.0.1:3000/engine?id=${car.id}&status=drive`, {
              method: 'PATCH',
            });
            await responseDive.json();
          } catch (err) {
            cancelAnimationFrame(reqAnim);
          }
        };
        getDrive();
      };
      getVelocity();

      resetBtn.addEventListener('click', () => {
        counter = 0;
        modal.innerHTML = '';
        raceBtn.removeAttribute('disabled');
        raceBtn.classList.remove('race-rase-btn-disabled');
        btnMove.classList.remove('car-btn-move-active');
        carsRoads.forEach(elemhtml => {
          const car1 = elemhtml.querySelector('.car-img');
          cancelAnimationFrame(reqAnim);
          car1.style.left = '14%';
        });
      });
    });
  });

};

export default race;