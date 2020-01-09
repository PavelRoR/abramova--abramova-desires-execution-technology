//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend flipclock.min.js
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
    $(function () {
        /* Таймер */
        var clock;
        var futureDate = new Date("January 13, 2020 00:00 AM UTC+3");
        var currentDate = new Date();
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        function dayDiff(first, second) {
            return (second - first) / (1000 * 60 * 60 * 24);
        }
        if (dayDiff(currentDate, futureDate) < 100) {
            $('.clock').addClass('twoDayDigits');
        } else {
            $('.clock').addClass('threeDayDigits');
        }
        if (diff < 0) {
            diff = 0;
            $('#link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4365&clean=true&lg=ru');
            $('.cost-full span').addClass('unbroken');
            $('.timer, .cost-sale, .cost-today, .prepayment').remove();
        }
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'HourlyCounter',
            countdown: true,
            language: 'ru',
            callbacks: {
                stop: function () {
                    $('#link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4365&clean=true&lg=ru');
                    $('.cost-full span').addClass('unbroken');
                    $('.timer, .cost-sale, .cost-today, .prepayment').remove();
                }
            },
        });
    });
    /*Видео в отзывах*/
    $(".video-wrapper-revs img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1"  allowfullscreen></iframe>')
    });
    $(function () {
        $('#video-revs').on('slide.bs.carousel', function () {
            $('.video-wrapper-revs iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
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