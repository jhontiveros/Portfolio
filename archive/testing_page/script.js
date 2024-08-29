$(document).ready(function() {
    const navIds = ['work', 'services', 'about', 'contact']

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navIds.forEach((id) => {
                    $(`#${id}-link`).removeClass('nav__link--active');
                });
                const navTarget = entry.target.id + '-link';
                $(`#${navTarget}`).addClass('nav__link--active');
            } else {
                if (entry.target.id == 'services' && entry.intersectionRect.y != 0) {
                    navIds.forEach((id) => {
                        $(`#${id}-link`).removeClass('nav__link--active');
                    });
                    const navTarget = 'work-link';
                    $(`#${navTarget}`).addClass('nav__link--active')
                }
            }
        });
    }
    
    let options = {
        threshold: 1.0,
      };
      
    
    let observer = new IntersectionObserver(callback, options);

    navIds.forEach((id) => {
        const target = document.querySelector(`#${id}`);
        observer.observe(target);
    });
});