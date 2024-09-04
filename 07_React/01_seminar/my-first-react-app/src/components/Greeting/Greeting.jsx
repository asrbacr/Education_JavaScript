function Greeting() {
  const timeDate = new Date().getHours();
  let resultTimeDate;
  switch (timeDate) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      resultTimeDate = "Доброе утро";
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      resultTimeDate = "Добрый день";
      break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      resultTimeDate = "Добрый вечер";
      break;
    default:
      resultTimeDate = "Доброй ночь";
  }

  return (
    <div className="App">
      <h2>{resultTimeDate}, React файл jsx!</h2>
    </div>
  );
}

export default Greeting;
