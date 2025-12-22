function lazyLoadingImages() {
    const lazyLoadImagesOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    }

    const lazyLoadImagesCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.img_src;
                observer.unobserve(entry.target);
            }
        });
    }

    const lazyLoadImagesObserver = new IntersectionObserver(lazyLoadImagesCallback, lazyLoadImagesOptions);

    const images = document.querySelectorAll('img[data-img_src]');
    images.forEach(img => lazyLoadImagesObserver.observe(img));
}
