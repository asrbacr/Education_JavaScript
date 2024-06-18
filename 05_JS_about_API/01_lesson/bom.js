console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);
console.log(navigator.doNotTrack);
console.log(navigator.geolocation);

// userAgent — информация о браузере;
// cookieEnabled — включены ли cookie;
// doNotTrack — включена ли опция запрета на отслеживание;
// platform — текущая ОС пользователя;
// geolocation — геолокация, в данном случае не активированная.

// Объект location даёт информацию о текущем URL и позволяет перейти по новому пути.
console.log(location);
// location.href = './first.html';

function calculateDistance(location1, location2) {
  const [lat1, lon1] = location1; // Разбивает координаты первого местоположения на широту и долготу
  const [lat2, lon2] = location2; // Разбивает координаты второго местоположения на широту и долготу

  const toRad = (value) => (value * Math.PI) / 180; // Преобразует значение в радианы
  const R = 6371;

  const dLat = toRad(lat2 - lat1); // Вычисляем разницу широты в радианах
  const dLon = toRad(lon2 - lon1); // Вычисляем разницу долготы в радианах
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(la1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}
