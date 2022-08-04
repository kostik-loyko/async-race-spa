async function car() {
  let response = await fetch('http://127.0.0.1:3000/garage');
  if (response.ok) {
    let data = await response.json();
    console.log(data[1].name);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}
export default car;