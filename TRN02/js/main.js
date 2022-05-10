$(function(){
    ////////////////////////////////////////

    $('.top_banner i').on('click', function(){
        $('.top_banner').slideUp(1500);
    })


    //순서가 중요하다. init reInit 을 사용해서 처음 시작부터 적용되게함.글자색 바꾸기//
    $('.main_slider').on('init reInit afterChange', function(){
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on')
    })


    //슬라이더와 슬라이더 옵션//
    $('.main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    });

    // //슬라이더 활성화 시 .on 클래스 붙이기//
    // $('.main_slider').on('afterChange', function(){
    // let current = $('.slick-current');
    // current.addClass('on').siblings().removeClass('on')
    // })

//-----------movie -----------------------//
//그냥 nth-child는 3번째가 되고 nth-of-type은 저 태그안에서 첫번째//
    $('.movie .dec i:nth-of-type(1)').on('click', function(){
        $('.movie video').trigger('play')
    });
    
    $('.movie .dec i:nth-of-type(2)').on('click', function(){
        $('.movie video').trigger('pause')
    });

    $("#myMovie").YTPlayer({
        videoURL:'h3rKe6DdC18',
                        containment:'.utube',
                        autoPlay:true, 
                        mute: true, 
                        startAt:0, 
                        opacity:1,
                        showControls: false,
                        playOnlyIfVisible: true,
    });

    $('.utube i:nth-of-type(1)').on('click', function(){
        $("#myMovie").YTPPlay();
    });

    $('.utube i:nth-of-type(2)').on('click', function(){
        $("#myMovie").YTPPause();
    });

    ///////////////////////////////////////
})