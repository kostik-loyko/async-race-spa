export const getCars = async () => {
  let response = await fetch('http://127.0.0.1:3000/garage');
  let cars = await response.json();
  return cars;
};
export const getCar = async (id) => {
  let response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
  let car = await response.json();
  return car;
};