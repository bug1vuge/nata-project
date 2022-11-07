const splideSliderModule = () => {

    new Splide('.reviews__slider', {
        type: 'fade',
        speed: 1000,
        autoplay: true,
        rewind: true,
    }).mount();
};

const burgerMenuModule = () => {
    
    const openButton = document.querySelector('.header__burger-button');
    const closeButton = document.querySelector('.burger-menu__close-button');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.querySelector('body');


    openButton.addEventListener('click', () => { 
        burgerMenu.classList.add('visible');
        body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', () => {
        burgerMenu.classList.remove('visible');
        body.style.overflow = 'scroll';
    });
};

const faqAccordionModule = () => {

    const accordionTriggers = document.querySelectorAll('.faq__accordion-trigger');
    const accordionContentItems = document.querySelectorAll('.faq__accordion-content');

    accordionTriggers.forEach((el, index) => {

        el.addEventListener('click', (e) => {

            const currBtnIndex = index;

            accordionContentItems.forEach((el, index) => {
                const currItemContent = el.querySelector('.faq__accordion-text');
                const currItemIndex = index;

                if (currBtnIndex === currItemIndex) {
                    el.classList.toggle('active');
                    currItemContent.style.maxHeight = `${currItemContent.scrollHeight}px`;
                };

                if (!el.classList.contains('active')) {
                    currItemContent.style.maxHeight = `${0}px`;
                };

            });

        }); 
    });
};

const courseVideoModule = () => {

    const video = document.querySelector('.player__wrapper');

    video.addEventListener('click', (e) => {

        if (video.classList.contains('ready')) {
            return;
        };

        video.classList.add('active');

        video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/8yjkWGRlUmY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
};


faqAccordionModule();
burgerMenuModule();

try {
    splideSliderModule();
} catch (error) { };

try {
    courseVideoModule();
} catch (error) { }
