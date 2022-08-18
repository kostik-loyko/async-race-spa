
const modelCar = async () => {

  let car = {
    name: '',
    color: '#f82525',
  }

  const carName = document.querySelector('.create-input');
  carName.addEventListener('change', () => {
    console.log(carName.value);
    car.name = carName.value;
  })
  const carColor = document.querySelector('.create-color');
  carColor.addEventListener('change', () => {
    console.log(carColor.value);
    car.color = carColor.value;
  })

  return car
}

export default modelCar;
