$( function () {
    var charts = $("#reference");

    /* FUNCTIONS */

    // Return boolean when an element is partially visible on screen
    function isPartialVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return ((currElementPosY + elementHeight + elementHeight) > scrollTop && currElementPosY < (viewPortHeight + scrollTop));
    }

    // Return boolean when an element is wholly visible on screen
    function isWholeVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return (currElementPosY > scrollTop && currElementPosY + elementHeight < (viewPortHeight + scrollTop));
    }

    // Animate chart only when you see it
    function animateChartWhenVisible(chart) {
        for (var i = 0, count = chart.length; i < count; i++) {
            if (isWholeVisible(chart[i])) {
                $(chart[i]).addClass("slide");
            }
        }
    }

    /* FUNCTIONS END */

    // On scroll
    $(window).scroll(function () {
        animateChartWhenVisible(charts);
    });

    /* On load */
    animateChartWhenVisible(charts);


})