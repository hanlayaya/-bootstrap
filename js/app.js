$(function () {
    // alert("dlkf");
    $('.prev-slide').on('click',function () {
       $('#carousel1').carousel('prev');
    });
    $('.next-slide').on('click',function () {
        $('#carousel1').carousel('next');
    });

    $(document).on('keydown',function (e) {
        // console.log(e.which);
        switch (e.which){
            case 37:
                $('#carousel1').carousel('prev');
                break;
            case 39:
                $('#carousel1').carousel('next');
                break;
        }
    });

    var play =false;
    $('.play-and-stop').click(function () {
        if (!play){
            $('.carousel').carousel('cycle');
            $(this).children('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
        }else {
            $('.carousel').carousel('pause');
            $(this).children('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
        }
        play = !play;
    });
});