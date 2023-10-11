const cssPromises = {};

function loadListData(src) {
   //javaScript module
   if (src.endsWith('.js')) {
    return import(src);
   }
   // CSS файл
   if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = src;
        cssPromises[src] = new Promise(resolve => {
            link.addEventListener('load', () => resolve());
        });
        document.head.append(link);
    }
    return cssPromises[src];
   }
   // Данные сервера
   return fetch(src).then(res => res.json());
}

Promise.all([
    './calendar-list.js',
    'https://conf.ontico.ru/api/conferences/forCalendar.json'
].map(src => loadListData(src))).then(([pageModule, data]) => {
    pageModule.render(data);
});

