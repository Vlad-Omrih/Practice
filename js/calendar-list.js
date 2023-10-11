export function render(data) {

// : 
// Array(12)
// 0
// : 
// brief
// : 
// "Митап \"Обмен опытом в тестировании: от стартапа до энтерпрайза\""
// date_range
// : 
// "4 октября 2023"
// location
// : 
// "Онлайн: по всему миру"
// logo
// : 
// "//conf.ontico.ru//binary/59/131/df0c1d03bc547b8a112e307c92e/file.svg"
// name
// : 
// "Митап \"Обмен опытом в тестировании: от стартапа до энтерпрайза\""
// uri
// : 
// "https://tdconf.ru/sber-meetup"
const $container = document.createElement('div');
const $calendarList = document.createElement('ul');

const calendar = document.getElementById('calendar');
calendar.append($container);
$container.append($calendarList);

$container.classList.add('container');
$calendarList.classList.add('calendar__list');

for (const product of data.result) {
    const $calendarItem = document.createElement('li');
    const $dateRange = document.createElement('p')
    const $cardWrapper = document.createElement('div');
    const $logo = document.createElement('img');
    const $name = document.createElement('h5');
    const $brief = document.createElement('p');
    const $location = document.createElement('p');
    const $uri = document.createElement('a');
    const $calendarItemFooter = document.createElement('div');
    const $buyButton = document.createElement('button');
    const $moreButton = document.createElement('a');

    $calendarItem.classList.add('calendar__item');
    $dateRange.classList.add('calendar__date');
    $cardWrapper.classList.add('card-wrapper');
    $logo.classList.add('calendar__logo');
    $name.classList.add('calendar__title');
    $brief.classList.add('calendar__descr');
    $location.classList.add('calendar__location');
    $uri.classList.add('calendar__uri');
    $calendarItemFooter.classList.add('calendar__footer');
    $buyButton.classList.add('calendar__btn');
    $moreButton.classList.add('more-btn');


    $dateRange.textContent = product.date_range;
    $name.textContent = product.name;
    $brief.textContent = product.brief;
    $location.textContent = product.location;
    $uri.textContent = product.uri;
    $buyButton.textContent = "Купить билет";
    $moreButton.textContent = "Подробнее";

    $uri.setAttribute("href", product.uri);
    $logo.setAttribute("src", product.logo);

    $calendarList.append($calendarItem);
    $calendarItem.append($dateRange);
    $calendarItem.append($cardWrapper);
    $cardWrapper.append($logo);
    $cardWrapper.append($name);
    $calendarItem.append($brief);
    $calendarItem.append($location);
    $calendarItem.append($uri);
    $calendarItem.append($calendarItemFooter);
    $calendarItemFooter.append($buyButton);
    $calendarItemFooter.append($moreButton);
    }
}