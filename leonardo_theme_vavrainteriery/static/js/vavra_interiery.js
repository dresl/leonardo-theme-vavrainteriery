/* JS */

// set height to fullscreen backgrounds
$(function() {
setTimeout(function(){
        var footerHeight = $('footer').height() + 15;
        var heightHlaf = window.innerHeight/2;
        var insertSizeBg = heightHlaf + 'px, cover';
        $('.slide2').css('background-position', '100px bottom,center')
        $('.slide2').css('background-size', insertSizeBg)
        $('.leonardo-widget.contextnavigation-base-default').css('height',window.innerHeight - footerHeight + 'px');
        window.onresize = function(event) {
            $('.leonardo-widget.contextnavigation-base-default').css('height',window.innerHeight - footerHeight + 'px');
            var heightHlaf = window.innerHeight/2;
            var insertSizeBg = heightHlaf + 'px, cover';
            $('.slide2').css('background-size', insertSizeBg)
        };
    }, 300);
document.getElementById('toolbar-video').play();
});
