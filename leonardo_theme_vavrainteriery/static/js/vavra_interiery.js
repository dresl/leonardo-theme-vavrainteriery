/* JS */

// set height to fullscreen backgrounds
$(function() {
setTimeout(function(){
        var footerHeight = $("footer").height() + 15;
        var heightHlaf = window.innerHeight/2;
        var insertSizeBg = heightHlaf + "px, cover";
        $(".slide2").css("background-position", "100px bottom,center")
        $(".slide2").css("background-size", insertSizeBg)
        $(".leonardo-widget.contextnavigation-base-default").css("height",window.innerHeight - footerHeight + "px");
        var preview_img_width = $(".preview-img-swipe").width();
        $(".preview-inner-swipe").css("width", preview_img_width);
        window.onresize = function(event) {
            var footerHeight = $("footer").height() + 15;
            var heightHlaf = window.innerHeight/2;
            var insertSizeBg = heightHlaf + "px, cover";
            $(".slide2").css("background-size", insertSizeBg)
            $(".leonardo-widget.contextnavigation-base-default").css("height",window.innerHeight - footerHeight + "px");
            var height1 = $(".navbar.navbar-fixed-top").height();
            var height2 = $("footer").height();
            var height3 = $(".slider-pagination").height();
            var height4 = $(".kkadavymodule-base-default").height();
            var sum_heights = height1+height2+height3+height4;
            var window_height = window.innerHeight;
            var final_height = (window_height - sum_heights)-120;
            $(".map-vavra-interiery").css("height", final_height);
            var preview_img_width = $(".preview-img-swipe").width();
            $(".preview-inner-swipe").css("width", preview_img_width);
        };
    }, 300);
document.getElementById("toolbar-video").play();
});
