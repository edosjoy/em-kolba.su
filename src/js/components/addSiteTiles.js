function addSiteTiles(filterCategory) {
    const tilesWrapper = document.querySelector('.js-tiles-list');
    const webSites = getWebSites();

    tilesWrapper.innerHTML = '';

    webSites.forEach(webSite => {
        if (webSite.categories.includes(filterCategory) || filterCategory === 'Все') {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.innerHTML = `
                <div class="tile__image">
                    <img src="${webSite.image.src}" alt="${webSite.image.alt}">
                </div>
                <div class="tile__description">
                    <div class="tile__categories">
                        ${webSite.categories.map(category => `<div class="tile__categories-item">#${category}</div>`).join('')}
                    </div>
                    <h2 class="tile__heading">${webSite.heading}</h2>
                    <div class="tile__text">${webSite.text}</div>
                    <a href="${webSite.link}?utm_source=em-kolba.su&utm_medium=organic&utm_campaign=catalog"
                        class="tile__button"
                        target="_blank"
                        onclick="ym(105843941,'reachGoal','goToTheSite'); return true;"
                    >Перейти</a>
                </div>`;
            tilesWrapper.insertAdjacentElement('beforeend', tile);
        }
    });
}
