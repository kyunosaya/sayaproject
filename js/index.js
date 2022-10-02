function menu(){
  $('#btn').on('click',function(){
    const windowW = $(window).width()

    $('nav .close').css('display','block');
    if(windowW <= 989 && windowW > 580){
      $('nav').animate({right:"0px"},400)
    }
    else if(windowW <= 579 && windowW > 230){
      $('nav').slideToggle()
    }
  })
}

function close(){
  $('nav .close').on('click',function(){
    const windowW = $(window).width()

    if(windowW <= 989 && windowW > 580){
      $('nav').animate({right:"-400px"},400,function(){
        $('nav .close').css('display','none');
      })
    }
  })
}

function topBtn(){
  $('.top').on('click',function(){
    $('html, body').animate({scrollTop:'0'},400,'swing');
  })
}

function resize(){
  $(window).on('resize',function(e){
      window.location.reload();
  });
}