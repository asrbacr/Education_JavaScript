// Текущее местоположение
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  const { latitude, longitude } = position.coords;
  console.log(
    `Географические координаты устройства ${latitude}, ${longitude}.`
  );
});

// Наблюдение за текущим местоположением
let watchId = navigator.geolocation.watchPosition(({ coords }) => {
  console.log(
    `Устройство обновило местоположение ${coords.latitude}, ${coords.longitude}.`
  );
});

// Остановить отслеживание местоположения
// navigator.geolocation.clearWatch(watchId);

const handlePositionError = (error) => {
  switch (error.code) {
    case 1:
      console.log("Пользователь ограничил доступ к местоположению");
      break;
    case 2:
      console.log("Ошибка устройства определения местоположения");
      break;
    case 3:
      console.log("Достигнут time-out");
      break;
    default:
      console.log("Извините, местоположение недоступно.", error);
      break;
  }
};
