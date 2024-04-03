


$(document).ready(function() {


     $(window).scroll(function () {
         if ($(this).scrollTop() > 400) { // при прокрутке страницы
         $('.process').addClass('show');   // добавляем класс
         }
         });

     $(window).scroll(function () {
         if ($(this).scrollTop() > 1100) { // при прокрутке страницы
         $('.wrap-list').addClass('show');   // добавляем класс
         }
         });

         $(window).scroll(function () {
             if ($(this).scrollTop() > 6000) { // при прокрутке страницы
             $('.about').addClass('show');   // добавляем класс
             }
            });

             $(window).scroll(function () {
                 if ($(this).scrollTop() > 6400) { // при прокрутке страницы 
                 $('.contacts').addClass('show');   // добавляем класс
                 }
                });

    $("#1__link").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".process").offset().top
        }, 1000);
    });

    $("#2__link").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".list").offset().top
        }, 1000);
    });

    $("#3__link").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });

    $("#4__link").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contacts").offset().top
        }, 1000);
    });



    $('#button-describe-1').click(function() {
        $('#button-describe-1').addClass('active');
        $('#button-describe-1').removeClass('button-describe');
        $('#button-describe-6, #button-describe-2, #button-describe-3, #button-describe-4, #button-describe-5').removeClass('active');
        $('#button-describe-6, #button-describe-2, #button-describe-3, #button-describe-4, #button-describe-5').addClass('button-describe');
        $('#1-describe').removeClass('hidden');
        $('#1-describe').addClass('describe');
        $('#2-describe, #3-describe, #4-describe, #5-describe, #6-describe').removeClass('describe');
        $('#2-describe, #3-describe, #4-describe, #5-describe, #6-describe').addClass('hidden');


    });

    $('#button-describe-2').click(function() {
        $('#button-describe-2').addClass('active');
        $('#button-describe-2').removeClass('button-describe');
        $('#button-describe-6, #button-describe-1, #button-describe-3, #button-describe-4, #button-describe-5').removeClass('active');
        $('#button-describe-6, #button-describe-1, #button-describe-3, #button-describe-4, #button-describe-5').addClass('button-describe');
        $('#2-describe').removeClass('hidden');
        $('#2-describe').addClass('describe');
        $('#1-describe, #3-describe, #4-describe, #5-describe, #6-describe').removeClass('describe');
        $('#1-describe, #3-describe, #4-describe, #5-describe, #6-describe').addClass('hidden');

    });

    $('#button-describe-3').click(function() {
        $('#button-describe-3').addClass('active');
        $('#button-describe-3').removeClass('button-describe');
        $('#button-describe-6, #button-describe-2, #button-describe-1, #button-describe-4, #button-describe-5').removeClass('active');
        $('#button-describe-6, #button-describe-2, #button-describe-1, #button-describe-4, #button-describe-5').addClass('button-describe');
        $('#3-describe').removeClass('hidden');
        $('#3-describe').addClass('describe');
        $('#1-describe, #2-describe, #4-describe, #5-describe, #6-describe').removeClass('describe');
        $('#1-describe, #2-describe, #4-describe, #5-describe, #6-describe').addClass('hidden');

    });

    $('#button-describe-4').click(function() {
        $('#button-describe-4').addClass('active');
        $('#button-describe-4').removeClass('button-describe');
        $('#button-describe-6, #button-describe-2, #button-describe-3, #button-describe-1, #button-describe-5').removeClass('active');
        $('#button-describe-6, #button-describe-2, #button-describe-3, #button-describe-1, #button-describe-5').addClass('button-describe');
        $('#4-describe').removeClass('hidden');
        $('#4-describe').addClass('describe');
        $('#1-describe, #3-describe, #2-describe, #5-describe, #6-describe').removeClass('describe');
        $('#1-describe, #3-describe, #2-describe, #5-describe, #6-describe').addClass('hidden');

    });
    $('#button-describe-5').click(function() {
        $('#button-describe-5').addClass('active');
        $('#button-describe-5').removeClass('button-describe');
        $('#button-describe-6, #button-describe-2, #button-describe-3, #button-describe-4, #button-describe-1').removeClass('active');
        $('#button-describe-6, #button-describe-2, #button-describe-3, #button-describe-4, #button-describe-1').addClass('button-describe');
        $('#5-describe').removeClass('hidden');
        $('#5-describe').addClass('describe');
        $('#1-describe, #3-describe, #4-describe, #2-describe, #6-describe').removeClass('describe');
        $('#1-describe, #3-describe, #4-describe, #2-describe, #6-describe').addClass('hidden');

    });
    $('#button-describe-6').click(function() {
        $('#button-describe-6').addClass('active');
        $('#button-describe-6').removeClass('button-describe');
        $('#button-describe-1, #button-describe-2, #button-describe-3, #button-describe-4, #button-describe-5').removeClass('active');
        $('#button-describe-1, #button-describe-2, #button-describe-3, #button-describe-4, #button-describe-5').addClass('button-describe');
        $('#6-describe').removeClass('hidden');
        $('#6-describe').addClass('describe');
        $('#1-describe, #3-describe, #4-describe, #5-describe, #2-describe').removeClass('describe');
        $('#1-describe, #3-describe, #4-describe, #5-describe, #2-describe').addClass('hidden');

    });

    $('.href').hover(function() {
        $('#angle-1').removeClass('scale-cont-3');
        $('#angle-2').removeClass('scale-cont-4');
        $('#angle-1').addClass('scale-cont-1');
        $('#angle-2').addClass('scale-cont-2');

        $('.href').mouseout(function() {
            $('#angle-1').removeClass('scale-cont-1');
            $('#angle-2').removeClass('scale-cont-2');
            $('#angle-1').addClass('scale-cont-3');
            $('#angle-2').addClass('scale-cont-4');
        });

    });




});


