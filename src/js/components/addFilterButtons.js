function addFilterButtons() {
    const filter = document.querySelector('.js-filter');
    const webSites = getWebSites();

    const categories = [];

    webSites.forEach(webSite => webSite.categories.forEach(category => !categories.includes(category) && categories.push(category)));

    categories.sort();

    filter.innerHTML = '';

    addButton('Все', true);

    categories.forEach(category => addButton(category, false));

    function addButton(text, isActive) {
        const button = document.createElement('button');
        button.classList.add('filter__btn');
        isActive && button.classList.add('filter__btn_active');
        button.innerText = text;
        filter.insertAdjacentElement('beforeend', button);
    }
}
