export const modelCar = () => {

  let car = {
    name: '',
    color: '#f82525',
  }

  const carName = document.querySelector('.create-input');
  carName.addEventListener('change', () => {
    car.name = carName.value;
  })
  const carColor = document.querySelector('.create-color');
  carColor.addEventListener('change', () => {
    car.color = carColor.value;
  })

  return car
}

export const modelCarUp = () => {

  let car = {
    name: '',
    color: '#39f613',
  }

  const carName = document.querySelector('.update-input');
  carName.addEventListener('change', () => {
    car.name = carName.value;
  })
  const carColor = document.querySelector('.update-color');
  carColor.addEventListener('change', () => {
    car.color = carColor.value;
  })

  return car
}