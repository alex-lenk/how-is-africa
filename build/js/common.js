$(".navbar-toggle").click(
    function () {
        $('.navbar-menu').toggleClass("navbar-menu__active");
    }
);

(function ($) {
    $(function () {

        $('.blog-filter-select').styler();

    });
})(jQuery);

$('.related-posts-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    nextArrow: '<span class="slick-next slick-arrow icon-next"></span>',
    prevArrow: '<span class="slick-prev slick-arrow icon-prev"></span>',
    responsive: [
        {
            breakpoint: 959,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});