/* Файл для создания галереи изображений */

// Массив данных изображений галереи.
const NAMES = [
  { name: 'sunset', width: '355', height: '142', alt: 'заката' },
  { name: 'ice-cream', width: '355', height: '355', alt: 'мороженого' },
  { name: 'tape', width: '355', height: '237', alt: 'кассеты' },
  { name: 'books', width: '355', height: '355', alt: 'книг' },
  { name: 'sunset', width: '355', height: '237', alt: 'заката' },
];

/**
 * Определение типа GalleryPictureData.
 * @typedef {Object} GalleryPictureData
 * @prop {string} name Название файла изображения.
 * @prop {string} width Начальная ширина изображения.
 * @prop {string} height Начальная высота изображения.
 * @prop {string} alt Альтернативный текст изображения.
 * @prop {string} className Класс блока галереи изображения.
 */

/**
 * Функция создания разметки изображения галереи.
 * @param {GalleryPictureData}
 * @returns {string} Разметка изображения галереи.
 */
function getGalleryPictureTemplate({ name, width, height, alt, className = 'gallery' }) {
  return `<figure class="${className}-picture">
                <picture>
                  <source
                    srcset="./images/${name}@2x.avif 2x, ./images/${name}@1x.avif 1x"
                    type="image/avif"
                  />
                  <source
                    srcset="./images/${name}@2x.webp 2x, ./images/${name}@1x.webp 1x"
                    type="image/webp"
                  />
                  <img
                    class="${className}-picture__media"
                    width="${width}"
                   height="${height}"
                    srcset="./images/${name}@2x.png 2x"
                    src="./images/${name}@1x.png"
                    alt="Изображение ${alt}"
                  />
                </picture>
                <figcaption class="visually-hidden">Изображение ${alt}</figcaption>
              </figure>`;
}

/**
 * Определение типа GalleryClass.
 * @typedef {Object} GalleryClass
 * @prop {string} COMPONENT Класс компонента галереи.
 * @prop {string} GRID Класс сетки галереи.
 * @prop {string} ITEM Класс элемента сетки галереи.
 */

/**
 * Функция создания разметки галереи.
 * @param {Array<Object>} data Массив данных изображений.
 * @param {number} size Размер галереи.
 * @param {GalleryClass} GalleryClass
 * @returns {string} Разметка галереи.
 */
function getGalleryTemplate(
  data = NAMES,
  size = NAMES.length,
  { COMPONENT, GRID, ITEM } = {
    COMPONENT: 'gallery',
    GRID: 'gallery__list',
    ITEM: 'gallery__item',
  },
) {
  const galleryContent = Array.from(
    new Array(size),
    (_, i) => `<li class="${ITEM}">${getGalleryPictureTemplate(data[i])}</li>`,
  ).join('\n');
  return `<div class="${COMPONENT}">
    <ul class="${GRID}">
      ${galleryContent}
    </ul>
  </div>`;
}

/**
 * Функция формирования элемента по шаблону.
 * @param {string} data Шаблон элемента.
 * @returns {HTMLElement}
 */
function getTemplate(data) {
  const element = document.createElement('div');
  element.innerHTML = data;
  return element.firstChild;
}
