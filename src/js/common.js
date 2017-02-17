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
