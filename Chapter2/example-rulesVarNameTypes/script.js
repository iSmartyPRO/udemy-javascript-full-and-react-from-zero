
// В этом примере - через какое-то время будет непонятно суть переменных
// const a = 5000;
// const b = 4000;
// console.log('Ширина кузова автомобиля: ' + a + ', длина: ' + b);

// Тут уже получше, но нет конкретики
// const width = 5000;
// const length = 4000;
// console.log('Ширина кузова автомобиля: ' + width + ', длина: ' + length);


// Тут уже имеется конкретика и даже другому программисту будет понятно о чём идёт речь в любой части кода -= а ведь код может быть большим.
const   vehicleBodyWidth = 5000,
	vehicleBodyLength = 4000;
console.log('Ширина кузова автомобиля: ' + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

// camelCase
// snake_case
// UPPER_SNALE_CASE
// Kebab-case   - слова нанизываем на дефис
// PascalCase   - будем использовать для названия классов в JavaScript - первая буква должна быть большой

// Пример обозначение UPPER_SNALE_CASE для определения цвета
const _apiBase = 'https://gateway.marvel.com/v1/public';
const _apiKey = 'apikey=lkjasljdlkjasdlkjalsdkjasd';

const COLOR_RED = '#F00';
console.log({COLOR_RED, _apiBase, _apiKey});