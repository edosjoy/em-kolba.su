function filter() {
    const filterBtns = document.querySelectorAll('.filter__btn');

    filterBtns.forEach(filterBtn => filterBtn.addEventListener('click', e => {
        e.preventDefault();
        const _this = e.target;

        filterBtns.forEach(filterBtn => filterBtn.classList.remove('filter__btn_active'));
        _this.classList.add('filter__btn_active');

        addSiteTiles(_this.innerText);
    }));
}
