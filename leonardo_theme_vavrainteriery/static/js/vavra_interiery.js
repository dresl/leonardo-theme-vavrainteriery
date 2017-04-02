/* JS */

// set height to fullscreen backgrounds
$(function() {    
    var footerHeight = $('footer').height() + 15;
    $('.leonardo-widget.contextnavigation-base-default').css('height',window.innerHeight - footerHeight + 'px');
    window.onresize = function(event) {
        $('.leonardo-widget.contextnavigation-base-default').css('height',window.innerHeight - footerHeight + 'px');
    };
});
