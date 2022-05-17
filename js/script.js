$(document).ready(function () {
    //nav
    $('header nav> ul').mouseenter(function () {
        $(this).find('.sub').stop().fadeIn();
    });

    $('header nav > ul').mouseleave(function () {
        $(this).find('.sub').stop().fadeOut();
    });


    //slide
    let img = $('#slide img:first').clone();
    img.appendTo($('#slide ul'));

    let num = 1;

    setInterval(function () {
        if (num > 3) {
            $('#slide ul').css('margin-left', 0);
            num = 1;
        }

        $('#slide ul').animate({
            marginLeft: '-=1200'
        }, 600);
        num++;

    }, 3000);


    //tab-menu

    // tab-btn과 tab-cont를 따로 짰기 때문에 변수에 각각 담아줌
    let tabBtn = $('#tab-btn ul li');
    let tabCont = $('#tab-cont > div')
    //#tab-cont안에 있는 .cont, .gallery를 변수안에 한번에 담아줌!

    tabBtn.click(function () {
        let target = $(this);
        let index = target.index()
        //tabBtn 버튼에 번호를 매겨줌 (0번, 1번)

        tabBtn.removeClass('active');
        // 누르면 .active 클래스 지워줌
        target.addClass('active');
        // 누르면 .active 클래스 생김

        tabCont.css('display', 'none');
        //tabCont공간을 채우고있는 table(공지사항)을 클릭하면 지워지게 함
        tabCont.eq(index).css('display', 'block');

        tabCont.addClass('active-bg');
        // 클릭하면 배경색 따라오게 함
    });


    //modal
    $('#open').click(function () {
        $('#modal').show();
    });
    $('#close').click(function () {
        $('#modal').hide();
    });
})