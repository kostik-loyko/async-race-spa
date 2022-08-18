
const carMove = async () => {
  const carsRoads = document.querySelectorAll('.conteiner-car');
  carsRoads.forEach(carRoad => {
    const car = carRoad.querySelector('.car-img');
    const btnMove = carRoad.querySelector('.car-btn-move');
    const btnBack = carRoad.querySelector('.car-btn-stop');

    const getVelocity = async () => {
      let response = await fetch(`http://127.0.0.1:3000/engine?id=${car.id}&status=started`, {
        method: 'PATCH',
      });
      let data = await response.json();
      let time = data.distance / data.velocity / 1000;
      let reqAnim;

      btnMove.addEventListener('click', () => {
        const getVel = async () => {
          await fetch(`http://127.0.0.1:3000/engine?id=${car.id}&status=started`, {
            method: 'PATCH',
          });
        };
        getVel();

        let startTime = new Date().getTime();
        function makeBig() {
          let currentTime = new Date().getTime();
          let left = 14 + (currentTime - startTime) / 1000 * (time * 1.5);
          car.style.left = `${left + 1}%`;
          if (left < 92) {
            reqAnim = window.requestAnimationFrame(makeBig);
          }

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

        btnMove.classList.add('car-btn-move-active');
      });


      btnBack.addEventListener('click', () => {

        const getStopped = async () => {
          await fetch(`http://127.0.0.1:3000/engine?id=${car.id}&status=stopped`, {
            method: 'PATCH',
          });
        };
        getStopped();

        cancelAnimationFrame(reqAnim);
        car.style.left = '14%';
        btnMove.classList.remove('car-btn-move-active');
      });

    };
    getVelocity();
  });
};
export default carMove;