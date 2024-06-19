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
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function findFastestCity(cities) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          let closestCity = null;
          let shortestDistance = Infinity;

          cities.forEach((city) => {
            const distance = calculateDistance(userLocation, city.location);
            if (distance < shortestDistance) {
              closestCity = city.name;
              shortestDistance = distance;
            }
          });

          resolve(closestCity);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            reject(new Error("Пользователь отказал в доступе к геолокации."));
          } else {
            reject(new Error("Ошибка при получении местоположения"));
          }
        }
      );
    } else {
      reject(new Error("Геолокация не поддерживается вашим браузером."));
    }
  });
}

const cities = [
  { name: "Нью-Йорк", location: [40.7128, -74.006] },
  { name: "Лондон", location: [40.7128, -74.006] },
  { name: "Токио", location: [40.7128, -74.006] },
  { name: "Москва", location: [40.7128, -74.006] },
  { name: "Абакан", location: [53.72, 91.43] },
  { name: "Химки", location: [55.9, 37.43] },
  { name: "Чайковский", location: [56.77, 54.11] },
  { name: "Чапаевск", location: [52.98, 49.71] },
  { name: "Чебоксары", location: [56.13, 47.25] },
  { name: "Челябинск", location: [55.15, 61.43] },
  { name: "Черёмушки", location: [55.66, 37.56] },
  { name: "Черемхово", location: [53.16, 103.07] },
  { name: "Череповец", location: [59.13, 37.9] },
  { name: "Черкесск", location: [44.22, 42.06] },
  { name: "Черногорск", location: [53.82, 91.28] },
  { name: "Чехов", location: [55.15, 37.48] },
  { name: "Чистополь", location: [55.36, 50.64] },
  { name: "Чита", location: [52.03, 113.5] },
  { name: "Чусовой", location: [58.3, 57.81] },
  { name: "Шадринск", location: [56.09, 63.63] },
  { name: "Шахты", location: [47.71, 40.21] },
  { name: "Шуя", location: [56.85, 41.39] },
  { name: "Щекино", location: [54.01, 37.52] },
  { name: "Щёлково", location: [55.93, 37.97] },
  { name: "Эжва", location: [61.81, 50.73] },
  { name: "Электросталь", location: [55.79, 38.45] },
  { name: "Элиста", location: [46.31, 44.26] },
  { name: "Энгельс", location: [51.48, 46.11] },
  { name: "Южно-Сахалинск", location: [46.95, 142.74] },
  { name: "Якутск", location: [62.03, 129.73] },
  { name: "Ярославль", location: [57.63, 39.87] },
  { name: "Ярцево", location: [55.07, 32.7] },
];

findFastestCity(cities)
  .then((closestCity) => {
    console.log(closestCity);
  })
  .catch((error) => {
    console.log(error.message);
  });
