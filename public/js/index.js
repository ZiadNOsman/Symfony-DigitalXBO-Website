//this function is used to detect when elements are scrolled into view
//to be used for animations
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


//functions to animate the desired element
//to be used for animations

function verticalAnimate(identifier) {
    if ($(identifier).isInViewport()) {
        $(identifier).addClass("animateVertical");
    } else {
        $(identifier).removeClass("animateVertical");
    }
}

function horizontalAnimateLeft(identifier) {
    if ($(identifier).isInViewport()) {
        $(identifier).addClass("animateHorizontal-left");
    } else {
        $(identifier).removeClass("animateHorizontal-left");
    }
}

function horizontalAnimateRight(identifier) {
    if ($(identifier).isInViewport()) {
        $(identifier).addClass("animateHorizontal-right");
    } else {
        $(identifier).removeClass("animateHorizontal-right");
    }
}

//to animate new objects, call the desired animation from the above functions insde the function animateAll

function animateAll() {
    //check which section is in view and animate it
    //to animate a new element, just call the function in here.
    //the function checks if the specified element is in view
    verticalAnimate('.aboutus-description');
    verticalAnimate('.section-start-ourcrew');

    horizontalAnimateLeft('.aboutus-card1');

    horizontalAnimateLeft('.section-start-careers');


    horizontalAnimateRight('.aboutus-card2');


}

window.onload = function () {

    //since when the page loads, all the elements are hidden, call the animate function to make the objects that are in view appear
    //this helps if the user reloads the page while they're in the middle of it. instead of getting a blank page after the reload, the elements in view will appear thanks to calling this function
    animateAll();

    //this function is called whenever the screen is scrolled
    //make the objects that are now in view appear, and those out of view disappear
    $(window).on('resize scroll', function () {
        animateAll();
    });



    //for navigating to a specific section of the page when a navigation button is clicked

    $(".aboutus-btn").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-start-aboutus").offset().top
        }, 1000);
    });

    $(".ourcrew-btn").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-start-ourcrew").offset().top
        }, 1000);
    });

    $(".careers-btn").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-start-careers").offset().top
        }, 1000);
    });


}