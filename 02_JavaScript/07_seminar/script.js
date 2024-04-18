// Задание 1 (тайминг 125 минут)
// 1. Создание медиа плеера
// 2. Создать файл index.html
// 3. Создать папку img в которую загрузить изображение кнопок play, pause
// 4. Скачать произвольное видео из интернета
// 5. Добавить Тег видео в html
// 6. Продумать внешний вид progress и volume
// 7. Продумать время проигрывателя
// 8. Реализовать функционал своего собственного видео-плеера

const contEl = document.querySelector("div.container");

const videoEl = document.createElement("video");
// videoEl.setAttribute("src", "./video/convert1mb.mp4");
videoEl.setAttribute("src", '');

contEl.appendChild(videoEl);

const playEl = document.createElement("div");
playEl.classList.add("play");

const pauseEl = document.createElement("div");
pauseEl.classList.add("pause");

playEl.addEventListener("click", function (e) {
  videoEl.play();
  console.log(videoEl.duration, videoEl.currentTime);
});

pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
});

const rangeEl = document.createElement("input");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("mam", "100");
rangeEl.setAttribute("value", "0");
rangeEl.addEventListener("change", function (e) {
//   console.log(e.target.value);
  videoEl.currentTime = e.target.value / 100 * videoEl.duration;
});
videoEl.addEventListener("timeupdate", function (e) {
  rangeEl.setAttribute('value', Math.round(videoEl.currentTime / videoEl.duration * 100))
});

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("mam", "100");
volumeEl.setAttribute("value", "0");
videoEl.addEventListener('loadeddata', function (e) {
    volumeEl.setAttribute('value', videoEl.volume * 100);
});
volumeEl.addEventListener('change', function (e) {
    videoEl.volume = e.target.value / 100;
});


contEl.appendChild(playEl);
contEl.appendChild(pauseEl);
contEl.appendChild(rangeEl);
contEl.appendChild(volumeEl);
