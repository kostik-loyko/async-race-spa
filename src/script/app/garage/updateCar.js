
const updateCar = async () => {
  const selects = document.querySelectorAll('.car-btn-select');

  selects.forEach(select => {
    select.addEventListener('click', () => {
      let id = select.id.replace('sel', '');
      const getCar = async (id) => {
        let response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
        let car = await response.json();


        const updateCar = async () => {
          let idUp = car.id;

          let carUpdate = {
            name: 'NONAME',
            color: '#39f613',
          }

          const carNameUp = document.querySelector('.update-input');
          carNameUp.addEventListener('change', () => {
            carUpdate.name = carNameUp.value;
          })
          const carColorUp = document.querySelector('.update-color');
          carColorUp.addEventListener('change', () => {
            carUpdate.color = carColorUp.value;
          })

          const updateCarBtn = document.querySelector('.update-btn');
          updateCarBtn.addEventListener('click', () => {
            console.log(carUpdate);

          })
          // let response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
          //   method: 'PUT',
          //   headers: {
          //     'Content-Type': 'application/json;charset=utf-8'
          //   },
          //   body: JSON.stringify(carUpdate)
          // });
        }
        updateCar();
      };

      getCar(id);

    })

  });

}

export default updateCar;