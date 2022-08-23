import { carDB } from './carsDB';


const updateCar = async () => {
  const container = document.querySelector('.conteiner-main');

  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('car-btn-select')) {
      const id = e.target.id.replace('sel', '');

      const getCar = async (id) => {
        let response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
        carDB = await response.json();
        console.log(carDB);
      };
      getCar(id);
      carDB.id = id;
    }
  });
}

export default updateCar;