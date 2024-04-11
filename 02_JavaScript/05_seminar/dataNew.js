fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
  .then((response) => response.json())
  .then((json) => console.log(json));
