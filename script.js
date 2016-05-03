$(function(){
    var
    Node = $('.lightbox .container'),
    BaseWidth = Node.width();

    // Calculating the size based on scroll position
    $(window).resize();
    var $scrollingDiv = Node;
    $(window).scroll(function() {
        var winScrollTop = $(window).scrollTop() + 0,
            zeroSizeHeight = $(document).height() - $(window).height(),
            newSize = BaseWidth * ( 1 - (winScrollTop / zeroSizeHeight) * (2/3) );

        Node.css({
            width: newSize
        });
    });

    // Trigger the CSS lightbox automagically by triggering the link
    var href = $('.clickbtn').attr('href');
    window.location.href = href;
});
