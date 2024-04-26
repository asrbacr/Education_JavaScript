fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
  .then((response) => response.json())
  .then((json) => console.log(json));

// fetch('../05_DZ/') чтобы получить данные из файла, то нужно использовать тоже fetch, путь указывать нужно руками. можно сгенерировать путь в index.html-е
