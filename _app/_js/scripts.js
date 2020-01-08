//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js
var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {

    /* Якорь */
    $(function () {
        $("a[href='#plan']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    $(".video-wrapper-revs img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1"  allowfullscreen></iframe>')
    });
    $(function () {
        $('#video-revs').on('slide.bs.carousel', function () {
            $('.video-wrapper-revs iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img class="video_rev_img" src="' + l + '" alt="Видео отзыв">');
            });
            $(".video-wrapper-revs img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            });
        });
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            transitionEffect: 'slide',
            speed: 330,
            opacity: "auto",
            closeBtn: 1,
            loop: 1,

        });
    });
    /*Конец документа*/
});