$(function(){
    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        prevArrow: '<button class="arrow-left"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" transform="rotate(-180 24 24)" fill="white"/><path d="M34.0645 24.2256C34.6167 24.2256 35.0645 23.7779 35.0645 23.2256C35.0645 22.6733 34.6167 22.2256 34.0645 22.2256V24.2256ZM13.2283 22.5185C12.8378 22.909 12.8378 23.5422 13.2283 23.9327L19.5923 30.2967C19.9828 30.6872 20.616 30.6872 21.0065 30.2967C21.397 29.9061 21.397 29.273 21.0065 28.8824L15.3496 23.2256L21.0065 17.5687C21.397 17.1782 21.397 16.545 21.0065 16.1545C20.616 15.764 19.9828 15.764 19.5923 16.1545L13.2283 22.5185ZM34.0645 22.2256L13.9354 22.2256V24.2256L34.0645 24.2256V22.2256Z" fill="#1E1B1B"/></svg></button>',
        nextArrow: '<button class="arrow-right"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="white"/><path d="M13.9355 23.7744C13.3833 23.7744 12.9355 24.2221 12.9355 24.7744C12.9355 25.3267 13.3833 25.7744 13.9355 25.7744V23.7744ZM34.7717 25.4815C35.1622 25.091 35.1622 24.4578 34.7717 24.0673L28.4077 17.7033C28.0172 17.3128 27.384 17.3128 26.9935 17.7033C26.603 18.0939 26.603 18.727 26.9935 19.1176L32.6504 24.7744L26.9935 30.4313C26.603 30.8218 26.603 31.455 26.9935 31.8455C27.384 32.236 28.0172 32.236 28.4077 31.8455L34.7717 25.4815ZM13.9355 25.7744H34.0646V23.7744H13.9355V25.7744Z" fill="#1E1B1B"/></svg></button>,',
        responsive: [
            {
              breakpoint: 871,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
              }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true
                }
            },
        ]
    });
});

const accordionItemHeaders = document.querySelectorAll(".faq-item__head");
accordionItemHeaders.forEach(accordionItemHeader =>{
    accordionItemHeader.addEventListener("click", event =>{
        const currentlyActiveAccordionItemHeader = document.querySelector(".faq-item__head.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader){
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

$('.menu__btn').on('click', function(){
    $('.nav__list').toggleClass('nav__list--active');
});