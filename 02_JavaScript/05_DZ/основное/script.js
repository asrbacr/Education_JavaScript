fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((response) => response.json())
  .then((resultParse) => {
    console.log(resultParse);
    console.log(resultParse.bpi);
    
    for (const key in resultParse.bpi) {
        const contEl = document.querySelector("div.contaner");
  
        elemEl = document.createElement('div');
        elemEl.classList.add('border');
        contEl.appendChild(elemEl);
    
        const nameCurr = document.createElement("h3");
        nameCurr.classList.add("name-currency");
        elemEl.appendChild(nameCurr);
        nameCurr.innerHTML = `BTC ${resultParse.bpi[key].code}`;
        
        const nameDescr = document.createElement("p");
        nameDescr.classList.add("name-description");
        elemEl.appendChild(nameDescr);
        nameDescr.innerHTML = resultParse.bpi[key].description;
        
        // console.log(resultParse.bpi[key]);
        const nameRate = document.createElement("p");
        nameRate.classList.add("name-description");
        elemEl.appendChild(nameRate);
        nameRate.innerHTML = resultParse.bpi[key].rate_float;
    }


  });
