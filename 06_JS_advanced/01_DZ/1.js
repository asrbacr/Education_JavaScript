"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = 
[
    {
      title: "Album 1",
      artist: "Artist 1",
      year: "2010"
    },
    {
      title: "Album 2",
      artist: "Artist 2",
      year: "2015"
    },
    {
      title: "Album 3",
      artist: "Artist 3",
      year: "2020"
    }
  ]

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (let album of this.albums) {
      yield `${album.title} - ${album.artist} (${album.year})`;
    }
  },
};

for (const album of albums) {
  console.log(album);
}