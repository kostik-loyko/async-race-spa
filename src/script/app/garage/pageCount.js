

const pageCounter = async () => {
  const pageCounterAPI = async () => {
    let response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=${limit}`);

    let items = await response.json();
    let namb = response.headers.get('X-Total-Count');
    console.log(items);
    console.log(namb);
  }

  let page = 3;
  let limit = 4;

  pageCounterAPI(page, limit);
}

export default pageCounter;