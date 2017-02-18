$(".navbar-toggle").click(
    function () {
        $('.navbar-menu').toggleClass("navbar-menu__active");
    }
);

var masonryOptions = {
    itemSelector: '.item',
    columnWidth: 232.5
};

// initialize Masonry
var $container = $('#container').masonry(masonryOptions);

(checkAndRepaint)();
window.onresize = checkAndRepaint;

function checkAndRepaint() {

    if (window.innerHeight >= 768) {
        $container.masonry(masonryOptions); // re-initialize
    } else {
        $container.masonry('destroy'); // destroy
    }
}

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
    prevArrow: '<span class="slick-prev slick-arrow icon-prev"></span>'
});
