function menu(){
  $('#btn').on('click',function(){
    const windowW = $(window).width()

    $('nav .close').css('display','block');
    if(windowW <= 989 && windowW > 580){
      $('nav').animate({right:"0px"},400)
    }
    else if(windowW <= 579 && windowW > 230){
      $('nav').slideToggle()

      // btn
      let btnName = $('#btn').attr('name')
      console.log(btnName)

      if(btnName == 'off'){
        $('p#btn>span:nth-child(1)').css({
          top:'50%',left:'0',transform:'rotate(-45deg)'
        })
        $('p#btn>span:nth-child(2)').css({
          opacity: '0'
        })
        $('p#btn>span:nth-child(3)').css({
          top:'50%',left:'0',transform:'rotate(45deg)'
        })
        $('#btn').attr('name','on')
      }
      else if(btnName == 'on'){
        $('p#btn>span:nth-child(1)').css({
          top:'0',left:'0',transform:'rotate(0deg)'
        })
        $('p#btn>span:nth-child(2)').css({
          opacity: '100'
        })
        $('p#btn>span:nth-child(3)').css({
          top:'100%',left:'0',transform:'rotate(0deg)'
        })
        $('#btn').attr('name','off')
      }
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
    $('html, body').animate({scrollTop:'0'},0);
  })
}

function resize(){
  $(window).on('resize',function(e){
      window.location.reload();
  });
}

